export const AGEDBRIE = {
  name: "Aged Brie",
  dateChange: function() { if (item.name === 'Aged Brie') { item.sellIn -= 1; } },
  qualityChange: function() {
    if (item.name === AGEDBRIE.name) {
      item.quality += 1;
      if (item.quality > 50) { item.quality = 50; }
    }
  }
};

export const BACKSTAGE = {
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

export const CONJURED = {
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

export const SULFURAS = {
  name: "Sulfuras, Hand of Ragnaros",
  dateChange: function() { if (item.name === 'Sulfuras, Hand of Ragnaros') { } },
  qualityChange: function() { if (item.name === 'Sulfuras, Hand of Ragnaros') { item.quality = 80; } }
};

export const NORMAL = {
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

export const ITEMS = [AGEDBRIE, BACKSTAGE, CONJURED, SULFURAS, NORMAL];
