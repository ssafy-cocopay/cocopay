package com.bank.enumlist;

import com.bank.card_history.entity.DiscountType;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public enum BenefitList {

    실적1("카카오뱅크 프렌즈 체크카드", "온라인쇼핑", "쿠팡", 5, DiscountType.페이백, 1000000),
    실적2("카카오뱅크 프렌즈 체크카드", "배달", "배달의민족", 10, DiscountType.페이백, 1000000),
    실적3("카카오뱅크 프렌즈 체크카드", "주유", "GS칼텍스", 3, DiscountType.페이백, 1000000),
    실적4("카카오뱅크 프렌즈 체크카드", "카페/디저트", "스타벅스", 10, DiscountType.페이백, 1000000),
    실적5("신한카드 Deep Dream 체크", "주유", "GS칼텍스", 1, DiscountType.페이백, 2000),
    실적6("신한카드 Deep Dream 체크", "주유", "SK에너지", 1, DiscountType.페이백, 2000),
    실적7("신한카드 Deep Dream 체크", "주유", "SOIL", 1, DiscountType.페이백, 2000),
    실적8("신한카드 Deep Dream 체크", "대중교통", "지하철", 10, DiscountType.청구할인, 3000),
    실적9("신한카드 Deep Dream 체크", "대중교통", "택시", 10, DiscountType.청구할인, 3000),
    실적10("신한카드 Deep Dream 체크", "대중교통", "버스", 10, DiscountType.청구할인, 3000),
    실적11("신한카드 Deep Dream 체크", "음식점", "VIPS", 1, DiscountType.페이백, 10000),
    실적12("신한카드 Deep Dream 체크", "음식점", "아웃백", 1, DiscountType.페이백, 10000),
    실적13("노리2 체크카드(KB Pay)", "카페", "스타벅스", 10, DiscountType.현장할인, 3000),
    실적14("노리2 체크카드(KB Pay)", "카페", "커피빈", 10, DiscountType.현장할인, 3000),
    실적15("노리2 체크카드(KB Pay)", "카페", "뚜레주르", 10, DiscountType.현장할인, 3000),
    실적16("노리2 체크카드(KB Pay)", "카페", "투썸플레이스", 10, DiscountType.현장할인, 3000),
    실적17("노리2 체크카드(KB Pay)", "카페", "카페베네", 10, DiscountType.현장할인, 3000),

    // "노리2 체크카드(KB Pay)"의 문화 정보
    실적18("노리2 체크카드(KB Pay)", "문화", "구글플레이스토어", 10, DiscountType.청구할인, 5000),
    실적19("노리2 체크카드(KB Pay)", "문화", "앱스토어", 10, DiscountType.청구할인, 5000),
    실적20("노리2 체크카드(KB Pay)", "문화", "올리브영", 5, DiscountType.현장할인, 2000),
    실적21("노리2 체크카드(KB Pay)", "편의점", "GS25", 5, DiscountType.현장할인, 2000),
    실적22("노리2 체크카드(KB Pay)", "편의점", "CU", 5, DiscountType.현장할인, 2000),
    실적23("노리2 체크카드(KB Pay)", "편의점", "세븐일레븐", 5, DiscountType.현장할인, 2000),
    실적24("노리2 체크카드(KB Pay)", "문화", "넷플릭스", 10, DiscountType.청구할인, 2000),
    실적25("노리2 체크카드(KB Pay)", "문화", "유튜브프리미엄", 10, DiscountType.청구할인, 2000),
    실적26("노리2 체크카드(KB Pay)", "배달", "요기요", 1, DiscountType.청구할인, 1000),
    실적27("노리2 체크카드(KB Pay)", "배달", "배달의민족", 1, DiscountType.청구할인, 1000),
    실적28("노리2 체크카드(KB Pay)", "영화", "CGV", 5, DiscountType.현장할인, 8000),
    실적29("노리2 체크카드(KB Pay)", "문화", "에버랜드", 3, DiscountType.현장할인, 15000),
    실적30("노리2 체크카드(KB Pay)", "문화", "롯데월드", 3, DiscountType.현장할인, 15000),
    실적31("노리2 체크카드(KB Pay)", "문화", "인터파크티켓", 10, DiscountType.청구할인, 7000),
    실적32("신한카드 Mr.Life", "편의점", "CU", 10, DiscountType.현장할인, 5000),
    실적33("신한카드 Mr.Life", "편의점", "GS25", 10, DiscountType.현장할인, 5000),
    실적34("신한카드 Mr.Life", "편의점", "세븐일레븐", 10, DiscountType.현장할인, 5000),
    실적35("신한카드 Mr.Life", "온라인쇼핑", "쿠팡", 10, DiscountType.청구할인, 10000),
    실적36("신한카드 Mr.Life", "온라인쇼핑", "무신사", 10, DiscountType.청구할인, 10000),
    실적37("신한카드 Mr.Life", "온라인쇼핑", "11번가", 10, DiscountType.청구할인, 10000),
    실적38("신한카드 Mr.Life", "온라인쇼핑", "SSG", 10, DiscountType.청구할인, 10000),
    실적39("신한카드 Mr.Life", "온라인쇼핑", "롯데ON", 10, DiscountType.청구할인, 10000),
    실적40("신한카드 Mr.Life", "대중교통", "버스", 10, DiscountType.현장할인, 10000),
    실적41("신한카드 Mr.Life", "대중교통", "지하철", 10, DiscountType.현장할인, 10000),
    실적42("신한카드 Mr.Life", "대중교통", "택시", 10, DiscountType.현장할인, 10000),
    실적43("신한카드 Mr.Life", "음식점", "VIPS", 10, DiscountType.현장할인, 10000),
    실적44("신한카드 Mr.Life", "음식점", "아웃백", 10, DiscountType.현장할인, 10000),
    실적45("신한카드 Mr.Life", "음식점", "애슐리", 10, DiscountType.현장할인, 10000),
    실적46("신한카드 Mr.Life", "음식점", "피자헛", 10, DiscountType.현장할인, 10000),
    실적47("신한카드 Mr.Life", "음식점", "매드포갈릭", 10, DiscountType.현장할인, 10000),
    실적48("신한카드 Mr.Life", "마트/백화점", "신세계백화점", 10, DiscountType.청구할인, 10000),
    실적49("신한카드 Mr.Life", "마트/백화점", "이마트", 10, DiscountType.청구할인, 10000),
    실적50("신한카드 Mr.Life", "마트/백화점", "홈플러스", 10, DiscountType.청구할인, 10000),
    실적51("신한카드 Mr.Life", "마트/백화점", "현대백화점", 10, DiscountType.청구할인, 10000),
    실적52("신한카드 Mr.Life", "마트/백화점", "롯데백화점", 10, DiscountType.청구할인, 10000),
    실적53("신한카드 Mr.Life", "마트/백화점", "롯데마트", 10, DiscountType.청구할인, 10000),
    실적54("신한카드 Mr.Life", "주유", "SK에너지", 3, DiscountType.현장할인, 10000),
    실적55("신한카드 Mr.Life", "주유", "GS칼텍스", 3, DiscountType.현장할인, 10000),
    실적56("taptap DIGITAL", "문화", "멜론", 50, DiscountType.청구할인, 1000000),
    실적57("taptap DIGITAL", "문화", "지니", 50, DiscountType.청구할인, 1000000),
    실적58("taptap DIGITAL", "문화", "벅스", 50, DiscountType.청구할인, 1000000),
    실적59("taptap DIGITAL", "문화", "넷플릭스", 50, DiscountType.청구할인, 1000000),
    실적60("taptap DIGITAL", "편의점", "CU", 10, DiscountType.청구할인, 5000),
    실적61("taptap DIGITAL", "편의점", "GS25", 10, DiscountType.청구할인, 5000),
    실적62("taptap DIGITAL", "편의점", "이마트24", 10, DiscountType.청구할인, 5000),
    실적63("taptap DIGITAL", "편의점", "세븐일레븐", 10, DiscountType.청구할인, 5000),
    실적64("삼성 iD ON 카드", "카페/디저트", "스타벅스", 30, DiscountType.현장할인, 10000),
    실적65("삼성 iD ON 카드", "카페/디저트", "이디야커피", 30, DiscountType.현장할인, 10000),
    실적66("삼성 iD ON 카드", "카페/디저트", "투썸플레이스", 30, DiscountType.현장할인, 10000),
    실적67("삼성 iD ON 카드", "카페/디저트", "탐앤탐스", 30, DiscountType.현장할인, 10000),
    실적68("삼성 iD ON 카드", "카페/디저트", "카페베네", 30, DiscountType.현장할인, 10000),
    실적69("삼성 iD ON 카드", "카페/디저트", "드롭탑", 30, DiscountType.현장할인, 10000),
    실적70("삼성 iD ON 카드", "배달", "배달의민족", 30, DiscountType.현장할인, 10000),
    실적71("삼성 iD ON 카드", "배달", "요기요", 30, DiscountType.현장할인, 10000),
    실적72("삼성 iD ON 카드", "카페/디저트", "버스", 10, DiscountType.청구할인, 10000),
    실적73("삼성 iD ON 카드", "카페/디저트", "지하철", 10, DiscountType.청구할인, 10000),
    실적74("삼성 iD ON 카드", "카페/디저트", "택시", 10, DiscountType.청구할인, 10000),
    실적75("현대카드ZERO Edition2(할인형)", "마트/백화점", "이마트", 2, DiscountType.청구할인, 1000000),
    실적76("현대카드ZERO Edition2(할인형)", "마트/백화점", "홈플러스", 2, DiscountType.청구할인, 1000000),
    실적77("현대카드ZERO Edition2(할인형)", "마트/백화점", "롯데마트", 2, DiscountType.청구할인, 1000000),
    실적78("현대카드ZERO Edition2(할인형)", "대중교통", "버스", 2, DiscountType.청구할인, 1000000),
    실적79("현대카드ZERO Edition2(할인형)", "대중교통", "지하철", 2, DiscountType.청구할인, 1000000),
    실적80("현대카드ZERO Edition2(할인형)", "대중교통", "택시", 2, DiscountType.청구할인, 1000000),
    실적81("현대카드ZERO Edition2(할인형)", "카페/디저트", "스타벅스", 2, DiscountType.청구할인, 1000000),
    실적82("현대카드ZERO Edition2(할인형)", "카페/디저트", "투썸플레이스", 2, DiscountType.청구할인, 1000000),
    실적83("현대카드ZERO Edition2(할인형)", "카페/디저트", "이디야커피", 2, DiscountType.청구할인, 1000000),
    실적84("현대카드ZERO Edition2(할인형)", "편의점", "CU", 2, DiscountType.청구할인, 1000000),
    실적85("현대카드ZERO Edition2(할인형)", "편의점", "GS25", 2, DiscountType.청구할인, 1000000),
    실적86("현대카드ZERO Edition2(할인형)", "편의점", "세븐일레븐", 2, DiscountType.청구할인, 1000000),
    실적87("현대카드ZERO Edition2(할인형)", "편의점", "이마트24", 2, DiscountType.청구할인, 1000000),
    실적88("현대카드Z family", "온라인쇼핑", "G마켓", 10, DiscountType.청구할인, 5000),
    실적89("현대카드Z family", "온라인쇼핑", "옥션", 10, DiscountType.청구할인, 5000),
    실적90("현대카드Z family", "마트/백화점", "이마트", 10, DiscountType.청구할인, 5000),
    실적91("현대카드Z family", "마트/백화점", "홈플러스", 10, DiscountType.청구할인, 5000),
    실적92("현대카드Z family", "마트/백화점", "롯데마트", 10, DiscountType.청구할인, 5000),
    실적93("현대카드Z family", "배달", "요기요", 10, DiscountType.청구할인, 5000),
    실적94("현대카드Z family", "배달", "배달의민족", 10, DiscountType.청구할인, 5000),
    실적95("현대카드Z family", "주유", "GS칼텍스", 1, DiscountType.청구할인, 10000),
    실적96("현대카드Z family", "주유", "SK에너지", 1, DiscountType.청구할인, 10000),
    실적97("현대카드Z family", "주유", "SOIL", 1, DiscountType.청구할인, 10000),
    실적98("현대카드Z family", "온라인쇼핑", "쿠팡", 10, DiscountType.청구할인, 5000),
    실적99("KB국민 My WE:SH 카드", "음식점", "VIPS", 10, DiscountType.현장할인, 5000),
    실적100("KB국민 My WE:SH 카드", "음식점", "피자헛", 10, DiscountType.현장할인, 5000),
    실적101("KB국민 My WE:SH 카드", "음식점", "아웃백", 10, DiscountType.현장할인, 5000),
    실적102("KB국민 My WE:SH 카드", "음식점", "매드포갈릭", 10, DiscountType.현장할인, 5000),
    실적103("KB국민 My WE:SH 카드", "편의점", "GS25", 10, DiscountType.청구할인, 5000),
    실적104("KB국민 My WE:SH 카드", "편의점", "CU", 10, DiscountType.청구할인, 5000),
    실적105("KB국민 My WE:SH 카드", "편의점", "세븐일레븐", 10, DiscountType.청구할인, 5000),
    실적106("KB국민 My WE:SH 카드", "문화", "교보문고", 30, DiscountType.현장할인, 5000),
    실적107("KB국민 My WE:SH 카드", "문화", "멜론", 30, DiscountType.현장할인, 5000),
    실적108("KB국민 My WE:SH 카드", "문화", "벅스", 30, DiscountType.현장할인, 5000),
    실적109("KB국민 My WE:SH 카드", "문화", "지니", 30, DiscountType.현장할인, 5000),
    실적110("KB국민 My WE:SH 카드", "문화", "유튜브프리미엄", 30, DiscountType.현장할인, 5000),
    실적111("KB국민 My WE:SH 카드", "문화", "앱스토어", 30, DiscountType.현장할인, 5000),
    실적112("KB국민 My WE:SH 카드", "문화", "넷플릭스", 30, DiscountType.현장할인, 5000),
    실적113("KB국민 My WE:SH 카드", "배달", "배달의민족", 5, DiscountType.청구할인, 5000),
    실적114("KB국민 My WE:SH 카드", "배달", "요기요", 5, DiscountType.청구할인, 5000),
    실적115("KB국민 My WE:SH 카드", "배달", "마켓컬리", 5, DiscountType.청구할인, 5000),
    실적116("KB국민 My WE:SH 카드", "카페/디저트", "스타벅스", 5, DiscountType.청구할인, 5000),
    실적117("KB국민 My WE:SH 카드", "카페/디저트", "커피빈", 5, DiscountType.청구할인, 5000),
    실적118("KB국민 My WE:SH 카드", "카페/디저트", "투썸플레이스", 5, DiscountType.청구할인, 5000),
    실적119("KB국민 My WE:SH 카드", "카페/디저트", "카페베네", 5, DiscountType.청구할인, 5000),
    실적121("KB국민 My WE:SH 카드", "카페/디저트", "탐앤탐스", 5, DiscountType.청구할인, 5000),
    실적122("KB국민 My WE:SH 카드", "영화관", "CGV", 30, DiscountType.현장할인, 5000),
    실적123("KB국민 My WE:SH 카드", "영화관", "롯데시네마", 30, DiscountType.현장할인, 5000),
    실적124("KB국민 My WE:SH 카드", "영화관", "메가박스", 30, DiscountType.현장할인, 5000),
    실적125("KB국민 My WE:SH 카드", "문화", "YES24", 5, DiscountType.청구할인, 10000),
    실적126("DA@카드의정석", "항공", "대한항공", 2, DiscountType.청구할인, 1000000),
    실적127("DA@카드의정석", "항공", "아시아나항공", 2, DiscountType.청구할인, 1000000),
    실적128("DA@카드의정석", "항공", "진에어", 2, DiscountType.청구할인, 1000000),
    실적129("DA@카드의정석", "항공", "제주항공", 2, DiscountType.청구할인, 1000000),
    실적130("DA@카드의정석", "카페/디저트", "스타벅스", 2, DiscountType.청구할인, 1000000),
    실적131("DA@카드의정석", "카페/디저트", "커피빈", 2, DiscountType.청구할인, 1000000),
    실적132("DA@카드의정석", "카페/디저트", "탐앤탐스", 2, DiscountType.청구할인, 1000000),
    실적133("DA@카드의정석", "카페/디저트", "뚜레쥬르", 2, DiscountType.청구할인, 1000000),
    실적134("DA@카드의정석", "카페/디저트", "파리바게뜨", 2, DiscountType.청구할인, 1000000),
    실적135("DA@카드의정석", "카페/디저트", "베스킨라빈스", 2, DiscountType.청구할인, 1000000),
    실적136("DA@카드의정석", "카페/디저트", "투썸플레이스", 2, DiscountType.청구할인, 1000000),
    실적137("DA@카드의정석", "편의점", "GS25", 2, DiscountType.청구할인, 1000000),
    실적138("DA@카드의정석", "편의점", "CU", 2, DiscountType.청구할인, 1000000),
    실적139("DA@카드의정석", "편의점", "세븐일레븐", 2, DiscountType.청구할인, 1000000),
    실적140("DA@카드의정석", "마트/백화점", "롯데백화점", 2, DiscountType.청구할인, 1000000),
    실적141("DA@카드의정석", "마트/백화점", "신세계백화점", 2, DiscountType.청구할인, 1000000),
    실적142("DA@카드의정석", "마트/백화점", "이마트", 2, DiscountType.청구할인, 1000000),
    실적143("DA@카드의정석", "마트/백화점", "홈플러스", 2, DiscountType.청구할인, 1000000),
    실적144("DA@카드의정석", "문화", "넷플릭스", 2, DiscountType.청구할인, 1000000),
    실적145("DA@카드의정석", "문화", "지니", 2, DiscountType.청구할인, 1000000),
    실적146("DA@카드의정석", "문화", "유튜브프리미엄", 2, DiscountType.청구할인, 1000000),
    실적147("DA@카드의정석", "음식점", "VIPS", 2, DiscountType.청구할인, 1000000),
    실적148("DA@카드의정석", "음식점", "피자헛", 2, DiscountType.청구할인, 1000000),
    실적149("DA@카드의정석", "음식점", "롯데리아", 2, DiscountType.청구할인, 1000000),
    실적150("DA@카드의정석", "음식점", "맥도날드", 2, DiscountType.청구할인, 1000000),
    실적151("DA@카드의정석", "음식점", "이삭토스트", 2, DiscountType.청구할인, 1000000),
    실적153("DA@카드의정석", "영화", "롯데시네마", 2, DiscountType.청구할인, 1000000),
    실적154("DA@카드의정석", "영화", "메가박스", 2, DiscountType.청구할인, 1000000),
    실적155("DA@카드의정석", "주유", "GS칼텍스", 2, DiscountType.청구할인, 1000000),
    실적156("DA@카드의정석", "주유", "SK에너지", 2, DiscountType.청구할인, 1000000);

    final String cardName;
    final String category;
    final String storeName;
    final int discount;

    final DiscountType discountType;
    final int benefitLimit;

    BenefitList(String cardName, String category, String storeName, int discount, DiscountType discountType, int benefitLimit) {
        this.cardName = cardName;
        this.category = category;
        this.storeName = storeName;
        this.discount = discount;
        this.discountType = discountType;
        this.benefitLimit = benefitLimit;
    }

    public String getCardName() {
        return cardName;
    }

    public String getCategory() {
        return category;
    }

    public String getStoreName() {
        return storeName;
    }

    public int getDiscount() {
        return discount;
    }

    public DiscountType getDiscountType() {
        return discountType;
    }

    public int getBenefitLimit() {
        return benefitLimit;
    }
}
