export type CategoryData = {
  category: Category;
  price: number;
  rate: number;
};

export type Category =
  | "편의점"
  | "영화"
  | "문화"
  | "배달"
  | "카페"
  | "대형쇼핑몰"
  | "항공"
  | "음식점"
  | "주유"
  | "온라인쇼핑"
  | "대중교통"
  | "기타";

export const CATEGORY_COLORS: Record<Category, string> = {
  편의점: "#6EF47B",
  영화: "#64F1BF",
  문화: "#9896E9",
  배달: "#FE7AE1",
  카페: "#FFAB5D",
  대형쇼핑몰: "#C496E9",
  항공: "#62E3FF",
  음식점: "#FC6A61",
  주유: "#FCE674",
  온라인쇼핑: "#7FABFD",
  대중교통: "#BDDB68",
  기타: "#E7E7E7",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  편의점: "@/assets/images/icon-circle-convenient.png",
  영화: "@/assets/images/icon-circle-movie.png",
  문화:  "@/assets/images/icon-circle-culture.png",
  배달:  "@/assets/images/icon-circle-delivery.png",
  카페:  "@/assets/images/icon-circle-cafe.png",
  대형쇼핑몰:  "@/assets/images/icon-circle-mart.png",
  항공:  "@/assets/images/icon-circle-flight.png",
  음식점:  "@/assets/images/icon-circle-food.png",
  주유: "@/assets/images/icon-circle-oil.png",
  온라인쇼핑:  "@/assets/images/icon-circle-onlineShopping.png",
  대중교통:  "@/assets/images/icon-circle-transport.png",
  기타:  "@/assets/images/icon-circle-etc.png",
}