import styled from "styled-components";

interface BackgroundProps {
  colorMode?: "gradient";
}

const Background = styled.div<BackgroundProps>`
  background: ${(props) => {
    switch (props.colorMode) {
      case "gradient":
        return props.theme.gradient.gradient1;
      default:
        return props.theme.color.white;
    }
  }};
`;

export { Background };


// 사용예시: <Background colorMode="gradient" /><Background />