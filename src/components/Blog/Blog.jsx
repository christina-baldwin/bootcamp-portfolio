import BlogArticle from "./BlogArticle";
import articlesData from "../../data/articles.json";

const Blog = () => {
  return (
    <div className="m-b-l p-l">
      <h2 className="text-center">Blog</h2>
      {articlesData.articles.map((article) => (
        <BlogArticle
          key={article.id}
          date={article.date}
          title={article.title}
          desc={article.desc}
          link={article.link}
          type={article.type}
          img={article.img}
        />
      ))}
      <button className="see-more-btn">
        <ion-icon name="arrow-down-circle-outline"></ion-icon>See more articles
      </button>
    </div>
  );
};

export default Blog;
