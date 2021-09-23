import {
    americano,
    espresso,
    caramelLatte,
    cafeMocha,
    hazelnutCoffee,
    cinnamonHoneyCoffee,
    mapleColdForm,
    spiceOatMilkLatte,
    caramelMacchiato,
    caramelBomb,
    detailAmericano,
    detailEspresso,
    detailCaramelLatte,
    detailCafeMocha,
    detailHazelnutCoffee,
    detailCinnamonHoneyCoffee,
    detailMapleColdForm,
    detailSpiceOatMilkLatte,
    detailCaramelMacchiato,
    detailCaramelBomb,
} from "../assets";
import { RecipeType } from "../types";

export const RECIPE_CONFIG: RecipeType[] = [
    {
        id: "1",
        title: "아메리카노",
        desc: "심플하며 맛있는",
        src: { americano },
        alt: "americano",
        required: "3",
        type: "ICED BEVERAGES",
        detailSrc: { detailAmericano },
        detailAlt: "detailAmericano",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "2",
        title: "에스프레소 마티니",
        desc: "에소프레소와 칵테일의 조화",
        src: { espresso },
        alt: "espresso",
        required: "5",
        type: "ICED BEVERAGES",
        detailSrc: { detailEspresso },
        detailAlt: "detailEspresso",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]

    },
    {
        id: "3",
        title: "바닐라 크림과 카라멜 라떼",
        desc: "달콤한 풍미와 균형을 맞춘 커피 ",
        src: { caramelLatte },
        alt: "caramelLatte",
        required: "4",
        type: "ICED BEVERAGES",
        detailSrc: { detailCaramelLatte },
        detailAlt: "detailCaramelLatte",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "4",
        title: "카페모카",
        desc: "스타벅스의 클래식 인기메뉴",
        src: { cafeMocha },
        alt: "cafeMocha",
        required: "3",
        type: "HOT BEVERAGES",
        detailSrc: { detailCafeMocha },
        detailAlt: "detailCafeMocha",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "5",
        title: "아이스 헤이즐넛 커피",
        desc: "풍부하고 상쾌한 아이스 커피",
        src: { hazelnutCoffee },
        alt: "hazelnutCoffee",
        required: "3",
        type: "ICED BEVERAGES",
        detailSrc: { detailHazelnutCoffee },
        detailAlt: "detailHazelnutCoffee",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "6",
        title: "아이스 시나몬 허니 커피",
        desc: "시나몬과 꿀의 조화",
        src: { cinnamonHoneyCoffee },
        alt: "cinnamonHoneyCoffee",
        required: "4",
        type: "ICED BEVERAGES",
        detailSrc: { detailCinnamonHoneyCoffee },
        detailAlt: "detailCinnamonHoneyCoffee",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "7",
        title: "메이플 스위트 크림 콜드 폼 ",
        desc: "메이플 피칸 맛 아이스 커피",
        src: { mapleColdForm },
        alt: "mapleColdForm",
        required: "3",
        type: "ICED BEVERAGES",
        detailSrc: { detailMapleColdForm },
        detailAlt: "detailMapleColdForm",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "8",
        title: "스파이스 오트밀크 라떼",
        desc: "가을의 맛",
        src: { spiceOatMilkLatte },
        alt: "spiceOatMilkLatte",
        required: "2",
        type: "HOT BEVERAGES",
        detailSrc: { detailSpiceOatMilkLatte },
        detailAlt: "detailSpiceOatMilkLatte",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "9",
        title: "아이스 캐러멜 마키아토",
        desc: "바닐라 향이 감도는 풍부함",
        src: { caramelMacchiato },
        alt: "caramelMacchiato",
        required: "4",
        type: "ICED BEVERAGES",
        detailSrc: { detailCaramelMacchiato },
        detailAlt: "detailCaramelMacchiato",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
    {
        id: "10",
        title: "카라멜 커피밤",
        desc: "카라멜 커피 폭탄!",
        src: { caramelBomb },
        alt: "caramelBomb",
        required: "3",
        type: "ADD-INS",
        detailSrc: { detailCaramelBomb },
        detailAlt: "detailCaramelBomb",
        step: [{
            1: "스타벅스 ® 에스프레소 로스트 커피 1샷을  준비하고 칵테일을 준비하기 전에 식히십시오.",
            2: "얼음과 함께 칵테일 셰이커에 보드카, 커피 리큐어, 에스프레소를 넣습니다.",
            3: "10회 세게 흔든 후 칵테일 글라스에 따라 세게 따른다.",
            4: "3개의 원두커피로 장식하고 바로 서빙하세요."
        }]
    },
];
