/* eslint-disable react/react-in-jsx-scope */
import * as S from "@/components/atoms/Image/Image.styles";

const Image = ({
  width,
  height,
  $unit = "rem",
  ...attributes
}: S.ImageProps) => {
  return (
    <S.ImageConatiner
      width={width}
      height={height}
      $unit={$unit}
      {...attributes}
    />
  );
};

export { Image };

// 활용 예시
// <Image src={backArrow} width={1} />
