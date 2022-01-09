import { BeverageType, RecipeType } from "../../types";

export const RECIPE_SAMPLE: RecipeType[] = [
    {
        id: "1",
        title: "캡틴크런치베리 프라푸치노",
        desc: "악마의 음료 순한버전",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/01-captain-crunch-berry.webp",
        type: BeverageType.ICED,
        step: [
           "화이트 딸기 크림 프라푸치노 Venti",
           "일반 우유 / 두유",
           "헤이즐넛 시럽 2",
           "자바칩과 토핑(반반) 6",
           "일반휘핑 많이",
        ],
        price: 7700,
        tags: ["딸기", "헤이즐넛", "디카페인"],
        likes: 3,
    },

    {
        id: "2",
        title: "슈렉 프라푸치노",
        desc: "그린티와 초코의 절묘한 조화",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/02-shrek.webp",
        type: BeverageType.ICED,
        step: [
            "제주 유기농 말차로 만든 크림 프라푸치노 Tall",
            "에스프레소 샷 1",
            "프라푸치노용 시럽",
            "클래식 시럽 2",
            "자바칩 토핑(반반) 3",
            "에스프레소 휘핑",
            "초콜릿 드리즐",
            "유기농 말차 2"
        ],
        price: 8100,
        tags: ["녹차", "에스프레소", "초콜릿", "카페인"],
        likes: 4,
    },
    {
        id: "3",
        title: "돼지바 프라푸치노",
        desc: "돼지바 아이스크림을 연상시키는 맛",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/03-pigbar.webp",
        type: BeverageType.ICED,
        step: [
            "화이트 딸기 크림 프라푸치노 Venti",
            "딸기 믹스 6",
            "얼음 적게",
            "자바칩 & 토핑(반반) 9",
            "일반휘핑 많이",
            "초콜릿 드리즐 많이",
        ],
        price: 8900,
        tags: ["딸기", "초콜릿", "디카페인"],
        likes: 2,
    },
    {
        id: "4",
        title: "트윅스 프라푸치노",
        desc: "쫀득한 카라멜과 달콤한 초코의 조화",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/04-twix.webp",
        type: BeverageType.ICED,
        step: [
            "카라멜 프라푸치노 Tall",
            "프라푸치노 로스트 2",
            "프라푸치노용 시럽",
            "카라멜 시럽 2",
            "헤이즐넛 시럽 1",
            "프라푸치노 자바칩 3",
            "일반 휘핑 보통",
            "카라멜 드리즐 보통",
            "초콜릿 드리즐 보통",
        ],
        price: 7400,
        tags: ["카라멜", "헤이즐넛", "초콜릿", "카페인"],
        likes: 1,
    },
    {
        id: "5",
        title: "페로로로쉐 프라푸치노",
        desc: "텐션 솟구치는 맛",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/05-ferrero-rocher.webp",
        type: BeverageType.ICED,
        step: [
           "자바 칩 프라푸치노 Venti",
           "프라푸치노 로스트 4",
           "푸라푸치노용 시럽",
           "모카 시럽 4", 
           "헤이즐넛 시럽 2",
           "자바칩과 토핑(반반) 5",
           "에스프레소 휘핑 보통",
        ],
        price: 7100,
        tags: ["초콜릿", "헤이즐넛", "에스프레소", "카페인"],
        likes: 6,
    },
    {
        id: "6",
        title: "버터비어 프라푸치노",
        desc: "해리포터에 나온 버터 맥주와 비슷한 음료",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/06-butter-beer.webp",
        type: BeverageType.ICED,
        step: [
            "바닐라 크림 프라푸치노 Tall",
            "프라푸치노용 시럽",
            "바닐라 시럽 2",
            "헤이즐넛 시럽 2", 
            "카라멜 시럽 2",
            "카라멜 드리즐 보통",
        ],
        price: 6600,
        tags: ["바닐라", "헤이즐넛", "카라멜", "디카페인"],
        likes: 5,
    },
    {
        id: "7",
        title: "오레오 프라푸치노",
        desc: "메이플 피칸 맛 아이스 커피",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/07-oreo.webp",
        type: BeverageType.ICED,
        step: [
            "바닐라 크림 프라푸치노 Tall",
            "프라푸치노용 시럽",
            "바닐라 시럽 2",
            "자바칩과 토핑(반반) 3",
            "에스프레소 휘핑 보통",
            "초콜릿 드리즐 보통",
        ],
        price: 6000,
        tags: ["바닐라", "에스프레소", "초콜릿", "카페인"],
        likes: 8,
    },
    {
        id: "8",
        title: "초코나무 숲 프라푸치노",
        desc: "녹덕들의 최애음료",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/08-choco-tree-forest.webp",
        type: BeverageType.ICED,
        step: [
            "제주 유기농 말차로 만든 크림 프라푸치노 Tall",
            "에스프레소 샷 1",
            "두유",
            "자바칩과 토핑(반반) 5",
            "에스프레소 휘핑 보통",
            "초콜릿 드리즐 보통",
            "유기농 말차 5"
        ],
        price: 8100,
        tags: ["녹차", "에스프레소", "초콜릿", "카페인"],
        likes: 9,
    },
    {
        id: "9",
        title: "스니커즈 프라푸치노",
        desc: "우울함을 날리고 싶을 때",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/09-sneakers.webp",
        type: BeverageType.ICED,
        step: [
            "자바 칩 프라푸치노 Tall",
            "프라푸치노 로스트 2",
            "프라푸치노용 시럽",
            "모카 시럽 2", 
            "헤이즐넛 시럽 2",
            "자바칩과 토핑(반반) 3",
            "초콜릿 드리즐", 
            "카라멜 드리즐 보통",
        ],
        price: 7300,
        tags: ["초콜릿", "헤이즐넛", "카라멜", "카페인"],
        likes: 6,
    },
    {
        id: "10",
        title: "고디바 프라푸치노",
        desc: "고오급 초콜렛 맛 음료",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/10-godiva.webp",
        type: BeverageType.ICED,
        step: [
            "자바 칩 프라푸치노 Venti",
            "프라푸치노 로스트 4",
            "프라푸치노용 시럽",
            "모카 시럽 5", 
            "헤이즐넛 시럽 3",
            "자바칩과 토핑(반반) 4",
        ],
        price: 7700,
        tags: ["초콜릿", "헤이즐넛", "카페인"],
        likes: 1,
    },
    {
        id: "11",
        title: "더위사냥 프라푸치노",
        desc: "에스프레소 휘핑과 카라멜의 조화",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/11-hot-hunt.webp",
        type: BeverageType.ICED,
        step: [
            "에스프레소 프라푸치노 Tall",
            "에스프레소 샷 1",
            "프라푸치노 로스트 2",
            "프라푸치노용 시럽",
            "에스프레소 휘핑",
            "카라멜 드리즐 보통",
        ],
        price: 6300,
        tags: ["에스프레소", "카라멜", "카페인"],
        likes: 2,
    },
    {
        id: "12",
        title: "쿠앤크 프라푸치노",
        desc: "쿠키를 먹는 듯한 느낌",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/12-ku-and-ku.webp",
        type: BeverageType.ICED,
        step: [
            "바닐라크림 프라푸치노 Tall",
            "자바칩과 토핑(반반) 3",
            "일반 휘핑 많이",
            "초콜릿 드리즐 많이"
        ],
        price: 6000,
        tags: ["바닐라", "초콜릿", "디카페인"],
        likes: 5,
    },
    {
        id: "13",
        title: "돌체 라떼 커스텀",
        desc: "진한 에스프레소와 달콤한 연유의 궁합",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/13-dolche-latte.webp",
        type: BeverageType.ICED,
        step: [
            "아이스 스타벅스 돌체 라떼 Tall ",
            "두유",
            "에스프레소 휘핑 보통"
        ],
        price: 6200,
        tags: ["돌체", "에스프레소", "카페인"],
        likes: 7,
    },
    {
        id: "14",
        title: "휘영 프라푸치노",
        desc: "SF9 휘영이 추천하는 레시피",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/14-hwi-young.webp",
        type: BeverageType.ICED,
        step: [
            "카라멜 프라푸치노 Venti",
            "헤이즐넛 시럽 1",
            "프라푸치노 자바칩 7",
            "에스프레소 휘핑 많이",
            "초콜릿 드리즐 보통",
        ],
        price: 8400,
        tags: ["카라멜", "헤이즐넛", "프라푸치노", "초콜릿", "카페인"],
        likes: 8,
    },
    {
        id: "15",
        title: "에스프레소 프라푸치노 라이트",
        desc: "라이트 시럽으로 당 30% 감소",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/15-espresso-light.webp",
        type: BeverageType.ICED,
        step: [
            "에스프레소 프라푸치노 Tall",
            "프라푸치노용 시럽 라이트"
        ],
        price: 5100,
        tags: ["다이어트", "라이트", "에스프레소", "프라푸치노", "카페인"],
        likes: 10,
    },
    {
        id: "16",
        title: "딸기 딜라이트 요거트 블렌디드 라이트",
        desc: "돌체 시럽 최대한 적게하여 당 50% 감소",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/16-strawberry-light.webp",
        type: BeverageType.ICED,
        step: [
            "딸기 딜라이트 요거트 블렌디드 Tall",
            "돌체 시럽 1",
            "딸기 소스 1",
        ],
        price: 6100,
        tags: ["다이어트", "라이트", "딸기", "요거트", "디카페인"],
        likes: 12,
    },
    {
        id: "17",
        title: "스타벅스 더블 샷 라이트",
        desc: "진한 카라멜마끼아토를 느낄 수 있는 맛",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/17-double-shot.webp",
        type: BeverageType.ICED,
        step: [
            "커피 스타벅스 더블 샷",
            "클래식 시럽 없이",
            "하프앤하프",
            "에스프레소 휘핑 보통",
        ],
        price: 4800,
        tags: ["다이어트", "라이트", "에스프레소", "카페인"],
        likes: 4,
    },
    {
        id: "18",
        title: "에스프레소 콘 파나",
        desc: "에스프레소 고수이신 분 추천",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/18-espresso-con-panna.webp",
        type: BeverageType.HOT,
        step: [
            "에스프레스 콘 파나",
            "일반 휘핑",
        ],
        price: 3800,
        tags: ["다이어트", "에스프레소", "카페인"],
        likes: 2,
    },
    {
        id: "19",
        title: "콜드브루 오트라떼",
        desc: "유당불내증이 있는 분들에게 추천",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/19-cold-brew-oat-latte.webp",
        type: BeverageType.ICED,
        step: [
            "콜드 브루 오트 라떼 Tall",
            "클래식 시럽 없이",
        ],
        price: 5600,
        tags: ["다이어트", "비건", "오트", "콜드브루", "카페인"],
        likes: 1,
    },
    {
        id: "20",
        title: "바닐라 크림 콜드브루",
        desc: "아바라(아이스바닐라라떼)가 부담스러울 때",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/20-vanilla-cream-cold-brew.webp",
        type: BeverageType.ICED,
        step: [
            "바닐라 크림 콜드 브루 Tall",
            "바닐라 시럽 없이",
            "바닐라 크림 베이스 적게",
        ],
        price: 5500,
        tags: ["다이어트", "바닐라", "콜드브루", "카페인"],
        likes: 6,
    },
    {
        id: "21",
        title: "쿨 라임 피지오 라이트",
        desc: "라임 베이스에 건조된 라임 슬라이스를 넣은 시원하고 청량감 있는 음료",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/21-cool-lime-fizzio.webp",
        type: BeverageType.ICED,
        step: [
            "쿨 라임 피지오 Tall",
            "쿨 라임 베이스 적게",
            "스파클링 엑스트라",
        ],
        price: 5900,
        tags: ["탄산수", "라임", "다이어트", "피지오", "카페인"],
        likes: 11,
    },
    {
        id: "22",
        title: "패션 탱고 티 레모네이드 피지오 라이트",
        desc: "꽃 향기와 달콤하고 상큼한 시트러스 향과 탄산의 조화",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/22-passion-tango-tea.webp",
        type: BeverageType.ICED,
        step: [
            "패션 탱고 티 레모네이드 피지오 Tall",
            "클래식 시럽 없이",
        ],
        price: 5400,
        tags: ["시트러스", "다이어트", "피지오", "디카페인"],
        likes: 9,
    },
    {
        id: "23",
        title: "블랙 티 레모네이드 피지오 라이트",
        desc: "진하게 우린 블랙 티와 상큼한 레모네이드를 더한 청량감 있는 음료",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/23-black-tea.webp",
        type: BeverageType.ICED,
        step: [
            "블랙 티 레모네이드 피지오 Tall",
            "클래식 시럽 없이",
            "스파클링 엑스트라"
        ],
        price: 5400,
        tags: ["블랙티", "다이어트", "피지오", "카페인"],
        likes: 5,
    },
    {
        id: "24",
        title: "아이스 민트 블렌드 티",
        desc: "스피어민트, 페퍼민트 등 민초단은 못 참는 메뉴",
        src: "https://starbucks-recipe.s3.ap-northeast-2.amazonaws.com/24-ice-mint-blend-tea.webp",
        type: BeverageType.ICED,
        step: [
            "아이스 민트 블렌드 티 Venti",
            "에스프레소 샷 2",
            "얼음 많이"
        ],
        price: 6300,
        tags: ["탄산수", "다이어트", "민트", "허브", "디카페인"],
        likes: 2,
    },
];
