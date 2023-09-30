import React from "react";
import {
  DropdownContainer,
  OptionContainer,
} from "@/components/atoms/Dropdown/Dropdown.styles";
import { InputStyleProps } from "@/components/atoms/Input/Input.styles";

interface DropdownProps extends InputStyleProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({
  options,
  defaultValue = "",
  onChange,
  ...props
}: DropdownProps) => {
  return (
    <DropdownContainer
      // style={{ paddingRight: "20px" }}
      {...props}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {defaultValue && <option value="">{defaultValue}</option>}
      {options.map((option) => (
        <OptionContainer key={option} value={option}>
          {option}
        </OptionContainer>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
