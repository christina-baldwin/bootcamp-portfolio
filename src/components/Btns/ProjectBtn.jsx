import styled from "styled-components";
import { media } from "../../media";

const StyledBtn = styled.a`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  border-radius: 12px;
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;

  background-color: ${(props) =>
    props.$type === "demo" ? "#4ecdc4" : "transparent"};
  color: ${(props) => (props.$type === "demo" ? "black" : "white")};
  border: ${(props) =>
    props.$type === "demo" ? "3px solid #4ecdc4" : "1px solid white"};

  &:hover,
  &:active {
    transform: translate(2px, -2px);
  }

  @media ${media.tablet} {
    width: 100%;
  }

  @media ${media.tabletLandscape} {
    width: 70%;
  }

  @media ${media.desktop} {
    widht: 60%;
    font-size: 1.2rem;
  }
`;

const ProjectBtn = (props) => {
  return (
    <StyledBtn
      $type={props.linkType}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ion-icon name={props.iconName}></ion-icon>
      {props.text}
    </StyledBtn>
  );
};

export default ProjectBtn;
