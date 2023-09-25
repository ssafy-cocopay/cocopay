/* eslint-disable react/react-in-jsx-scope */
import * as S from "@/components/atoms/Image/Image.styles";

const Image = ({
  width,
  height,
  $margin,
  $boxShadow,
  // $justifyContent,   TODO: 이미지 위치 조정하는 값 기본 설정(하단으로)
  $unit = "rem",
  ...attributes
}: S.ImageProps) => {
  return (
    <S.ImageConatiner
      width={width}
      height={height}
      $margin={$margin}
      $unit={$unit}
      $boxShadow={$boxShadow}
      // $justifyContent={$justifyContent}
      {...attributes}
    />
  );
};

export { Image };

// 활용 예시
// <Image src={backArrow} width={1} />
