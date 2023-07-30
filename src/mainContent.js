import logo from "./logo";
import imgDiv from "./imgDiv.js";

const mainHeadings = () => {
  const headings = document.createElement("div");
  headings.className = "grid md:grid-cols-2 place-items-start gap-10 ";

  const textDiv = document.createElement("div");
  textDiv.className =
    "flex gap-5 md:order-1 md:place-self-center flex-col justify-self-center items-center";

  const world = document.createElement("span");
  world.textContent = "NOW AVAILABLE NATIONWIDE";
  world.className = "font-medium tracking-wider text-gray-600 text-lg";
  textDiv.appendChild(world);

  const headginText = document.createElement("h1");
  headginText.className = "leading-loose  text-center text-2xl font-bold";
  headginText.textContent = "Welcome to";

  headginText.appendChild(logo());

  const ending = document.createElement("span");
  ending.className = "text-xl";
  ending.textContent = "Where Magic Meets Gastronomy";

  headginText.appendChild(ending);

  const btnDiv = document.createElement("div");
  btnDiv.className = "grid grid-cols-2 gap-2";
  const arrBtns = ["See More Photos", "Menu"];
  arrBtns.forEach((item) => {
    const btn = document.createElement("button");
    btn.className =
      "first:bg-red-500 first:text-white p-2 rounded-lg text-lg border-red-500 text-red-500 border";
    btn.textContent = item;
    btnDiv.appendChild(btn);
  });
  textDiv.appendChild(headginText);
  textDiv.appendChild(btnDiv);

  headings.appendChild(imgDiv("headings"));
  headings.appendChild(textDiv);
  return headings;
};

export default mainHeadings;
