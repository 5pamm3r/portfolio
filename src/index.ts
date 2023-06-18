import { projects, fragmentProject } from "./projects.js";
import { styles } from "./styles.js";
import { topSlide } from "./animations.js";

const getProject: void = (() => {
  const project: HTMLElement | null = document.querySelector("#projects");
  projects(
    "Aerolab-Challenge",
    "Challenge, React, TypeScript",
    "The coding challenge consists of interacting with an e-commerce API, where users have points that they can spend to redeem products.",
    "../public/assets/icons/aerolab-logo.svg",
    "../public/assets/videos/aerolab-challenge.mp4",
    "https://aerolab-challenge-5pamm3r.vercel.app/"
  );
  projects(
    "Food Truck Delivery",
    "Next.js, UX/UI Design",
    "Looking for an efficient and cost-effective way to manage your orders? This application, designed specifically for food delivery businesses, provides you with a powerful and easy-to-use platform to display your menu and take orders.",
    "../public/assets/images/icon-384x384.png",
    "../public/assets/videos/food-truck.mp4",
    "https://food-truck-demo.vercel.app/"
  );
  projects(
    "Expense tracker",
    "React, UX/UI Design",
    "Do you feel that money flies? To optimize expenses, it is important to know what is spent on. There is only one way to do it and that is to keep track of expenses.",
    "https://5pamm3r.github.io/portfolio/public/assets/images/cryptoWallet.webp",
    "https://5pamm3r.github.io/portfolio/public/assets/videos/expenseTracker-video.mp4",
    "https://5pamm3r.github.io/expense-tracker"
  );
  projects(
    "Umbrella",
    "JavaScript, UX/UI Design",
    "Are you worried about the weather? In this app you will find basic information such as the current weather situation, as well as the forecast for days or hours.",
    "https://5pamm3r.github.io/portfolio/public/assets/images/umbrella.png",
    "https://5pamm3r.github.io/portfolio/public/assets/videos/umbrella-video.mp4",
    "https://5pamm3r.github.io/umbrella/"
  );
  projects(
    "Wish List",
    "React, UX/UI Design",
    "Organize effectively and say goodbye to stress. Plan, manage and control all your tasks in an application that will improve your efficiency at work and in your personal life.",
    "https://5pamm3r.github.io/portfolio/public/assets/images/featherPens.png",
    "https://5pamm3r.github.io/portfolio/public/assets/videos/video-wishlist.mp4",
    "https://5pamm3r.github.io/wish-list"
  );
  project?.append(fragmentProject);
})();

const renderLocalTime = (hour: string) => {
  document.getElementById("local-time")!.innerHTML = ` ${hour}.`;
};
(function () {
  const hour = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  });
  renderLocalTime(hour);
  setInterval(() => {
    const updatedHour = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
      minute: "2-digit",
    });
    renderLocalTime(updatedHour);
  }, 60000);
})();

topSlide();
styles();
