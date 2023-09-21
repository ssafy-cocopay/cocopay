import { InputStyleProps, InputContainer } from "./Input.styles";
import { Text } from "@/components/atoms/Text/Text.styles";
import React, { ChangeEvent } from "react";

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
      // paddingLeft={paddingLeft ?? 24}   //TODO : 안됨
      $borderRadius={$borderRadius ?? 10}
      $unit={$unit ?? "px"}
      fontSize={fontSize ?? 50} //TODO : 안됨
      onChange={onChange}
      {...attributes}
    />
  );
};

export default React.forwardRef(Input);
