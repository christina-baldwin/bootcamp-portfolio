import BlogArticle from "./BlogArticle";
import articlesData from "../data/articles.json";

const Blog = () => {
  return (
    <div className="blog">
      <h2>Blog</h2>
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
      <button>See more articles</button>
    </div>
  );
};

export default Blog;
