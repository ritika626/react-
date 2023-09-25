export const ob = [
  {
    id: 1,
    type: "fruits",
    name: "banana",
    actionFlag: true,
  },
  {
    id: 2,
    type: "vegetables",
    name: "bhindi",
    actionFlag: false,
  },
  {
    id: 3,
    type: "spices",
    name: "chilli",
    actionFlag: false,
  },
  {
    id: 4,
    type: "fruits",
    name: "mango",
    actionFlag: true,
  },
  {
    id: 5,
    type: "vegetables",
    name: "lady finger",
    actionFlag: true,
  },
  {
    id: 6,
    type: "spices",
    name: "pepper",
    actionFlag: false,
  },
  {
    id: 7,
    type: "fruits",
    name: "apple",
    actionFlag: false,
  },
];

export const ob1 = [
  {
    type: "fruits",
    name: "ritika",
    actionFlag: true,
  },
  {
    type: "vegetables",
    name: "shubham",
    actionFlag: false,
  },
  {
    type: "spices",
    name: "gobr",
    actionFlag: false,
  },
];

export const ob2 = [
  {
    id: 1,
    categoryId: 1,
    type: "fruits",
    name: "ritika",
    actionFlag: true,
  },
  {
    id: 2,
    categoryId: 2,
    type: "vegetables",
    name: "aman",
    actionFlag: false,
  },
  {
    id: 3,
    categoryId: 3,
    type: "spices",
    name: "gobr",
    actionFlag: false,
  },
  {
    id: 4,
    categoryId: 4,
    type: "fruits",
    name: "gobr",
    actionFlag: true,
  },
];

export const categories = [
  {
    id: 1,
    name: "fruits",
    actionFlag: true,
    type: "food",
  },
  {
    id: 2,
    name: "vege",
    actionFlag: true,
    type: "drink",
  },
  {
    id: 3,
    name: "spices",
    actionFlag: false,
    type: "animal",
  },
];

export const normalOb = {
  id: 2,
  name: "grssoe",
  actionFlag: false,
};

export const normalOb1 = {
  id: 1,
  name: "fruits",
  actionFlag: true,
  categoryId: 4,
  type: "normal",
  class: "dc",
};

export const xObj = {
  id: 1,
  name: "fruits",
  actionFlag: true,
  categoryId: 4,
  type: "normal",
  class: "dc",
  users: {
    name: "usersList",
    list: {
      listName: "listName",
      data: [
        {
          id: 1,
          name: "gaba",
        },
        {
          id: 2,
          name: "lemon",
        },
        {
          id: 3,
          name: "kiko",
        },
        {
          id: 4,
          name: "shubh",
        },
      ],
    },
  },
};

export const newSampleObj = {
  a: 23,
  b: 78,
  c: 76,
  d: 50,
  e: 34,
  f: 65,
};

export const nestedObj = {
  a: {
    x: 10,
    y: 20,
    z: 30,
  },
  b: {
    j: 40,
    k: 80,
    l: 50,
  },
  c: {
    m: 70,
    n: 40,
    o: 10,
  },
};

export const todayArr = [1, 2, 3, 4, 67, 4, 2, 89, 89, 100, 2, 45, 34, 2];
export const ritika = [
  "ritika",
  "shubham",
  "lassan",
  "graoes",
  "dirt",
  "mango",
];
export const shubham = [
  "ritika1",
  "shubham1",
  "lassan1",
  "graoes1",
  "dirt1",
  "mango1",
];

export const categoriesNames = {
  fru: "Fruits",
  veges: "Vegetables",
  car: "Hyundai",
  cake: "Butterscotch",
  home: "Ambala",
  gate: "Brown",
};

export const tags = [
  {
    id: 1,
    name: "ritika",
    age: 23,
  },
  {
    id: 2,
    name: "ritika",
    age: 24,
  },
  {
    id: 3,
    name: "ritika",
    age: 25,
  },
  {
    id: 4,
    name: "ritika",
    age: 26,
  },
  {
    id: 5,
    name: "ritika",
    age: 27,
  },
  {
    id: 6,
    name: "ritika",
    age: 28,
  },
  {
    id: 7,
    name: "ritika",
    age: 29,
  },
  {
    id: 8,
    name: "ritika",
    age: 20,
  },
  {
    id: 9,
    name: "ritika",
    age: 30,
  },
];

export const categoriesArr = [
  {
    id: 1,
    name: "shubh",
    type: "fru",
    address: {
      lane: "sadar",
      city: "ambala",
    },
    tags: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: "shubh1",
    type: "veges",
    address: {
      lane: "tribune",
      city: "ambala",
    },
    tags: [1, 2],
  },
  {
    id: 3,
    name: "shubh2",
    type: "car",
    address: {
      lane: "palledhar",
      city: "ambala",
    },
    tags: [4, 5],
  },
  {
    id: 4,
    name: "shubh3",
    type: "cake",
    address: {
      lane: "pansari",
      city: "ambala",
    },
  },
  {
    id: 5,
    name: "shubh4",
    type: "home",
    address: {
      lane: "gud",
      city: "ambala",
    },
    tags: [1, 5],
  },
  {
    id: 6,
    name: "shubh5",
    type: "gate",
    address: {
      lane: "kokone",
      city: "ambala",
    },
    tags: [1, 2, 3, 4],
  },
];

module.exports = tags;

export const dummyData = [
  {
    id: 1,
    first_name: "Nike",
    last_name: "Oliva",
    email: "noliva0@51.la",
    gender: "Female",
    ip_address: "124.229.36.1",
    tab: "game1",
  },
  {
    id: 2,
    first_name: "Gabi",
    last_name: "Gideon",
    email: "ggideon1@yolasite.com",
    gender: "Male",
    ip_address: "1.151.33.146",
    tab: "game2",
  },
  {
    id: 3,
    first_name: "Willetta",
    last_name: "Flancinbaum",
    email: "wflancinbaum2@reuters.com",
    gender: "Female",
    ip_address: "49.84.67.18",
    tab: "game1",
  },
  {
    id: 4,
    first_name: "Friedrick",
    last_name: "Cawse",
    email: "fcawse3@php.net",
    gender: "Male",
    ip_address: "99.190.45.66",
    tab: "game2",
  },
  {
    id: 5,
    first_name: "Gilda",
    last_name: "Curthoys",
    email: "gcurthoys4@seattletimes.com",
    gender: "Female",
    ip_address: "179.219.59.82",
    tab: "game3",
  },
  {
    id: 6,
    first_name: "Melissa",
    last_name: "Billingsley",
    email: "mbillingsley5@merriam-webster.com",
    gender: "Female",
    ip_address: "149.185.235.12",
    tab: "game1",
  },
  {
    id: 7,
    first_name: "Carlin",
    last_name: "Ivanikov",
    email: "civanikov6@webmd.com",
    gender: "Male",
    ip_address: "119.210.63.136",
    tab: "game3",
  },
  {
    id: 8,
    first_name: "Milicent",
    last_name: "Meryett",
    email: "mmeryett7@infoseek.co.jp",
    gender: "Female",
    ip_address: "251.230.121.76",
    tab: "game3",
  },
  {
    id: 9,
    first_name: "Guthrie",
    last_name: "Gathercole",
    email: "ggathercole8@diigo.com",
    gender: "Male",
    ip_address: "70.179.91.121",
    tab: "game2",
  },
  {
    id: 10,
    first_name: "Alvira",
    last_name: "Webland",
    email: "awebland9@deliciousdays.com",
    gender: "Female",
    ip_address: "143.89.47.167",
    tab: "game1",
  },
];
