import styled from "styled-components";

interface BackgroundProps {
  colormode?: "gradient" | "blue";
}

const Background = styled.div<BackgroundProps>`
  background: ${(props) => {
    switch (props.colormode) {
      case "gradient":
        return props.theme.gradient.gradient1;
      case "blue":
        return props.theme.color.blue;
      default:
        return props.theme.color.white;
    }
  }};
`;

export { Background };


// 사용예시: <Background colorMode="gradient" /><Background />