import img1 from "../assest/restaurantImages/img1.jpg";
import img2 from "../assest/restaurantImages/img2.jpg";
import img3 from "../assest/restaurantImages/img3.jpg";
import img4 from "../assest/restaurantImages/img4.jpg";
import img5 from "../assest/restaurantImages/img5.jpg";
import img6 from "../assest/restaurantImages/img6.jpg";
import img7 from "../assest/restaurantImages/img7.jpg";
import img8 from "../assest/restaurantImages/img8.jpg";

export const restaurantData = [
  {
    id: 1,
    name: "Pizza Hut",
    rating: 3.9,
    time: "60-65 mins",
    type: "Pizzas",
    location: "Punawale",
    promoted: true,
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    menu: {
      starters: ["Garlic Bread", "Cheese Sticks"],
      lunch: ["Pepperoni Pizza", "Margherita Pizza"],
      dinner: ["BBQ Chicken Pizza", "Veggie Supreme Pizza"],
      beverages: ["Coke", "Pepsi"],
    },
  },
  {
    id: 2,
    name: "Burger King",
    rating: 4.1,
    time: "50-55 mins",
    type: "Burgers",
    promoted: false,
    location: "Wakad",
    imageUrl: img1,
    menu: {
      starters: ["Chicken Fries", "Mozzarella Sticks"],
      lunch: ["Whopper", "Veggie Burger"],
      dinner: ["Double Cheeseburger", "Chicken Sandwich"],
      beverages: ["Sprite", "Fanta"],
    },
  },
  {
    id: 3,
    name: "Subway",
    rating: 4.2,
    time: "45-50 mins",
    type: "Sandwiches",
    location: "Hinjewadi",
    promoted: true,
    imageUrl: img2,
    menu: {
      starters: ["Salad Bowl", "Soup"],
      lunch: ["Turkey Sub", "Veggie Delight"],
      dinner: ["Chicken Teriyaki Sub", "Meatball Marinara"],
      beverages: ["Iced Tea", "Lemonade"],
    },
  },
  {
    id: 4,
    name: "Domino's Pizza",
    rating: 4.0,
    time: "55-60 mins",
    type: "Pizzas",
    location: "Baner",
    promoted: false,
    imageUrl: img3,
    menu: {
      starters: ["Stuffed Cheesy Bread", "Parmesan Bread Bites"],
      lunch: ["Pepperoni Pizza", "Cheese Pizza"],
      dinner: ["Deluxe Pizza", "Hawaiian Pizza"],
      beverages: ["Coke", "Diet Coke"],
    },
  },
  {
    id: 5,
    name: "KFC",
    rating: 4.3,
    time: "40-45 mins",
    type: "Chicken",
    location: "Aundh",
    promoted: true,

    imageUrl: img4,
    menu: {
      starters: ["Chicken Popcorn", "Hot Wings"],
      lunch: ["Zinger Burger", "Chicken Wrap"],
      dinner: ["Fried Chicken Bucket", "Chicken Rice Bowl"],
      beverages: ["Mountain Dew", "Mirinda"],
    },
  },
  {
    id: 6,
    name: "Starbucks",
    rating: 4.5,
    time: "20-25 mins",
    type: "Coffee",
    promoted: false,
    location: "Pimple Saudagar",
    imageUrl: img5,
    menu: {
      starters: ["Banana Bread", "Butter Croissant"],
      lunch: ["Chicken Panini", "Veggie Sandwich"],
      dinner: ["Turkey Club Sandwich", "Chicken Salad"],
      beverages: ["Latte", "Cappuccino"],
    },
  },
  {
    id: 7,
    name: "McDonald's",
    rating: 4.1,
    time: "30-35 mins",
    type: "Burgers",
    location: "Chinchwad",
    promoted: true,

    imageUrl: img6,
    menu: {
      starters: ["Fries", "Apple Pie"],
      lunch: ["Big Mac", "Filet-O-Fish"],
      dinner: ["Chicken McNuggets", "McChicken"],
      beverages: ["Coke", "Sprite"],
    },
  },
  {
    id: 8,
    name: "Taco Bell",
    rating: 4.0,
    time: "45-50 mins",
    type: "Mexican",
    promoted: false,
    location: "Pimpri",
    imageUrl: img7,
    menu: {
      starters: ["Nachos", "Cheesy Roll"],
      lunch: ["Crunchy Taco", "Bean Burrito"],
      dinner: ["Quesadilla", "Mexican Pizza"],
      beverages: ["Mountain Dew", "Pepsi"],
    },
  },
  {
    id: 9,
    name: "Dunkin' Donuts",
    rating: 4.3,
    time: "25-30 mins",
    type: "Donuts",
    promoted: false,
    location: "Kothrud",
    imageUrl: img8,
    menu: {
      starters: ["Munchkins", "Hash Browns"],
      lunch: ["Turkey Sausage Flatbread", "Veggie Egg White Sandwich"],
      dinner: ["Grilled Cheese", "Chicken Salad Sandwich"],
      beverages: ["Coffee", "Hot Chocolate"],
    },
  },
  {
    id: 10,
    name: "Panda Express",
    rating: 4.4,
    time: "35-40 mins",
    type: "Chinese",
    location: "Karve Nagar",
    promoted: true,
    imageUrl: img2,
    menu: {
      starters: ["Egg Rolls", "Crab Rangoon"],
      lunch: ["Orange Chicken", "Beef and Broccoli"],
      dinner: ["Kung Pao Chicken", "SweetFire Chicken Breast"],
      beverages: ["Green Tea", "Soda"],
    },
  },
  {
    id: 11,
    name: "Dunkin' Donuts",
    rating: 4.3,
    time: "25-30 mins",
    type: "Donuts",
    promoted: false,
    location: "Kothrud",
    imageUrl: img4,
    menu: {
      starters: ["Munchkins", "Hash Browns"],
      lunch: ["Turkey Sausage Flatbread", "Veggie Egg White Sandwich"],
      dinner: ["Grilled Cheese", "Chicken Salad Sandwich"],
      beverages: ["Coffee", "Hot Chocolate"],
    },
  },
  {
    id: 12,
    name: "Panda Express",
    rating: 4.4,
    time: "35-40 mins",
    promoted: true,
    type: "Chinese",
    location: "Karve Nagar",
    imageUrl: img6,
    menu: {
      starters: ["Egg Rolls", "Crab Rangoon"],
      lunch: ["Orange Chicken", "Beef and Broccoli"],
      dinner: ["Kung Pao Chicken", "SweetFire Chicken Breast"],
      beverages: ["Green Tea", "Soda"],
    },
  },
];

