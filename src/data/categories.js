import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    name: "men",
    src: "https://i.pravatar.cc/200?img=11",
    alt: "An image of a man",
  },
  {
    _id: uuid(),
    name: "women",
    src: "https://i.pravatar.cc/200?img=28",
    alt: "An image of a woman",
  },
  {
    _id: uuid(),
    name: "kids",
    src: "https://i.pravatar.cc/200?img=37",
    alt: "An image of a kid",
  },
  {
    _id: uuid(),
    name: "others",
    src: "https://i.pravatar.cc/200?img=67",
    alt: "An image of a random person",
  },
];
