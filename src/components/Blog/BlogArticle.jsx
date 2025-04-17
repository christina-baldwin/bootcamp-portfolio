import "./BlogArticle.css";

const BlogArticle = (props) => {
  return (
    <div key={props.title} className="article m-b-m">
      <img src={props.img} />
      <div className="article-text">
        <p className="article-date text-center m-b-s">{props.date}</p>
        <h3>{props.title}</h3>
        <p className="m-b-s">{props.desc}</p>
        <p className="category-tag m-b-s">#{props.type}-article</p>
        <a className="article-link m-b-s" href={props.link}>
          <ion-icon name="globe-outline"></ion-icon>Read article
        </a>
      </div>
    </div>
  );
};

export default BlogArticle;