export const restaurantMenus = [
  {
    id: 1,
    starters: [
      {
        name: "Garlic Bread",
        price: 120,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fc8z7mbnx4lvy89g5skc",
      },
      {
        name: "Cheese Sticks",
        price: 150,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa4cknhohshbnsqtd00o",
      },
    ],
    lunch: [
      {
        name: "Pepperoni Pizza",
        price: 350,
        rating: 4.6,
        deliveryTime: "20-30 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sxvul0cl6ojxuf3fdloy",
      },
      {
        name: "Margherita Pizza",
        price: 300,
        rating: 4.4,
        deliveryTime: "20-30 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qrz4n0hqrglniij1p3fw",
      },
    ],
    dinner: [
      {
        name: "BBQ Chicken Pizza",
        price: 400,
        rating: 4.7,
        deliveryTime: "25-35 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p4ayehxxsgqgu7cqa6xj",
      },
      {
        name: "Veggie Supreme Pizza",
        price: 370,
        rating: 4.5,
        deliveryTime: "25-35 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qrtbszaz3rmqqm6ftql3",
      },
    ],
    beverages: [
      {
        name: "Coke",
        price: 50,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xllm6r3ks2fyh9tifw2f",
      },
      {
        name: "Pepsi",
        price: 50,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eq3xvhcdsg1b0i0bd70u",
      },
    ],
  },
  {
    id: 2,
    starters: [
      {
        name: "Chicken Fries",
        price: 150,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vhefrkpvmswbd8t3zcv4",
      },
      {
        name: "Mozzarella Sticks",
        price: 130,
        rating: 4.2,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udgwgtbhha49qekgdxel",
      },
    ],
    lunch: [
      {
        name: "Whopper",
        price: 250,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeox5hndyk5i0lsfom7c",
      },
      {
        name: "Veggie Burger",
        price: 200,
        rating: 4.4,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sr17n9dqqwgcnhon92ou",
      },
    ],
    dinner: [
      {
        name: "Double Cheeseburger",
        price: 270,
        rating: 4.6,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n5nqjm9twtnugfyqzrda",
      },
      {
        name: "Chicken Sandwich",
        price: 240,
        rating: 4.3,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h1rf3onwrf88voo92otg",
      },
    ],
    beverages: [
      {
        name: "Sprite",
        price: 50,
        rating: 4.2,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgzp8rwlxj6g5ffmbrpi",
      },
      {
        name: "Fanta",
        price: 50,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/j7zzrg9qfxcfk8h7lh9u",
      },
    ],
  },
  {
    id: 3,
    starters: [
      {
        name: "Salad Bowl",
        price: 180,
        rating: 4.5,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bowlybag7rgeqnngctny",
      },
      {
        name: "Soup",
        price: 120,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qz5gzcwh6xn7yfv8rdsz",
      },
    ],
    lunch: [
      {
        name: "Turkey Sub",
        price: 250,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cnhz8e1roiqilq7esxkj",
      },
      {
        name: "Veggie Delight",
        price: 200,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lopnr6vjh2n17xlnszjw",
      },
    ],
    dinner: [
      {
        name: "Chicken Teriyaki Sub",
        price: 260,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zlj0kho5eb9av74tce7e",
      },
      {
        name: "Meatball Marinara",
        price: 280,
        rating: 4.6,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y7m7iwm1e7bcup3rvcfm",
      },
    ],
    beverages: [
      {
        name: "Iced Tea",
        price: 60,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m7xexfkvtr3kqsxxt4rd",
      },
      {
        name: "Lemonade",
        price: 60,
        rating: 4.5,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lfgkgb9kr0jxcr2amxhl",
      },
    ],
  },
  {
    id: 4,
    starters: [
      {
        name: "Stuffed Cheesy Bread",
        price: 150,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wbmfrllfu6lzv7hj4pjt",
      },
      {
        name: "Parmesan Bread Bites",
        price: 120,
        rating: 4.2,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xyoxz0xrmdkzso5w5k0p",
      },
    ],
    lunch: [
      {
        name: "Pepperoni Pizza",
        price: 320,
        rating: 4.5,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yroli9wokmaqei6jthxy",
      },
      {
        name: "Cheese Pizza",
        price: 290,
        rating: 4.3,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p8x0fgq5enolrvfflro3",
      },
    ],
    dinner: [
      {
        name: "Deluxe Pizza",
        price: 400,
        rating: 4.6,
        deliveryTime: "25-30 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e1xd8rk7wi2r3sjlhbxk",
      },
      {
        name: "Hawaiian Pizza",
        price: 370,
        rating: 4.4,
        deliveryTime: "25-30 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gpnw24vtp94xz6rreuii",
      },
    ],
    beverages: [
      {
        name: "Coke",
        price: 50,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/duz86b1h1kkq4hmpfqqv",
      },
      {
        name: "Diet Coke",
        price: 50,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lkaqhtljofef4boqdljq",
      },
    ],
  },
  {
    id: 5,
    starters: [
      {
        name: "Chicken Popcorn",
        price: 150,
        rating: 4.5,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p9y1hz4o92czwc0mhbpv",
      },
      {
        name: "Hot Wings",
        price: 180,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ckd94k45tbejdqwsnegt",
      },
    ],
    lunch: [
      {
        name: "Zinger Burger",
        price: 220,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mktwdgf8ng6zzk8es7th",
      },
      {
        name: "Chicken Wrap",
        price: 210,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lskqjx6xvlxozltfz1ns",
      },
    ],
    dinner: [
      {
        name: "Fried Chicken Bucket",
        price: 420,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sxvul0cl6ojxuf3fdloy",
      },
      {
        name: "Chicken Rice Bowl",
        price: 230,
        rating: 4.5,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jovh35pgf4lz92klbgdc",
      },
    ],
    beverages: [
      {
        name: "Mountain Dew",
        price: 50,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/povsx7yr1n8p1hh5nmjp",
      },
      {
        name: "Mirinda",
        price: 50,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ysoayh4h6tyqjwuq80yq",
      },
    ],
  },
  {
    id: 6,
    starters: [
      {
        name: "Banana Bread",
        price: 120,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l8y79asljqmjlspgl9xl",
      },
      {
        name: "Butter Croissant",
        price: 140,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wfvdmkwecldng4hgx28e",
      },
    ],
    lunch: [
      {
        name: "Chicken Panini",
        price: 260,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oe5v9zpgfh1oyxnqohd7",
      },
      {
        name: "Veggie Sandwich",
        price: 230,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l8vd7a4btg5xysakjii9",
      },
    ],
    dinner: [
      {
        name: "Turkey Club Sandwich",
        price: 280,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wveguigfp5uauieeqp6z",
      },
      {
        name: "Chicken Salad",
        price: 240,
        rating: 4.5,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9j3owyc8im5nhsljex7",
      },
    ],
    beverages: [
      {
        name: "Latte",
        price: 150,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v5pmb2cgcguu9pqr9sjx",
      },
      {
        name: "Cappuccino",
        price: 150,
        rating: 4.5,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o7xfqfyk2eiqbf6hzvw5",
      },
    ],
  },
  {
    id: 7,
    starters: [
      {
        name: "Spring Rolls",
        price: 130,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/afpmj07jklg4lojjpttv",
      },
      {
        name: "Chilli Chicken",
        price: 150,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cmw4y97v8ov2spk9q30b",
      },
    ],
    lunch: [
      {
        name: "Sweet and Sour Chicken",
        price: 280,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qjcpgpyois7ndq88fkrd",
      },
      {
        name: "Veg Noodles",
        price: 250,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m5swedfvhmhyugf8rriz",
      },
    ],
    dinner: [
      {
        name: "Chicken Manchurian",
        price: 300,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cn1ciwn2b8x0mq5gfywx",
      },
      {
        name: "Fried Rice",
        price: 270,
        rating: 4.5,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tjf79x1ukfrd5iiyzywg",
      },
    ],
    beverages: [
      {
        name: "Iced Lemon Tea",
        price: 60,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zdsmmh3ty9rgdjiyxyx3",
      },
      {
        name: "Green Tea",
        price: 60,
        rating: 4.5,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/j3hsghvjdjoa8cvhvubh",
      },
    ],
  },
  {
    id: 8,
    starters: [
      {
        name: "Egg Roll",
        price: 140,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d9h7ydnlhr4s29euwxwx",
      },
      {
        name: "Chicken Samosa",
        price: 150,
        rating: 4.5,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mtavszcrg0j7tyxhpgyc",
      },
    ],
    lunch: [
      {
        name: "Biryani",
        price: 260,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yaqbiybc0koq2etfyfy7",
      },
      {
        name: "Chicken Curry",
        price: 230,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r6j06fn2kdl5bzjlhecq",
      },
    ],
    dinner: [
      {
        name: "Butter Chicken",
        price: 320,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dl7tcax3lrczjh2yxat9",
      },
      {
        name: "Paneer Butter Masala",
        price: 300,
        rating: 4.6,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g4aj3yso5m8wzzunb8vx",
      },
    ],
    beverages: [
      {
        name: "Masala Chai",
        price: 30,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lx2ovvnpxb8vdrcyzvoj",
      },
      {
        name: "Lassi",
        price: 50,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af1pd17shyf4zvdn5y4r",
      },
    ],
  },
  {
    id: 9,
    starters: [
      {
        name: "Hummus",
        price: 160,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jse0xayb3ccfs7by1b7p",
      },
      {
        name: "Falafel",
        price: 150,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l7drpkk62ryi3cso7g8z",
      },
    ],
    lunch: [
      {
        name: "Chicken Shawarma",
        price: 270,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhdkd7sy9wbncokodqie",
      },
      {
        name: "Veggie Platter",
        price: 240,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/srnjnzqf1mfcjxwy2y2b",
      },
    ],
    dinner: [
      {
        name: "Mixed Grill",
        price: 400,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ftmklwjfnf9hm1etfeqk",
      },
      {
        name: "Lamb Kofta",
        price: 350,
        rating: 4.6,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/saqggzt5msktvavf13au",
      },
    ],
    beverages: [
      {
        name: "Mint Lemonade",
        price: 60,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lbh3pwkiq6tbzjxyksvj",
      },
      {
        name: "Turkish Coffee",
        price: 80,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wx2c7kif3lsdr3hdtwvl",
      },
    ],
  },
  {
    id: 10,
    starters: [
      {
        name: "Nachos",
        price: 150,
        rating: 4.3,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e1ecspnv7ui4n6tyjmvk",
      },
      {
        name: "Chicken Tacos",
        price: 160,
        rating: 4.4,
        deliveryTime: "10-15 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y7u52ylz5nnxob9r7s7g",
      },
    ],
    lunch: [
      {
        name: "Burrito",
        price: 250,
        rating: 4.6,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jdvl7swv6kpkmpbfs7ex",
      },
      {
        name: "Quesadilla",
        price: 240,
        rating: 4.5,
        deliveryTime: "15-20 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p4zwlvb9l7dxr9dljfpz",
      },
    ],
    dinner: [
      {
        name: "Enchiladas",
        price: 320,
        rating: 4.7,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zpgcug6es1y1jbrkzvhr",
      },
      {
        name: "Taco Salad",
        price: 290,
        rating: 4.6,
        deliveryTime: "20-25 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jh6p3vjd5pnnjz2ld9yt",
      },
    ],
    beverages: [
      {
        name: "Margarita",
        price: 90,
        rating: 4.3,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e1yxjbyejk8nxlxldxwd",
      },
      {
        name: "Mexican Coke",
        price: 70,
        rating: 4.4,
        deliveryTime: "5-10 mins",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pswulmf2nzwtxw9rdihe",
      },
    ],
  },
];
