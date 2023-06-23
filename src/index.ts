import { projects, fragmentProject } from "./projects.js";

const getProject: void = (() => {
  const project: HTMLElement | null = document.querySelector("#projects");
  projects(
    "Multi Step Form",
    "Frontend Mentor, A11Y, React",
    "Build a multi-step form resembling the provided design, enabling users to complete steps, go back to update selections, and confirm their order with a summary.",
    "https://cmassarino.dev/public/assets/images/frontend-mentor.webp",
    "https://cmassarino.dev/public/assets/videos/multi-step-form.mp4",
    "https://5pamm3r.github.io/multi-step-form/"
  );
  projects(
    "Aerolab Challenge",
    "Challenge, React",
    "The coding challenge consists of interacting with an e-commerce API, where users have points that they can spend to redeem products.",
    "https://cmassarino.dev/public/assets/images/aerolab.webp",
    "https://cmassarino.dev/public/assets/videos/aerolab-challenge.mp4",
    "https://aerolab-challenge-5pamm3r.vercel.app/"
  );
  projects(
    "Food Truck Delivery",
    "Next.js, UX/UI Design",
    "This application, designed specifically for food delivery businesses, provides you with a powerful and easy-to-use platform to display your menu and take orders.",
    "https://cmassarino.dev/public/assets/images/food-truck.webp",
    "https://cmassarino.dev/public/assets/videos/food-truck.mp4",
    "https://food-truck-demo.vercel.app/"
  );
  projects(
    "Expense Tracker",
    "React, UX/UI Design",
    "Do you feel that money flies? To optimize expenses, it is important to know what is spent on. There is only one way to do it and that is to keep track of expenses.",
    "https://cmassarino.dev/public/assets/images/blue-piggy.webp",
    "https://cmassarino.dev/public/assets/videos/expenseTracker-video.mp4",
    "https://5pamm3r.github.io/expense-tracker"
  );
  projects(
    "Umbrella",
    "JavaScript, UX/UI Design",
    "Are you worried about the weather? In this app you will find basic information such as the current weather situation, as well as the forecast for days or hours.",
    "https://cmassarino.dev/public/assets/images/umbrella.webp",
    "https://cmassarino.dev/public/assets/videos/umbrella-video.mp4",
    "https://5pamm3r.github.io/umbrella/"
  );
  projects(
    "Wish List",
    "React, UX/UI Design",
    "Organize effectively and say goodbye to stress. Plan, manage and control all your tasks in an application that will improve your efficiency at work and in your personal life.",
    "https://cmassarino.dev/public/assets/images/featherPens.png",
    "https://cmassarino.dev/public/assets/videos/video-wishlist.mp4",
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
