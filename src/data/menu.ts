/**
 * The menu, transcribed from photos of the printed card supplied by the owner
 * (November 2026). Prices in euro. A few of the small price digits on the sides
 * and dessert card were hard to read in the photo; those are marked CHECK.
 *
 * `name` is the name as printed on the card and is used on the German page.
 * The Japanese texts are translations and should be read once by a native speaker.
 */

export type Tag = 'vegan' | 'pikant' | 'scharf';
export type Text = { de: string; en: string; ja: string };

export type Item = {
  name: string;
  /** only where the English page needs a different name */
  nameEn?: string;
  nameJa: string;
  price: number;
  tags?: Tag[];
  /** broth and tare, as printed on the card */
  base?: Text;
  /** what comes with it */
  with?: Text;
};

export const ramen: Item[] = [
  {
    name: 'Shoyu Ramen',
    nameJa: '醤油ラーメン',
    price: 15.9,
    base: {
      de: 'Chintan / klare Hühnerbrühe / Sojasaucen-Tare',
      en: 'Chintan / clear chicken broth / soy sauce tare',
      ja: '清湯 / 鶏の澄んだスープ / 醤油ダレ',
    },
    with: {
      de: 'Chashu-Pork, Menma, Frühlingszwiebel, Ni-Tamago, Mayu-Öl, Nori',
      en: 'Chashu pork, menma, spring onion, ni-tamago, mayu oil, nori',
      ja: 'チャーシュー、メンマ、青ねぎ、煮玉子、マー油、海苔',
    },
  },
  {
    name: 'Miso Ramen',
    nameJa: '味噌ラーメン',
    price: 16.5,
    tags: ['pikant'],
    base: {
      de: 'Chintan / klare Hühnerbrühe / Miso-Tare',
      en: 'Chintan / clear chicken broth / miso tare',
      ja: '清湯 / 鶏の澄んだスープ / 味噌ダレ',
    },
    with: {
      de: 'Hühnerfaschiertes, Frühlingszwiebel, Ni-Tamago, Buttermais, Sojasprossen, Tobanjan, Nori',
      en: 'Minced chicken, spring onion, ni-tamago, butter corn, bean sprouts, tobanjan, nori',
      ja: '鶏そぼろ、青ねぎ、煮玉子、バターコーン、もやし、豆板醤、海苔',
    },
  },
  {
    name: 'Tori Paitan Ramen',
    nameJa: '鶏白湯ラーメン',
    price: 17,
    // The card prints "chintan / klare hühnerbrühe / salz-tare" here as well.
    base: { de: 'Hühnerbrühe / Salz-Tare', en: 'Chicken broth / salt tare', ja: '鶏スープ / 塩ダレ' },
    with: {
      de: 'Chashu-Pork oder pikantes Hühnerfaschiertes. Menma, Frühlingszwiebel, Ni-Tamago, Buttermais, Nori',
      en: 'Chashu pork or spicy minced chicken. Menma, spring onion, ni-tamago, butter corn, nori',
      ja: 'チャーシューまたはピリ辛鶏そぼろ。メンマ、青ねぎ、煮玉子、バターコーン、海苔',
    },
  },
  {
    name: 'Veganes Tonkotsu Ramen',
    nameEn: 'Vegan Tonkotsu Ramen',
    nameJa: 'ビーガン豚骨ラーメン',
    price: 16.5,
    tags: ['vegan', 'pikant'],
    base: {
      de: 'Miso-Tahini-Doubanjiang-Tare / Dashi / Hafermilch',
      en: 'Miso, tahini and doubanjiang tare / dashi / oat milk',
      ja: '味噌・タヒニ・豆板醤ダレ / 出汁 / オーツミルク',
    },
    with: {
      de: 'Shiitake, Baummorcheln, Tofu, Frühlingszwiebel, Schnittlauchöl, saisonales Gemüse, Nori',
      en: 'Shiitake, wood ear mushrooms, tofu, spring onion, chive oil, seasonal vegetables, nori',
      ja: '椎茸、きくらげ、豆腐、青ねぎ、チャイブオイル、季節の野菜、海苔',
    },
  },
  {
    name: 'Yasai Ramen',
    nameJa: '野菜ラーメン',
    price: 15.9,
    tags: ['vegan'],
    base: {
      de: 'Dashi / Kombu-Shiitake-Brühe / Miso-Tare',
      en: 'Dashi / kombu and shiitake broth / miso tare',
      ja: '出汁 / 昆布と椎茸のスープ / 味噌ダレ',
    },
    with: {
      de: 'Tofu, Shiitake, Daikon, Frühlingszwiebel, Sojasprossen, Sesamöl, Nori, saisonales Gemüse',
      en: 'Tofu, shiitake, daikon, spring onion, bean sprouts, sesame oil, nori, seasonal vegetables',
      ja: '豆腐、椎茸、大根、青ねぎ、もやし、ごま油、海苔、季節の野菜',
    },
  },
];

