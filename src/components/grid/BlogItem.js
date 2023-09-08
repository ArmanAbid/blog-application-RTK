import { Link } from "react-router-dom";


export default function BlogItem({blog ={}}) {
  const {id,title,image,createdAt,likes,tags,isSaved} = blog

  
  const printTags = tags.map((tag,index) =>(
    <span key={index}>#{tag}{tags[index+1]&&","}</span>
  ))
  
  return (
    <>
      <div className="lws-card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="lws-card-image" alt="" />
        </Link>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p className="lws-likeCount">
              <i className="fa-regular fa-thumbs-up"></i>{likes}
            </p>
          </div>
          <Link to={`/blogs/${id}`} className="lws-postTitle">
            {" "}
            {title}{" "}
          </Link>
          <div className="lws-tags">
            {printTags}
          </div>
          {/* <!-- Show this element if post is saved --> */}
          <div className="flex gap-2 mt-4">
            <span className="lws-badge">{isSaved&&" Saved"} </span>
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
    </>
  );
}
