import background from "./img/background.jpg";
import call from "./img/call.png";
import facebook from "./img/facebook.png";
import github from "./img/github.png";
import message from "./img/message.png";
import chef from "./img/chef.png";
export const about = {
  Who: {
    bg: chef,
    details:
      "Meet Chef Merlin Moonshadow, a culinary magician renowned for blending traditional cooking techniques with a touch of sorcery. Alongside a team of skilled chefs and enchanting servers, he brings to life Enchanted Eats, where food becomes an extraordinary adventure.",
  },
  What: {
    bg: background,
    details:
      "Enchanted Eats is not just a restaurant; it's a portal to a realm of fantasy and wonder. Indulge in innovative dishes inspired by legendary tales and mythical beings. Guests can concoct their own potions and solve riddles hidden within the menu for secret treats.",
  },
  Where: {
    bg: background,
    details:
      "Nestled on the outskirts of a mystical forest, Enchanted Eats emerges from the pages of a storybook. The restaurant's ambiance, with floating candles and ancient tomes, adds to the magical experience. Located discreetly, it invites curious travelers and local residents seeking extraordinary dining.",
  },
};

export const cta = {
  facebook: {
    icon: facebook,
    url: "#",
  },
  github: {
    icon: github,
    url: "https://github.com/markvayson/restaurant",
  },
  message: message,
  call: call,
};
export const menuItems = ["Delivery", "Bar", "Contacts"];
