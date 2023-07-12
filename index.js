class Card {
  constructor(name, image, colour, type) {
    this.name = name;
    this.image = image;
    this.colour = colour;
    this.type = type;
  }
}

class Creature extends Card {
  constructor(name, image, colour, attack, defense) {
    super(name, image, colour);
    this.attack = attack;
    this.defense = defense;
  }
}
