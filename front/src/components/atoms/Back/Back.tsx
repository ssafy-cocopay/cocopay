import React from "react";
import { useCallback } from "react";
import backArrow from "@/assets/images/icon-arrow-left-black.png";
import { Image } from "@/components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import { Text } from "@/components/atoms/Text/Text.styles";
import * as S from "@/components/atoms/Back/Back.styles";
import type { ComponentPropsWithRef } from "react";

interface BackProps extends ComponentPropsWithRef<"div"> {
  children?: string;
}

const Back = ({ children = "뒤로가기" }: BackProps) => {
  const navigate = useNavigate();
  const RouteHandler = useCallback(() => navigate(-1), [navigate]);

  return (
    <S.Back onClick={RouteHandler}>
      <Image src={backArrow} width={1} />
      <Text
        color={"black1"}
        size={"body2"}
        fontWeight={"bold"}
        style={{ marginLeft: "0.5rem" }}
      >
        {children}
      </Text>
    </S.Back>
  );
};

export default Back;

// 사용 예시 : <Back />
