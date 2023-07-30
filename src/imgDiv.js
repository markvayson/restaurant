import front from "./img/restofront.png";
import back from "./img/restoback.png";
import side from "./img/restoside.png";
import seaside from "./img/restoseaside.png";
import background from "./img/bg.png";

import chef1 from "./img/chef1.png";
import chef2 from "./img/chef2.png";
import chef3 from "./img/chef3.png";
import chef4 from "./img/chef4.png";

import shuffleArray from "./shuffleArray";

const imgDiv = (imgPaths) => {
  let obj = {
    headings: [front, back, side, seaside],
    Who: [chef1, chef2, chef3, chef4],
    What: [chef1, chef2, chef3, chef4],
    Where: [chef1, chef2, chef3, chef4],
  };

  const imgContainer = document.createElement("div");
  imgContainer.className = "grid p-5  gap-2 grid-cols-2";

  const shuffledArr = shuffleArray(obj[imgPaths]);
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
