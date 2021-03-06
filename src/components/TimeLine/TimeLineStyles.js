import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1624;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  //overflow-x: hidden;

  &:first-of-type {
    margin-left: 0;
  }

  margin-bottom: 80px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export const CarouselMobilScrollNode = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    min-width: ${({ final }) => (final ? "120%" : "min-content")};
  }
`;

export const CarouselItem = styled.div`
  background: #0f1624;
  border-radius: 3px;
  max-width: 196px;

  @media screen and (max-width: 768px) {
    max-width: 124px;
  }

  @media screen and (max-width: 640px) {
    min-width: 120px;
    margin-left: 32px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${({ active, index }) => (active === index ? `opacity: 1` : `opacity: .5`)}
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(121deg, #fff 10%, rgba(255, 255, 255, 0.66) 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: -webkit-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  @media screen and (max-width: 640px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }

  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  opacity: ${({ active, index }) => (active === index ? "1" : ".33")};
  transition: ${({ active, index }) =>
    active === index ? "scale(1.6)" : "scale(1)"};
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
