import styled from "styled-components";

interface BackgroundProps {
  colorMode?: "gradient" | "blue";
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => {
    switch (props.colorMode) {
      case "gradient":
        return props.theme.gradient.gradient1;
      case "blue":
        return props.theme.gradient.blue;
      default:
        return props.theme.color.white;
    }
  }};
`;

export { Background };

// 사용예시: <Background colorMode="gradient" /><Background />
