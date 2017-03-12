class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// import * from 'Inventory'

class Shop {
  constructor(items = []){
    this.items = items;
  }

  updateQuality() {
    const AGEDBRIE = {
      name: "Aged Brie",
      dateChange: function() { if (item.name === 'Aged Brie') { item.sellIn -= 1; } },
      qualityChange: function() {
        if (item.name === AGEDBRIE.name) {
          item.quality += 1;
          if (item.quality > 50) { item.quality = 50; }
        }
      }
    };

    const BACKSTAGE = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      dateChange: function() { if (item.name === 'Backstage passes to a TAFKAL80ETC concert') { item.sellIn -= 1; } },
      qualityChange: function() {
        if (item.name === BACKSTAGE.name) {
          if (item.sellIn < 0) {
            item.quality = 0;
          } else if (item.sellIn < 6) {
            item.quality += 3;
          } else if (item.sellIn < 11) {
            item.quality += 2;
          } else {
            item.quality += 1;
          }
          if (item.quality > 50) { item.quality = 50; }
        }
      }
    };

    const CONJURED = {
      name: "Conjured goblin earwax",
      dateChange: function() { if (item.name === 'Conjured goblin earwax') { item.sellIn -= 1; } },
      qualityChange: function() {
        if (item.name === CONJURED.name) {
          if (item.sellIn < 0) {
            item.quality -= 4;
          } else {
            item.quality -= 2;
          }
          if (item.quality > 50) { item.quality = 50; }
          if (item.quality < 0) { item.quality = 0; }
        }
      }
    };

    const SULFURAS = {
      name: "Sulfuras, Hand of Ragnaros",
      dateChange: function() { if (item.name === 'Sulfuras, Hand of Ragnaros') { } },
      qualityChange: function() { if (item.name === 'Sulfuras, Hand of Ragnaros') { item.quality = 80; } }
    };

    const NORMAL = {
      name: "",
      dateChange: function() { if ((item.name != AGEDBRIE.name) && (item.name != BACKSTAGE.name) && (item.name != CONJURED.name) && (item.name != SULFURAS.name)) { item.sellIn -= 1; } },
      qualityChange: function() {
        if ((item.name != AGEDBRIE.name) && (item.name != BACKSTAGE.name) && (item.name != CONJURED.name) && (item.name != SULFURAS.name)) {
          if (item.sellIn < 0) {
            item.quality -= 2;
          } else {
            item.quality -= 1;
          }
          if (item.quality > 50) { item.quality = 50; }
          if (item.quality < 0) { item.quality = 0; }
        }
      }
    };

    const ITEMS = [AGEDBRIE, BACKSTAGE, CONJURED, SULFURAS, NORMAL];

    function dateAndQuality(item) {
      for (var i = 0; i < ITEMS.length; i++) {
        ITEMS[i].dateChange();
        ITEMS[i].qualityChange();
      }
    }

    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      dateAndQuality(item);
    }

    return this.items;
  }
}
