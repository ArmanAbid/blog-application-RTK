import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import BlogItem from "./BlogItem";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

export default function BlogGrid() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { sort, isSaved } = useSelector((state) => state.filter);


  useEffect(() => {
    dispatch(fetchBlogs({sort,isSaved}));
  }, [dispatch,sort,isSaved]);



  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && blogs?.lenght < 0) {
    content = <div>No blogs found</div>;
  }
  if (!isLoading && !isError && blogs?.length > 0) {
    // eslint-disable-next-line array-callback-return
    content = blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
