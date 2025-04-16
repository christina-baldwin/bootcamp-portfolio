const BlogArticle = (props) => {
  return (
    <div key={props.title} className="article">
      <img src={props.img} />
      <p>{props.date}</p>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>#{props.type}-article</p>
      <a href={props.link}>Read article</a>
    </div>
  );
};

export default BlogArticle;
