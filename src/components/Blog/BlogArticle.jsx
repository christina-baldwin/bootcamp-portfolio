import styled from "styled-components";
import { media } from "../../media";

const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;

  @media ${media.smallDesktop} {
    flex-direction: row;
  }

  @media ${media.desktop} {
    flex-direction: row;
  }
`;
const ArticleImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  border-radius: 12px;

  @media ${media.smallDesktop} {
    max-width: 50%;
    height: auto;
  }

  @media ${media.desktop} {
    max-width: 50%;
    height: auto;
  }
`;
const ArticleDate = styled.p`
  border: 1px solid white;
  border-radius: 4px;
  width: 142px;
  padding: 2px 6px;
  text-align: center;

  @media ${media.smallDesktop} {
    width: 40%;
  }
  @media ${media.desktop} {
    width: 30%;
  }
`;

const ArticleTitle = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 500;
`;

const ArticleText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
`;

const ArticleLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 18px;
  transition: all 0.3s ease;
  background-color: #4ecdc4;
  color: black;
  font-weight: 500;

  &:link,
  &:visited {
    background-color: #4ecdc4;
    color: black;
  }

  &:hover,
  &:active {
    transform: translate(2px, -2px);
  }

  @media ${media.tablet} {
    width: 50%;
  }

  @media ${media.tabletLandscape} {
    width: 40%;
  }

  @media ${media.desktop} {
    font-size: 1.2rem;
  }
`;

const BlogArticle = (props) => {
  return (
    <Article key={props.title} className="m-b-m">
      <ArticleImg src={props.img} alt={props.imgDesc} />
      <div>
        <ArticleDate className="text-center m-b-s">{props.date}</ArticleDate>
        <ArticleTitle>{props.title}</ArticleTitle>
        <ArticleText>{props.desc}</ArticleText>
        <p className="text-italic m-b-s">#{props.type}-article</p>
        <ArticleLink
          className="m-b-s"
          href={props.link}
          aria-label="Read the full article"
        >
          <ion-icon name="globe-outline"></ion-icon>Read article
        </ArticleLink>
      </div>
    </Article>
  );
};

export default BlogArticle;
