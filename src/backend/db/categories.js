import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "men",
    src: "https://i.pravatar.cc/200?img=11",
    alt: "A man",
  },
  {
    _id: uuid(),
    name: "women",
    src: "https://i.pravatar.cc/200?img=28",
    alt: "A woman",
  },
  {
    _id: uuid(),
    name: "kids",
    src: "https://i.pravatar.cc/200?img=37",
    alt: "A kid",
  },
  {
    _id: uuid(),
    name: "others",
    src: "https://i.pravatar.cc/200?img=67",
    alt: "A man with a camera",
  },
];
