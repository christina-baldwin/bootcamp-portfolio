import styled from "styled-components";

const Article = styled.div`
  display: flex;
  gap: 3rem;
`;
const ArticleImg = styled.img`
  max-width: 50%;
  border-radius: 5px;
`;
const ArticleDate = styled.p`
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.2rem;
  width: 20%;
`;
const ArticleLink = styled.a`
  display: flex;
  width: 25%;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 1.2rem;
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
