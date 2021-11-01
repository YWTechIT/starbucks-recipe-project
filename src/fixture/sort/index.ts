import { SortFixtureType, SortType } from "../../types";

export const sortFixture: SortFixtureType[] = [
  {
      id: "1",
      title: "이름 오름차순",
      sort: SortType.nameAsc,
  },
  {
      id: "2",
      title: "이름 내림차순",
      sort: SortType.nameDesc,
  },
  {
      id: "3",
      title: "높은가격순",
      sort: SortType.priceHigh,
  },
  {
      id: "4",
      title: "낮은가격순",
      sort: SortType.priceLow,
  },
  {
      id: "5",
      title: "인기순",
      sort: SortType.popularity,
  },
  {
      id: "6",
      title: "좋아요높은순",
      sort: SortType.likeHigh,
  },
  {
      id: "7",
      title: "좋아요낮은순",
      sort: SortType.likeLow,
  },
]