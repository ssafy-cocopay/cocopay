import styled from "styled-components";

interface BackgroundProps {
  $colormode?: "gradient" | "blue";
}

const Background = styled.div<BackgroundProps>`
  background: ${(props) => {
    switch (props.$colormode) {
      case "gradient":
        return props.theme.gradient.gradient1;
      case "blue":
        return props.theme.color.blue;
      default:
        return props.theme.color.white;
    }
  }};
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
`;

export { Background };

// 사용예시: <Background $colormode="gradient" /><Background />