export const sides: Item[] = [
  {
    name: 'Edamame',
    nameJa: '枝豆',
    price: 6,
    tags: ['vegan'],
    with: { de: 'Grüne Sojabohnen mit Meersalz', en: 'Green soybeans with sea salt', ja: '海塩をふって' },
  },
  {
    name: 'Edamame mit schwarzem Knoblauch',
    nameEn: 'Edamame with black garlic',
    nameJa: '黒にんにく枝豆',
    price: 7.2, // CHECK
    tags: ['vegan'],
    with: { de: 'Mit schwarzem Knoblauch und Chiliöl', en: 'With black garlic and chilli oil', ja: '黒にんにくとラー油で' },
  },
  {
    name: 'Pirikara Gurken',
    nameEn: 'Pirikara cucumbers',
    nameJa: 'ピリ辛きゅうり',
    price: 6.2, // CHECK
    tags: ['vegan'],
    with: {
      de: 'Eingelegte Gurkenstücke, knackig und pikant',
      en: 'Pickled cucumber pieces, crunchy and spicy',
      ja: 'きゅうりの漬物。歯ごたえよく、ピリ辛',
    },
  },
  {
    name: 'Tori Karaage',
    nameJa: '鶏の唐揚げ',
    price: 9.2, // CHECK
    with: {
      de: 'Knusprig gebackene ausgelöste Hühnerkeule, Kewpie-Mayo, Zitrone',
      en: 'Crisp fried boneless chicken thigh, Kewpie mayo, lemon',
      ja: '骨なし鶏もも肉をカリッと揚げて。キユーピーマヨネーズ、レモン',
    },
  },
  {
    name: 'Korean Fried Chicken',
    nameJa: '韓国風フライドチキン',
    price: 10.5,
    tags: ['scharf'],
    with: {
      de: 'Knusprig gebackene ausgelöste Hühnerkeule, Gochujang, Salzzitrone, Daikonpüree',
      en: 'Crisp fried boneless chicken thigh, gochujang, preserved lemon, daikon purée',
      ja: '骨なし鶏もも肉をカリッと揚げて。コチュジャン、塩レモン、大根ピュレ',
    },
  },
  {
    name: 'Mama’s Gyoza',
    nameJa: 'ママの餃子',
    price: 9.2, // CHECK
    with: {
      de: '5 Stück, handgemacht und knusprig gebraten. Schweinefleisch, Kraut, Schnittlauch, Frühlingszwiebel, Shiitake',
      en: '5 pieces, handmade and pan-fried crisp. Pork, cabbage, chives, spring onion, shiitake',
      ja: '5個。手作りで、パリッと焼き上げ。豚肉、キャベツ、チャイブ、青ねぎ、椎茸',
    },
  },
  {
    name: 'Mama’s Yasai Gyoza',
    nameJa: 'ママの野菜餃子',
    price: 8.8, // CHECK
    tags: ['vegan'],
    with: {
      de: '5 Stück, handgemacht und knusprig gebraten. Tofu, Kraut, Schnittlauch, Frühlingszwiebel, Shiitake',
      en: '5 pieces, handmade and pan-fried crisp. Tofu, cabbage, chives, spring onion, shiitake',
      ja: '5個。手作りで、パリッと焼き上げ。豆腐、キャベツ、チャイブ、青ねぎ、椎茸',
    },
  },
];

export const desserts: Item[] = [
  { name: 'Matcha Mochi Eis', nameEn: 'Matcha mochi ice cream', nameJa: '抹茶もちアイス', price: 5.8 }, // CHECK
];

