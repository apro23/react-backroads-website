import tourImage1 from "./images/tour-1.jpeg";
import tourImage2 from "./images/tour-2.jpeg";
import tourImage3 from "./images/tour-3.jpeg";
import tourImage4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    text: "home",
    href: "#home",
  },
  {
    id: 2,
    text: "about",
    href: "#about",
  },
  {
    id: 3,
    text: "services",
    href: "#services",
  },
  {
    id: 4,
    text: "tours",
    href: "#tours",
  },
  {
    id: 5,
    text: "contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
  {
    id: 4,
    href: "https://www.twitter.com",
    icon: "fab fa-instagram",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    name: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tourImage1,
    date: "august 26th, 2020",
    country: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    name: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tourImage2,
    date: "october 1th, 2020",
    country: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    name: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tourImage3,
    date: "december 20th, 2020",
    country: "hong kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    name: "kenya highlights tour",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tourImage4,
    date: "December 5th, 2019",
    country: "kenya",
    days: 20,
    price: 3300,
  },
];
