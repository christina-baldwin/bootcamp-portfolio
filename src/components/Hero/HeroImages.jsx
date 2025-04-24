import styled from "styled-components";
import { media } from "../../media";

const HeroImgs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 3 / 1;
  height: 20rem;

  @media ${media.tablet} {
    height: 30rem;
  }

  @media ${media.tabletLandscape} {
    height: 40rem;
  }

  @media ${media.smallDesktop} {
    height: 50rem;
  }

  @media ${media.desktop} {
    height: 60rem;
  }

  media ${media.largeDesktop} {
    height: 70rem;
  }
`;
const HeroImg = styled.img`
  position: absolute;
  width: 40%;
  max-width: 300px;
  transition: transform 0.3s ease, z-index 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &.img-1 {
    transform: rotate(-10deg) translateX(-100%);
    z-index: 1;
  }

  &.img-2 {
    transform: rotate(0deg);
    z-index: 2;

    &:hover,
    &:active {
      transition: all 0.3s ease;
      transform: scale(1.07);
    }
  }

  &.img-3 {
    transform: rotate(10deg) translateX(100%);
    z-index: 1;
  }

  @media ${media.desktop} {
    max-width: 400px;
  }
`;

const HeroImages = () => {
  return (
    <HeroImgs className="hero-imgs">
      <HeroImg
        src="/hero-img-1.jpg"
        className="img-1"
        alt="Image of code on a screen."
      />
      <HeroImg
        src="/hero-img-2.png"
        className="img-2"
        alt="Image of Christina Baldwin."
      />
      <HeroImg
        src="/hero-img-3.jpg"
        className="img-3"
        alt="Image of a computer on a desk."
      />
    </HeroImgs>
  );
};

export default HeroImages;
