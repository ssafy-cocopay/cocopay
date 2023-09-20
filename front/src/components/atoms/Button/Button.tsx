// import React from "react";

// // 자식 컴포넌트의 DOM 요소에 접근하려 할 때 forwardRef 사용
// // 부모 컴포넌트로부터 전달받은 ref를 자식 컴포넌트의 DOM 요소에 연결
// import { forwardRef } from "react";
// import type { ForwardedRef } from "react";

// //  *는 해당 모듈에서 export된 모든 것들
// import * as S from "./Button.styles";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   option?: "default" | "activated" | "deActivated";
//   size?: "small" | "medium";
//   $backgroundColor?: string;
//   $borderColor?: string;
//   $borderRadius?: string;
//   $textAlign?: string; // 기본으로 center으로하면 상관없?
//   $color?: string;
// }

// const Button = (
//   {
//     option,
//     size,
//     $backgroundColor,
//     $borderColor,
//     $border,
//     $color,
//     children,
//     ...attributes
//   }: ButtonProps,
//   ref: ForwardedRef<HTMLButtonElement>
// ) => {
//   return (
//     <S.Button
//       ref={ref}
//       option={option}
//       size={size}
//       $border={$border}
//       $backgroundColor={$backgroundColor}
//       $borderColor={$borderColor}
//       $color={$color}
//       {...attributes}
//     >
//       {children}
//     </S.Button>
//   );
// };

// export default forwardRef(Button);
export{}