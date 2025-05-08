import BlogArticle from "./BlogArticle";
import SeeMore from "../Btns/SeeMoreBtn";
import articlesData from "../../data/articles.json";
import FadeInOnScroll from "../../FadeInOnScroll";
import styled from "styled-components";
import { media } from "../../media";

const BlogSection = styled.div`
  display: flex;
  padding: 64px 24px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;

  @media ${media.smallDesktop} {
    padding: 128px;
    gap: 128px;
  }
`;

const BlogTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;

  @media ${media.smallDesktop} {
    font-size: 80px;
  }
`;

const Blog = () => {
  return (
    <FadeInOnScroll>
      <BlogSection>
        <BlogTitle>My Words</BlogTitle>
        {articlesData.articles.map((article) => (
          <BlogArticle
            key={article.id}
            date={article.date}
            title={article.title}
            desc={article.desc}
            link={article.link}
            type={article.type}
            img={article.img}
            imgDesc={article.imgDesc}
          />
        ))}
        <SeeMore section="articles" aria-label="See more articles" />
      </BlogSection>
    </FadeInOnScroll>
  );
};

export default Blog;
