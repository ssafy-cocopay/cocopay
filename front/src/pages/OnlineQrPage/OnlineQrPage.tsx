import React from 'react';
import { QrContainer, QrWrapper } from "./OnlineQrPage.styles"
import { WhiteRoundedBox } from "@/components/atoms/WhiteRoundedBox/WhiteRoundedBox.styles"
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import iconQrcode from "@/assets/images/icon-qrcode.png"
import { useRecoilValue } from 'recoil';
import { IsPurchasedAtom } from '@/states/OnlineQrPageAtoms';

const OnlineQrPage = () => {
    const isPurchased: boolean = useRecoilValue(IsPurchasedAtom);
    console.log(isPurchased, 'here');

    if (isPurchased) {
        return (
        <QrContainer>
            <WhiteRoundedBox
            height='525px'
            $borderRadius='38px 38px 0 0'
            $padding='38px 75px 0 75px'
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
        }}
            >
                <Text
                size='heading1'
                fontWeight='bold'
                $margin='0 0 33px 0'
                style={{
                    textAlign: 'center'
                }}
                >
                    결제완료
                </Text>
                <Text
                size='body1'
                fontWeight='bold'
                style={{
                    textAlign: 'center'
                }}
                >
                    결제완료를 누르시면
                </Text>
                <Text
                size='body1'
                fontWeight='bold'
                $margin='0 0 24px 0'
                style={{
                    textAlign: 'center'
                }}
                >
                    주문 완료창으로 이동합니다.
                </Text>
                <Text
                size='small3'
                fontWeight='regular'
                color='grey2'
                $margin='0 0 36px 0'
                style={{
                    textAlign: 'center'
                }}
                >
                    스마트폰 카메라 및 모든 QR스캐너로 결제 가능
                </Text>
                <QrWrapper>
                    <Image
                        src={iconQrcode}
                        width={210}
                        height={210}
                        $unit='px'
                        style={{
                            borderRadius: '20px'
                        }}
                    >
                    </Image>
                </QrWrapper>
            </WhiteRoundedBox>
        </QrContainer>
        )
    } else {
        return (
            <QrContainer>
                <WhiteRoundedBox
                height='525px'
                $borderRadius='38px 38px 0 0'
                $padding='38px 75px 0 75px'
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
                >
                    <Text
                    size='heading1'
                    fontWeight='bold'
                    $margin='0 0 33px 0'
                    style={{
                        textAlign: 'center'
                    }}
                    >
                    
                        QR결제
                    </Text>
                    <Text
                    size='body1'
                    fontWeight='bold'
                    style={{
                        textAlign: 'center'
                    }}
                    >
                        휴대폰으로 스캔하면
                    </Text>
                    <Text
                    size='body1'
                    fontWeight='bold'
                    $margin='0 0 24px 0'
                    style={{
                        textAlign: 'center'
                    }}
                    >
                        결제 화면으로 이동합니다.
                    </Text>
                    <Text
                    size='small3'
                    fontWeight='regular'
                    color='grey2'
                    $margin='0 0 36px 0'
                    style={{
                        textAlign: 'center'
                    }}
                    >
                        스마트폰 카메라 및 모든 QR스캐너로 결제 가능
                    </Text>
                    <QrWrapper>
                        <Image
                            src={iconQrcode}
                            width={210}
                            height={210}
                            $unit='px'
                            style={{
                                borderRadius: '20px'
                            }}
                        >
                        </Image>
                    </QrWrapper>
                </WhiteRoundedBox>
            </QrContainer>
        );
    }
}

export default OnlineQrPage;
