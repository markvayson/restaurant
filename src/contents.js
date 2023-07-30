import imgDiv from "./imgDiv";
import shuffleArray from "./shuffleArray";

const contents = (path, isReverse) => {
  const details = {
    Who: {
      intro: '"Meet Your Maker"',
      name: "Chef Merlin Moonshadow",
      text: "a culinary magician renowned for blending traditional cooking techniques with a touch of sorcery. Alongside a team of skilled chefs and enchanting servers, he brings to life Enchanted Eats, where food becomes an extraordinary adventure.",
    },
    What: {
      intro: '"Not Just A Restaurant"',
      name: "Enchanted Eats",
      text: "is not just a restaurant; it's a portal to a realm of fantasy and wonder. Indulge in innovative dishes inspired by legendary tales and mythical beings. Guests can concoct their own potions and solve riddles hidden within the menu for secret treats.",
    },
    Where: {
      intro: '"Amidst a Mystical Forest"',
      name: "Enchanted Eats",
      text: "emerges from the pages of a storybook. The restaurant's ambiance, with floating candles and ancient tomes, adds to the magical experience. Located discreetly, it invites curious travelers and local residents seeking extraordinary dining.",
    },
  };

  const content = document.createElement("div");
  content.id = path;
  content.className = "grid gap-10 md:grid-cols-2";

  const section = document.createElement("div");
  section.className =
    "grid md:w-3/4 md:h-1/2 md:place-self-center place-items-center gap-2 text-justify p-5";

  const head = document.createElement("span");
  head.textContent = path;

  const intro = document.createElement("div");
  intro.textContent = details[path].intro;
  intro.className = "flex gap-2 flex-col text-xl text-center p-5";

  const name = document.createElement("span");
  name.className = "text-3xl font-bold tracking-wider";
  name.textContent = details[path].name;

  const info = document.createElement("p");
  info.className = "md:text-xl";
  info.textContent = details[path].text;

  const sectionDivs = [head, intro, name, info];
  sectionDivs.forEach((div) => {
    section.appendChild(div);
  });
  let divs = [];
  if (isReverse) {
    divs = [imgDiv(path), section];
    head.className =
      "bg-red-500 font-bold tracking-widest text-xl text-white p-2 rounded-lg";
  } else {
    divs = [section, imgDiv(path)];
    content.classList.add("bg-red-500", "text-white");
    head.className =
      "bg-white font-bold tracking-widest text-xl text-red-500 p-2 rounded-lg";
    name.classList.add("bg-white", "text-red-500", "p-2");
  }

  divs.forEach((div) => {
    content.appendChild(div);
  });

  return content;
};

export default contents;
