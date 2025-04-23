import styled from "styled-components";
import { media } from "../../media";

const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const ArticleImg = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;
const ArticleDate = styled.p`
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.2rem;
  width: 100%;
`;
const ArticleLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #4ecdc4;
  color: black;

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
`;

const BlogArticle = (props) => {
  return (
    <Article key={props.title} className="m-b-m">
      <ArticleImg src={props.img} />
      <div>
        <ArticleDate className="text-center m-b-s">{props.date}</ArticleDate>
        <h3>{props.title}</h3>
        <p className="m-b-s">{props.desc}</p>
        <p className="text-italic m-b-s">#{props.type}-article</p>
        <ArticleLink className="m-b-s" href={props.link}>
          <ion-icon name="globe-outline"></ion-icon>Read article
        </ArticleLink>
      </div>
    </Article>
  );
};

export default BlogArticle;
