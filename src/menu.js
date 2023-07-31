const menu = () => {
  const div = document.createElement("div");
  div.className = `grid gap-5 hidden md:grid-cols-2 grid-rows-fr`;
  div.id = "menu-container";
  const items = {
    foods: {
      breakfast: {
        "Fairy Berry Pancakes":
          "Fluffy pancakes sprinkled with enchanted berries and drizzled with shimmering honey.",
        "Dragon's Breath Omelette":
          "A fiery omelette filled with spicy peppers, melted cheese, and smoked dragon sausage.",
        "Enchanted Forest Acai Bowl":
          "A magical blend of acai berries, dragon fruit, and edible flowers, topped with crunchy granola and fairy dust.",
      },
      lunch: {
        "Mermaid's Melody Salad":
          "A refreshing salad featuring fresh ocean greens, seared shrimp, avocado, and a seafoam vinaigrette.",
        "Enchanted Garden Wrap":
          "A delightful wrap filled with roasted vegetables, hummus, and herb-infused quinoa, wrapped in a mystical green spinach tortilla.",
        "Unicorn's Rainbow Pizza":
          "A whimsical pizza topped with colorful bell peppers, cherry tomatoes, and a sprinkle of edible glitter, all atop a fluffy cloud of mozzarella.",
      },
      dinner: {
        "Wizard's Spellbinding Steak":
          "A perfectly grilled steak served with roasted potatoes, charred broccolini, and a mysterious smoky sauce.",
        "Pixie's Forest Risotto":
          "Creamy wild mushroom and truffle risotto, garnished with edible flower petals and sprinkled with pixie dust.",
        "Enchanted Seafood Platter":
          "An exquisite seafood medley of seared scallops, grilled octopus, and buttery lobster tails, served with seaweed salad and lemon butter sauce.",
      },
    },

    beverage: {
      Hot: {
        "Mystic Chai Latte":
          "A bewitching blend of spiced chai, frothy milk, and a hint of enchanting cinnamon.",
        "Enchanted Hot Cocoa":
          "Rich and velvety cocoa with a touch of marshmallow magic and a sprinkle of edible gold dust.",
        "Sorcerer's Brew Coffee":
          "An aromatic brew with beans sourced from the hidden realms, offering an otherworldly caffeine experience.",
      },
      Cold: {
        "Faerie Fruit Iced Tea":
          "A refreshing iced tea infused with a medley of enchanted fruits and a twist of citrusy magic.",
        "Unicorn Lemonade":
          "A sparkling lemonade with a spectrum of rainbow colors, accompanied by a unicorn-shaped candy stirrer.",
        "Enchanted Elixir Iced Coffee":
          "A mesmerizing cold brew infused with mystical herbs and served over ice for the perfect pick-me-up.",
      },
      Elixirs: {
        "Potion of Eternal Youth":
          "A vibrant elixir made from rejuvenating berries and rare herbs, believed to grant everlasting youthfulness.",
        "Elixir of Enlightenment":
          "A sparkling concoction with hints of elderflower and starlight, thought to bring clarity to the mind and soul.",
        "Enchanted Ambrosia":
          "A secret blend of exotic nectars, said to bestow those who taste it with unparalleled bliss and happiness.",
      },
    },
  };
  let DEFAULT = 0;

  const itemsKey = Object.keys(items);
  itemsKey.forEach((key) => {
    const itemsKeyDiv = document.createElement("div");
    itemsKeyDiv.className = "border-b p-5 gap-5 grid grid-cols-1";
    const keyDiv = document.createElement("div");
    keyDiv.textContent = key;
    keyDiv.className =
      "grid grid-cols-1 w-full text-2xl font-bold uppercase place-items-center gap-5";

    const values = items[key];
    const valuesKey = Object.keys(values);
    const valuesDiv = document.createElement("div");
    valuesDiv.className = "grid grid-cols-3 w-full gap-5  text-xl";

    valuesKey.forEach((value) => {
      const index = valuesKey.indexOf(value);
      const button = document.createElement("button");
      button.textContent = value;
      button.id = value;
      if (valuesKey.indexOf(value) === DEFAULT) {
        button.className = `${key}-button border text-white bg-red-500 border-red-500 p-1 rounded-lg text-center`;
      } else {
        button.className = `${key}-button border border-red-500 p-1 rounded-lg text-center`;
      }
      button.addEventListener("click", () => {
        DEFAULT = index;
        showContent(key, value, values[value]);
      });
      valuesDiv.appendChild(button);
    });

    const contents = document.createElement("div");
    contents.id = key;
    contents.className = "grid   grid-cols-1 place-items-center ";
    const contentsValue = valuesKey[DEFAULT];
    const info = values[contentsValue];
    const infoKeys = Object.keys(info);
    infoKeys.forEach((item) => {
      const infoDiv = document.createElement("div");
      infoDiv.className = "w-full flex flex-col gap-2 h-32";
      const title = document.createElement("span");
      title.className = "font-semibold text-xl";
      title.textContent = item;

      const p = document.createElement("p");
      p.textContent = info[item];
      p.className = "text-justify text-base";

      infoDiv.appendChild(title);
      infoDiv.appendChild(p);

      contents.appendChild(infoDiv);
    });

    itemsKeyDiv.appendChild(keyDiv);
    itemsKeyDiv.appendChild(valuesDiv);
    itemsKeyDiv.appendChild(contents);
    div.appendChild(itemsKeyDiv);
  });
  return div;
};

const showContent = (key, value, content) => {
  const keys = Object.keys(content);
  const btns = document.querySelectorAll(`.${key}-button`);
  btns.forEach((button) => {
    button.classList.remove("bg-red-500", "text-white");
  });
  const val = document.getElementById(value);
  val.classList.add("bg-red-500", "text-white");

  const cont = document.getElementById(key);
  const spans = cont.querySelectorAll("span");
  const texts = cont.querySelectorAll("p");
  texts.forEach((p, index) => {
    p.textContent = content[keys[index]];
  });
  spans.forEach((span, index) => {
    span.textContent = keys[index];
  });
};

export default menu();
