import { InputStyleProps, InputContainer } from "./Input.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import React, { ChangeEvent } from "react";
import theme from "@/styles/theme";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputStyleProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  alertMessage?: string;
}

const Input = (
  {
    inputType,
    height,
    $borderRadius,
    $unit,
    fontSize,
    $paddingLeft,
    onChange,
    ...attributes
  }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    // <div>
    <InputContainer
      ref={ref}
      inputType={inputType}
      height={height ?? 64}
      $paddingLeft={$paddingLeft}
      $borderRadius={$borderRadius ?? 10}
      $unit={$unit ?? "px"}
      fontSize={fontSize ?? theme.fontSize.body1}
      onChange={onChange}
      {...attributes}
    />
  );
};

export default React.forwardRef(Input);
