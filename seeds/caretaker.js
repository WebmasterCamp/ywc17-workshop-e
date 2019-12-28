import moment from "moment";

export default [
  {
    // review: [],
    name: "คุณสมศรี มีกินดี (60 ปี)",
    caption: "จริงใจ อ่อนโยน รักสัตว์เหมือนลูกหลานแท้ๆ”", // added
    abititude:
      "หยวนโอเปร่าแฟรี่แจ๊ส จิ๊กซอว์ แอ็กชั่นซูชิไฮไลท์วิกแพนงเชิญ ซาตานแคนู แจ๊ส แจ็กเก็ตไวกิ้งดิสเครดิตรีวิวมาร์เก็ตติ้ง บริกรไฮเวย์เซ็กซี่โปรเจกเตอร์อุปนายิก",
    personality:
      "หยวนโอเปร่าแฟรี่แจ๊ส จิ๊กซอว์ แอ็กชั่นซูชิไฮไลท์วิกแพนงเชิญ ซาตานแคนู แจ๊ส แจ็กเก็ตไวกิ้งดิสเครดิตรีวิวมาร์เก็ตติ้ง บริกรไฮเวย์เซ็กซี่โปรเจกเตอร์อุปนายิก",
    occupation: "gevernment officer",
    // review: [
    //   {
    //     reviewer: "คุณสมใจ",
    //     message:
    //       "ดีมาก ๆ ให้คำแนะนำดี คุยสนุก ได้ความรู้เกี่ยวกับน้อง ๆ เพิ่มขึ้นเยอะเลย"
    //   },
    //   {
    //     reviewer: "คุณสมหมาย",
    //     message:
    //       "คุณป้าใจดีมาก ๆ สนิทกับลูก ๆ เราเร็วมาก ทีแรกกังวลว่าจะเห่ามั้ย แต่พอถึงเวลาจริง ๆ หายห่วงเลย"
    //   }
    // ],
    species: [1],
    location: "bangkok",
    fullLocation: "เลขที่บ้าน 15 ถ.ทดสอบ อ.ทดสอบ จ.กรุงเทพ 10000",
    specialImages: [
      "https://cdn.pixabay.com/photo/2019/08/07/14/10/dog-4390884_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/08/10/06/52/dog-4396286_960_720.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg"
    ],
    age: 70,
    imageURL:
      "http://www.silvereco.org/en/wp-content/uploads/2017/10/Japan-China-Elderly-people-Ageing-population-2.jpg",
    notAvailableDate: [moment().toString()]
  },

  {
    review: [],
    name: "test2",
    abititude: "abtitude 1",
    personality: "open mind and adabtable to change",
    occupation: "gevernment officer",
    species: [1],
    location: "bangkok",
    age: 65,
    imageURL: "",
    notAvailableDate: [moment().toString()]
  },
  {
    review: [],
    name: "test3",
    abititude: "abtitude 1",
    personality: "open mind and adabtable to change",
    occupation: "gevernment officer",
    species: [1],
    location: "samutprakarn",
    age: 59,
    imageURL: "",
    notAvailableDate: [moment().toString()]
  }
];
