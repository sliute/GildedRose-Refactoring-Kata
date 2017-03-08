class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];

      if (item.name === 'Sulfuras, Hand of Ragnaros') { continue; }

      item.sellIn -= 1;

      if (item.name === 'Aged Brie') {
        item.quality += 1;
      }

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 0) {
          item.quality = 0;
        } else if (item.sellIn < 6) {
          item.quality += 3;
        } else if (item.sellIn < 11) {
          item.quality += 2;
        } else {
          item.quality += 1;
        }
      }

      if (item.name === 'Conjured goblin earwax') {
        if (item.sellIn < 0) {
          item.quality -= 4;
        } else {
          item.quality -= 2;
        }
      }

      if (item.name != 'Conjured goblin earwax' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Aged Brie' && item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.sellIn < 0) {
          item.quality -= 2;
        } else {
          item.quality -= 1;
        }
      }

      if (item.quality > 50) {
        item.quality = 50;
      }

      if (item.quality < 0) {
        item.quality = 0;
      }
    }

    return this.items;
  }
}
