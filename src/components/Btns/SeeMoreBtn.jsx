import styled from "styled-components";

const SeeMoreBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: black;
  color: white;
  border: 3px solid #4ecdc4;
  cursor: pointer;
  padding: 0px 16px;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  border-radius: 12px;

  &:hover,
  &:active {
    transition: all 0.3s ease;
    transform: translate(2px, -2px);
  }
`;

const SeeMore = (props) => {
  return (
    <SeeMoreBtn>
      <ion-icon name="arrow-down-circle-outline"></ion-icon>
      See more {props.section}
    </SeeMoreBtn>
  );
};

export default SeeMore;
