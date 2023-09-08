import { Link } from "react-router-dom";

export default function RelatedBlogItem({ relatedBlog }) {
  const { id, title, image, createdAt, tags } = relatedBlog;

  const printTags = tags.map((tag, index) => (
    <span key={index}>
      #{tag}
      {tags[index + 1] && ","}
    </span>
  ));
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">{printTags}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
