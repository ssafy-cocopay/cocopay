import styled from "styled-components";
import { Container } from "@/components/atoms/Container/Container.styles";

export const ScrollableContainer = styled(Container)`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 85px;
  margin-top: 200px;
  width: auto;
  position: absolute;
  left: -11px;

  /* 스크롤 스냅 설정 */
  scroll-snap-type: x mandatory;

  & > img {
    flex: 0 0 auto;
    scroll-snap-align: center; /* 중앙 정렬 스크롤 스냅 */
    transform: scale(1); /* 초기 스케일 */
    transition: transform 0.3s ease-in-out; /* 애니메이션 효과 */

    /* 선택될 때 (즉, 중앙에 있을 때)의 스타일 */
    &:focus {
      transform: scale(1.1); /* 중앙에 올 때 확대 */
    }
  }
`;

export const BlueContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BarcodeUnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto 20px 15px;
  width: 92%;
`;