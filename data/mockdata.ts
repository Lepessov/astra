import { CFCard, QACard, SSCard } from "@/app/(working)/page";

const croudFundingCards: CFCard[] = [
  {
      id: 1,
      title: "Project 1",
      content: "Description of project 1",
      category: ["Category1", "Category2"],
      amount_money: 1000,
      planned_money: 5000,
      created_at: "2024-03-27",
      updated_at: "2024-03-27",
      photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13"
  },
  {
      id: 2,
      title: "Project 2",
      content: "Description of project 2",
      category: ["Category2", "Category3"],
      amount_money: 2000,
      planned_money: 6000,
      created_at: "2024-03-27",
      updated_at: "2024-03-27",
      photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13"
  },
  {
      id: 3,
      title: "Project 3",
      content: "Description of project 3",
      category: ["Category1", "Category3"],
      amount_money: 1500,
      planned_money: 4000,
      created_at: "2024-03-27",
      updated_at: "2024-03-27",
      photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13"
  }
];



const qaCards: QACard[] = [
  {
      id: 1,
      author_photo: "",
      author_name: "Author 1",
      title: "Title 1",
      description: "Description 1",
      category: ["Category 1", "Category 2"],
      rating: 4.5,
      comment: 10,
      created_at: "2024-03-27T12:00:00Z",
      updated_at: "2024-03-27T12:00:00Z"
  },
  {
      id: 2,
      author_name: "Author 2",
      title: "Title 2",
      description: "Description 2",
      category: ["Category 2", "Category 3"],
      rating: 3.8,
      comment: 8,
      created_at: "2024-03-26T12:00:00Z",
      updated_at: "2024-03-26T12:00:00Z"
  },
  {
      id: 3,
      author_photo: "",
      author_name: "Author 3",
      title: "Title 3",
      description: "Description 3",
      category: ["Category 1"],
      rating: 4.0,
      comment: 12,
      created_at: "2024-03-25T12:00:00Z",
      updated_at: "2024-03-25T12:00:00Z"
  }
];



const skillSwapCards: SSCard[] = [
  {
    id:1,
    title: "Ornella Binni",
    content: "$1500 until project launch",
    category:["math,java"],
    price:5000,
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",    
  },
  {
    id:2,
    title: "Tom Byrom",
    content: "$1500 until project launch",
    category:["math,java"],
    price:5000,
    
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  },
  {
    id:3,
    title: "Vladimir Malyavko",
    content: "$1500 until project launch",
    category:["math,java"],
    price:5000,
    
    photo: "https://avatars.mds.yandex.net/i?id=e1095d76245d2f6ef94f3309489c0c6ed78abf63-10619913-images-thumbs&n=13",
  }
]




export {
  croudFundingCards,
  qaCards,
  skillSwapCards
}