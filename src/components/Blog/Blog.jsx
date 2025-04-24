import BlogArticle from "./BlogArticle";
import SeeMore from "../Btns/SeeMoreBtn";
import articlesData from "../../data/articles.json";
import FadeInOnScroll from "../../FadeInOnScroll";

const Blog = () => {
  return (
    <FadeInOnScroll>
      <div className="m-b-l p-m">
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
        <SeeMore section="articles" />
      </div>
    </FadeInOnScroll>
  );
};

export default Blog;
