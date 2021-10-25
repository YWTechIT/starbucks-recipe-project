import { FilterFixtureType, FilterType } from "../../types";

export const modalFixture: FilterFixtureType[] = [
  {
      id: "1",
      title: "이름 오름차순",
      filter: FilterType.nameAsc,
  },
  {
      id: "2",
      title: "이름 내림차순",
      filter: FilterType.nameDesc,
  },
  {
      id: "3",
      title: "높은가격순",
      filter: FilterType.priceHigh,
  },
  {
      id: "4",
      title: "낮은가격순",
      filter: FilterType.priceLow,
  },
  {
      id: "5",
      title: "인기순",
      filter: FilterType.popularity,
  },
  {
      id: "6",
      title: "좋아요높은순",
      filter: FilterType.likeHigh,
  },
  {
      id: "7",
      title: "좋아요낮은순",
      filter: FilterType.likeLow,
  },
]