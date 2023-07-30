import front from "./img/restofront.png";
import back from "./img/restoback.png";
import side from "./img/restoside.png";
import seaside from "./img/restoseaside.png";
import background from "./img/bg.png";

const shuffleImg = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const imgDiv = (imgPaths) => {
  let arr = [];
  if (imgPaths === "headings") {
    arr = [front, back, side, seaside];
  }
  const imgContainer = document.createElement("div");
  imgContainer.className = "grid md:order-2 gap-2 grid-cols-2";

  const shuffledArr = shuffleImg(arr);
  const topLeft = new Image();
  topLeft.src = shuffledArr[0];
  topLeft.className = "rounded-lg self-end shadow-xl";
  const topRight = new Image();
  topRight.src = shuffledArr[1];
  topRight.className = "rounded-lg shadow-xl self-end w-10/12 h-10/12";
  const bottomLeft = new Image();
  bottomLeft.src = shuffledArr[2];
  bottomLeft.className =
    "rounded-lg shadow-xl justify-self-end w-10/12 h-10/12";
  const bottomRight = new Image();
  bottomRight.src = shuffledArr[3];
  bottomRight.className = "rounded-lg shadow-xl";

  imgContainer.appendChild(topLeft);
  imgContainer.appendChild(topRight);
  imgContainer.appendChild(bottomLeft);
  imgContainer.appendChild(bottomRight);

  return imgContainer;
};

export default imgDiv;
