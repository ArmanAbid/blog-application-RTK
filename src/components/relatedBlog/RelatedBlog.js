import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import RelatedBlogItem from "./RelatedBlogItem";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
export default function RelatedBlog({ tags, id }) {
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  },[dispatch,tags,id]);


  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && !relatedBlogs?.lenght) {
    content = <div>No related blogs found</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    // eslint-disable-next-line array-callback-return
    content = relatedBlogs.map((relatedBlog) => (
      <RelatedBlogItem key={relatedBlog.id} relatedBlog={relatedBlog} />
    ));
  }

  
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