export const toppings: Item[] = [
  { name: 'Nori', nameJa: '海苔', price: 1, tags: ['vegan'], with: { de: 'Hauchdünn geröstete Algenblätter', en: 'Paper-thin roasted seaweed', ja: '薄く焼いた海苔' } },
  { name: 'Sojasprossen', nameEn: 'Bean sprouts', nameJa: 'もやし', price: 1.9, tags: ['vegan'], with: { de: 'Knackig frisch', en: 'Fresh and crunchy', ja: 'シャキシャキ' } },
  { name: 'Menma', nameJa: 'メンマ', price: 2.7, tags: ['vegan'], with: { de: 'Würzig marinierter Bambus', en: 'Marinated bamboo', ja: '味付けたけのこ' } },
  { name: 'Baummorcheln', nameEn: 'Wood ear mushrooms', nameJa: 'キクラゲ', price: 2.5, tags: ['vegan'], with: { de: 'Eingelegt', en: 'Pickled', ja: '味付け' } },
  { name: 'Buttermais', nameEn: 'Butter corn', nameJa: 'バターコーン', price: 2.5, with: { de: 'In Butter gegarter Mais', en: 'Corn cooked in butter', ja: 'バターで炒めたコーン' } },
  { name: 'Shiitake', nameJa: 'しいたけ', price: 2.7, tags: ['vegan'], with: { de: 'Herzhaft aromatische Pilze', en: 'Savoury mushrooms', ja: '香り豊かなきのこ' } },
  { name: 'Age Tofu', nameJa: '揚げ豆腐', price: 3.2, tags: ['vegan'], with: { de: 'Knuspriger Tofu, 2 Stück', en: 'Crisp tofu, 2 pieces', ja: 'カリッと揚げた豆腐 2個' } },
  { name: 'Ni-Tamago', nameJa: '煮玉子', price: 2.7, with: { de: 'Mariniertes weiches Ei', en: 'Marinated soft egg', ja: '味付け半熟玉子' } },
  { name: 'Hühnerfaschiertes', nameEn: 'Minced chicken', nameJa: '鶏そぼろ', price: 3.9, with: { de: 'Mit Tobanjan', en: 'With tobanjan', ja: '豆板醤入り' } },
  { name: 'Chashu-Pork', nameEn: 'Chashu pork', nameJa: 'チャーシュー', price: 3.9, with: { de: 'Zart geschmorter Schweineschopf, 2 Stück', en: 'Braised pork neck, 2 slices', ja: 'やわらかく煮込んだ豚肩ロース 2枚' } },
  { name: 'Kaedama', nameJa: '替え玉', price: 3.7, tags: ['vegan'], with: { de: 'Extra Portion Nudeln', en: 'Extra portion of noodles', ja: '麺のおかわり' } },
  { name: 'Brühe', nameEn: 'Broth', nameJa: 'スープ', price: 5, with: { de: 'Eine Portion, mit Tare gewürzt', en: 'One portion, seasoned with tare', ja: 'タレで味付けしたスープ 1杯分' } },
  { name: 'Mayu-Öl', nameEn: 'Mayu oil', nameJa: 'マー油', price: 1.5, with: { de: 'Erdig-nussiges Öl aus verbranntem Knoblauch', en: 'Earthy, nutty burnt garlic oil', ja: '焦がしにんにくの香ばしい油' } },
  { name: 'Saisonales Gemüse', nameEn: 'Seasonal vegetables', nameJa: '季節の野菜', price: 2.7, tags: ['vegan'], with: { de: 'Wechselndes Topping, einfach nachfragen', en: 'Changes with the season, just ask', ja: '日替わり。スタッフにお尋ねください' } },
];

/**
 * Drinks, from an older photo of the drinks card (the wine vintages date it to
 * around 2019). Names only, no prices, because those have certainly changed.
 * UNCONFIRMED: check the selection against the current card.
 */
export const drinks: { label: Text; items: Text }[] = [
  {
    label: { de: 'Hausgemacht', en: 'Made in house', ja: '自家製' },
    items: {
      de: 'Yuzu-Limonade, Ginger-Ale-Limonade',
      en: 'Yuzu lemonade, ginger ale lemonade',
      ja: 'ゆずレモネード、ジンジャーエールレモネード',
    },
  },
  {
    label: { de: 'Ohne Alkohol', en: 'Soft drinks', ja: 'ソフトドリンク' },
    items: {
      de: 'Calpis Soda, Calpis Wasser, Apfelsaft naturtrüb, Soda Zitrone, Tirola Kola, Orangina, Mineralwasser',
      en: 'Calpis soda, Calpis water, cloudy apple juice, soda with lemon, Tirola Kola, Orangina, mineral water',
      ja: 'カルピスソーダ、カルピスウォーター、にごりりんごジュース、レモンソーダ、ティローラ・コーラ、オランジーナ、ミネラルウォーター',
    },
  },
  {
    label: { de: 'Tee', en: 'Tea', ja: 'お茶' },
    items: {
      de: 'Bio Genmaicha, Bio Sencha, Bio Houjicha, Oolong, grüner Jasmintee, Pu Erh, Ingwer, Pfefferminze',
      en: 'Organic genmaicha, organic sencha, organic houjicha, oolong, green jasmine, pu erh, ginger, peppermint',
      ja: '有機玄米茶、有機煎茶、有機ほうじ茶、烏龍茶、ジャスミン茶、プーアル茶、ジンジャーティー、ミントティー',
    },
  },
  {
    label: { de: 'Bier und Wein', en: 'Beer and wine', ja: 'ビール・ワイン' },
    items: {
      de: 'Brew Age Malzstraße aus Wien, Weißer Spritzer, Weine aus Österreich',
      en: 'Brew Age Malzstraße from Vienna, white wine spritzer, Austrian wines',
      ja: 'ウィーンのクラフトビール「Brew Age Malzstraße」、白ワインのソーダ割り、オーストリアワイン',
    },
  },
  {
    label: { de: 'Kaffee', en: 'Coffee', ja: 'コーヒー' },
    items: {
      de: 'Espresso, Verlängerter, Cappuccino, Melange',
      en: 'Espresso, Verlängerter (a long black), cappuccino, Melange (Viennese milky coffee)',
      ja: 'エスプレッソ、フェアレンゲルター（ウィーン風アメリカーノ）、カプチーノ、メランジェ（ウィーン風カフェラテ）',
    },
  },
];
