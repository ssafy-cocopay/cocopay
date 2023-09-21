import React from "react"
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text.styles";
import cardlistCard1 from "@/assets/images/img-card1.png"
import cardlistKorea from "@/assets/images/img-kor.png"
import iconHamburgerGrey from "@/assets/images/icon-hamburger-grey.png"
import { SHr, SLayout, SContainer, SHamburgerContainer } from "./CardItem.styles"


const CardItem = () => {
    return (
        <div>
            <SLayout>
                <Image
                src={cardlistCard1}
                width={90}
                height={56}
                $unit="px"
                >
                </Image>
                <div
                style={{padding:"8px 0 8px 12px"}}
                >
                    <Image
                        src={cardlistKorea}
                        width={24}
                        height={16}
                        $unit="px"
                        margin="0 8px 0 0"
                        >
                        </Image>
                </div>
                <div
                style={{padding:"8px 12px 8px 0"}}
                >
                    <SContainer
                    style={{margin:"0 0 8px 0"}}
                    >
                        <Text
                        size="small2"
                        fontWeight="regular"
                        color="black1"
                        >
                        위버스 신한카드 체크(BTS)
                        </Text>
                    </SContainer>
                    <SContainer>
                        <Text
                        size="small3"
                        fontWeight="light"
                        color="grey1"
                        margin="0 4px 0 0"
                        >
                            체크
                        </Text>
                        <Text
                        size="small3"
                        fontWeight="light"
                        color="grey1"
                        >
                            3571-89**-****-4485
                        </Text>
                    </SContainer>
                </div>
                <SHamburgerContainer>
                    <Image
                    src={iconHamburgerGrey}
                    width={16}
                    height={12}
                    $unit="px"
                    >
                    </Image>
                </SHamburgerContainer>
            </SLayout>
            <SHr />
        </div>
    )
}

export default CardItem;