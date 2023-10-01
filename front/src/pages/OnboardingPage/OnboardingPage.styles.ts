import styled from "styled-components";
import { Text } from "@/components/atoms/Text/Text.styles";

export const OnboardingText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.subtitle2};
  font-weight: bold;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.white};
`;
