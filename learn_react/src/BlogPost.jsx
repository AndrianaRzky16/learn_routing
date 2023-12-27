export default function BlogPost(props) {
  return (
    <div className="blog-post">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
