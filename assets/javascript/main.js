let body = document.querySelector("body");
let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.
    */
    this.state = Math.floor(Math.random() * 2);
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. 
    */
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");

    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.
    */
    if (this.state === 0) {
      image.src = "./assets/images/heads.jpg";
      image.alt = "Heads";
    } else {
      image.src = "./assets/images/tails.jpg";
      image.alt = "Tails";
    }
    return image;
  },
};

function display20Flips() {
  let coinSides = document.createElement("div");
  for (let i = 0; i < 20; i++) {
    coin.flip();
    coinSides = coin.toString() + "\n";
    body.append(coinSides);
  }
}
display20Flips();

function display20Images() {
  for (let j = 0; j < 20; j++) {
    coin.flip();
    body.append(coin.toHTML());
  }
}
display20Images();
