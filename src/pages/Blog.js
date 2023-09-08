import BlogDetails from "../components/blog/BlogDetails";
import GoHome from "../components/ui/GoHome";
import RelatedBlog from "../components/relatedBlog/RelatedBlog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../features/blog/blogSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";

export default function Blog() {
  const dispatch = useDispatch();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const { blogId} = useParams();
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && !blog.id) {
    content = <div>No posts found</div>;
  }
  if (!isLoading && !isError && blog.id) {
    // eslint-disable-next-line array-callback-return
    content = (
      <>
        <GoHome />
        <section className="post-page-container">
          <BlogDetails blog={blog} />
          <RelatedBlog id={blog.id} tags={blog.tags}/>
        </section>
      </>
    );
  }
  return <>{content}</>;
}
