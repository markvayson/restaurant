import resto from "./img/resto.png";
import logo from "./logo";

export const imgDiv = () => {
  const imgDiv = document.createElement("div");
  imgDiv.className = "w-full";

  const img = new Image();
  img.src = resto;

  imgDiv.appendChild(img);

  return imgDiv;
};

export const mainHeadings = () => {
  const textDiv = document.createElement("div");
  textDiv.className = "flex gap-5 flex-col place-items-center";
  const world = document.createElement("span");
  world.textContent = "NOW AVAILABLE NATIONWIDE";
  world.className = "font-medium tracking-wider text-gray-600 text-lg";
  textDiv.appendChild(world);

  const headings = document.createElement("h1");
  headings.className = "leading-loose text-center text-2xl font-bold";
  headings.textContent = "Welcome to";

  headings.appendChild(logo());

  const ending = document.createElement("span");
  ending.className = "text-xl";
  ending.textContent = "Where Magic Meets Gastronomy";

  headings.appendChild(ending);

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
  textDiv.appendChild(headings);
  textDiv.appendChild(btnDiv);

  return textDiv;
};
