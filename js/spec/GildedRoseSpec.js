describe("Gilded Rose", function() {
  it ("should have standard items, whose quality decreases in time (twice as fast after sell-by date)", function() {
    const gildedRose = new Shop([
      new Item("Foo Fine Fodder", 5, 10),
      new Item("Foo Fine Fodder", -1, 5)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
    expect(items[1].quality).toEqual(3);
  });

  it ("should never have item quality drop below 0", function() {
    const gildedRose = new Shop([
      new Item("Foo Fine Fodder", -3, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -3, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    expect(items[1].quality).toEqual(0);
  });

  it ("should have Aged Brie, whose quality increases in time", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 5, 20),
      new Item("Aged Brie", -2, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
    expect(items[1].quality).toEqual(21);
  });

  it ("should never have item quality rise above 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", -30, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
    expect(items[1].quality).toEqual(50);
  });

  it ("should have Sulfuras, whose quality never alters", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    expect(items[1].quality).toEqual(80);
  });

  it ("should have backstage passes, whose quality increases until the concert date", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
    expect(items[1].quality).toEqual(12);
    expect(items[2].quality).toEqual(13);
  });

  it ("should have backstage passes, whose quality drops to 0 after the concert date", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should have Conjured items whose quality decreases twice as fast (before and after sell-by date)", function() {
    const gildedRose = new Shop([
      new Item("Conjured goblin earwax", 3, 10),
      new Item("Conjured goblin earwax", -3, 6)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
    expect(items[1].quality).toEqual(2);
  });
});
