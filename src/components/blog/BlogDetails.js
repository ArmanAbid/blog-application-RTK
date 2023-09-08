import { useDispatch } from "react-redux";
import { updateBlogLikes,updateBlogSaved } from "../../features/blog/blogSlice";

export default function BlogDetails({blog ={}}) {
  const {id,image,title,tags,likes,isSaved,description} = blog
  const dispatch = useDispatch()

  const printTags = tags.map((tag,index) =>(
    <span key={index}>#{tag}{tags[index+1]&&","}</span>
  ))
  const handleLikes = (id) =>{
    dispatch(updateBlogLikes(id))
  }
  const handleSave = (id) =>{
    dispatch(updateBlogSaved(id))
  }
  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {printTags}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks" onClick={() => handleLikes(id)}>
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click -->
          <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button className={`${isSaved && "active"} save-btn`} id="lws-singleSavedBtn" onClick={() => handleSave(id)}>
            <i className="fa-regular fa-bookmark"></i> {isSaved?"Saved":"Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  );
}
