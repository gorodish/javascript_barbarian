var barbarian = {
  name: "Gary",
  weapon: "pointy letter opener",
  health: 20,
  angerLevel: 10,
  favouriteBeer: "Barbarian Beer",
  drink: function(beer) {
    if(beer === this.favouriteBeer) {
      this.health += 10;
      }else{
        this.angerLevel += 10;
      }
  }
}

module.exports = barbarian;

