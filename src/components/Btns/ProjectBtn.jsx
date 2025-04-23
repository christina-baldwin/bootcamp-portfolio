import styled from "styled-components";

const StyledBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 1rem;
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
