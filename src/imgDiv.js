import front from "./img/restofront.png";
import back from "./img/restoback.png";
import side from "./img/restoside.png";
import seaside from "./img/restoseaside.png";

import chef1 from "./img/chef1.png";
import chef2 from "./img/chef2.png";
import chef3 from "./img/chef3.png";
import chef4 from "./img/chef4.png";

import what1 from "./img/what1.png";
import what2 from "./img/what2.png";
import what3 from "./img/what3.png";
import what4 from "./img/what4.png";

import where1 from "./img/where1.png";
import where2 from "./img/where2.png";
import where3 from "./img/where3.png";
import where4 from "./img/where4.png";

import shuffleArray from "./shuffleArray";

const imgDiv = (imgPaths) => {
  let obj = {
    headings: [front, back, side, seaside],
    Who: [chef1, chef2, chef3, chef4],
    What: [what1, what2, what3, what4],
    Where: [where1, where2, where3, where4],
  };

  const imgContainer = document.createElement("div");
  imgContainer.className = "grid p-5 md:place-self-center gap-2 grid-cols-2";

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
