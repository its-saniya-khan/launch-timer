import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(#1e1e28, #241e2c);
  width: 100%;
  height: 100vh;
  color: #ebebf0;
  font-family: "Red Hat Text", sans-serif;
  font-weight: 700;
  position: relative;
`;

const SVGWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimerWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media only screen and (max-width: 768px) {
    width: 93%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 75%;
  }
`;

const TimerContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 22%;
  }
`;

const TimerBlock = styled.div`
  width: 100%;
  height: 70%;
  transform: ${(props) =>
    props.animate ? "rotateX(360deg)" : "rotateX(0deg)"};
  position: relative;
  min-height: 5 rem;
  background: linear-gradient(
    to bottom,
    #2c2c44 0%,
    #2c2c44 50%,
    #34364f 50%,
    #34364f 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  text-align: center;
  color: #fb5d85;
  overflow: hidden;
  box-shadow: 0 20px 0 0 #1a1a24;
  font-size: 3rem;
  transition: transform ease 0.5s;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -5%;
    transform: translate(0%, -50%);
    border: 0.5rem solid #1a1a24;
    border-radius: 100% 0 0 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -5%;
    transform: translate(0%, -50%);
    border: 0.5rem solid #1a1a24;
    border-radius: 0 100% 100% 0;
  }
`;

const TimerTitle = styled.div`
  color: #84849e;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-top: 20px;
  height: 20%;
  padding: 30px 0;
`;

const HeaderTitle = styled.h1`
  position: absolute;
  top: 15%;
  left: 50%;
  color: #dcdce6;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 8%;
  left: 50%;
  width: 8%;
  height: 5%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

const LaunchedTitle = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  color: #dcdce6;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  font-size: 5rem;
`;

const LaunchedWrapper = styled.h1`
  width: 100%;
  height:100%;
`;

const fly = keyframes`
  0% {
    bottom: 0;
    left: 0;
  }
  25% {
    bottom: -5rem;
  }
  100% {
    bottom: 100%;
  }
`;

const Rocket = styled.img`
  position: absolute;
  width: 15rem;
  height: 15rem;
  transform: rotate(325deg);
  animation: ${fly} 2s ease-out;
`;

export {
  Wrapper,
  SVGWrapper,
  TimerWrapper,
  TimerBlock,
  TimerContainer,
  TimerTitle,
  HeaderTitle,
  FooterContainer,
  LaunchedTitle,
  Rocket,
  LaunchedWrapper
};
