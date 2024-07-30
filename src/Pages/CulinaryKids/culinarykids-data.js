const culinaryKidsData = [
  {
    id: 1,
    imgEn: 'pizza-en.jpg',
    imgHe: 'pizza-he.jpg',
    imgAr: 'pizza-ar.jpg',
    recipeTitleEn: 'Mini Pita Pizzas',
    recipeTitleHe: 'מיני פיצה',
    recipeTitleAr: 'ميني بيتزا',
    ingredientsEn: [
      'Mini pita breads or English muffins',
      'Tomato sauce or pizza sauce',
      'Shredded mozzarella cheese',
      'Pepperoni slices or other toppings (vegetables, ham, pineapple, etc.)',
      'Olive oil',
      'Dried oregano or Italian seasoning',
    ],
    ingredientsHe: [
      'פיתות מיני או מאפינס אנגלי',
      'רוטב עגבניות או רוטב פיצה',
      'גבינת מוצרלה מגוררת',
      "פרוסות פפרוני או תוספות אחרות (ירקות, חזיר, אננס וכו')",
      'שמן זית',
      'אורגנו מיובש או תבלין איטלקי',
    ],
    ingredientsAr: [
      'خبز بيتا صغير أو مافن إنجليزي',
      'صلصة طماطم أو صلصة بيتزا',
      'جبنة موزاريلا مبشورة',
      'شرائح ببروني أو إضافات أخرى (خضروات، لحم خنزير، أناناس، إلخ)',
      'زيت زيتون',
      'أوريجانو مجفف أو توابل إيطالية',
    ],
    preparationMethodEn: [
      'Preheat oven to 375°F (190°C).',
      'Place pitas/muffins on a baking sheet, brush with olive oil.',
      'Spread tomato sauce on each pita/muffin.',
      'Add cheese and toppings.',
      'Sprinkle oregano or Italian seasoning.',
      'Bake for 10-15 minutes until cheese is melted.',
      'Cool and serve.',
    ],
    preparationMethodHe: [
      'חממו תנור ל-375°F (190°C).',
      'הניחו את הפיתות/מאפינס על תבנית אפייה ומרחו בשמן זית.',
      'מרחו רוטב עגבניות על כל פיתה/מאפינס.',
      'הוסיפו גבינה ותוספות.',
      'פזרו אורגנו או תבלין איטלקי.',
      'אפו במשך 10-15 דקות עד שהגבינה נמסה.',
      'תנו להתקרר והגישו.',
    ],
    preparationMethodAr: [
      'سخن الفرن إلى 375°F (190°C).',
      'ضع خبز البيتا/المافن على صينية الخبز وادهنها بزيت الزيتون.',
      'ضع صلصة الطماطم على كل خبز بيتا/مافن.',
      'أضف الجبنة والإضافات.',
      'رش الأوريجانو أو التوابل الإيطالية.',
      'اخبز لمدة 10-15 دقيقة حتى تذوب الجبنة.',
      'اتركها لتبرد ثم قدمها.',
    ],
  },
  {
    id: 2,
    imgEn: 'sushi-en.jpg',
    imgHe: 'sushi-he.jpg',
    imgAr: 'sushi-ar.jpg',
    recipeTitleEn: 'Kids Sushi',
    recipeTitleHe: 'סושי לילדים',
    recipeTitleAr: 'سوشي للأطفال',
    ingredientsEn: [
      'Sushi rice (2 cups)',
      'Rice vinegar (1/4 cup)',
      'Nori sheets (seaweed)',
      'Cooked or raw fish (salmon, tuna)',
      'Cucumber, julienned',
      'Carrot, julienned',
      'Avocado, sliced',
      'Soy sauce',
      'Wasabi (optional)',
    ],
    ingredientsHe: [
      'אורז סושי (2 כוסות)',
      'חומץ אורז (1/4 כוס)',
      'דפי נורי (אצות ים)',
      'דג מבושל או נא (סלמון, טונה)',
      'מלפפון, חתוך לרצועות דקות',
      'גזר, חתוך לרצועות דקות',
      'אבוקדו, פרוס',
      'רוטב סויה',
      'וסאבי (אופציונלי)',
    ],
    ingredientsAr: [
      'أرز السوشي (2 أكواب)',
      'خل الأرز (1/4 كوب)',
      'أوراق النوري (الأعشاب البحرية)',
      'سمك مطبوخ أو نيء (سلمون، تونة)',
      'خيار مقطع إلى شرائح رفيعة',
      'جزر مقطع إلى شرائح رفيعة',
      'أفوكادو مقطع',
      'صلصة الصويا',
      'وسابي (اختياري)',
    ],
    preparationMethodEn: [
      'Cook sushi rice according to package instructions. Mix with rice vinegar.',
      'Lay out a nori sheet on a bamboo mat.',
      'Spread a thin layer of rice on the nori, leaving a border.',
      'Place fish, cucumber, carrot, and avocado in a line.',
      'Roll tightly with the bamboo mat.',
      'Slice into bite-sized pieces.',
      'Serve with soy sauce and wasabi.',
    ],
    preparationMethodHe: [
      'בשלו את אורז הסושי לפי הוראות האריזה. ערבבו עם חומץ האורז.',
      'הניחו דף נורי על מחצלת במבוק.',
      'מרחו שכבה דקה של אורז על הדף, והשאירו שוליים.',
      'הניחו דג, מלפפון, גזר ואבוקדו בשורה.',
      'גלגלו בעדינות עם המחצלת.',
      'חתכו לחתיכות בגודל נגיסה.',
      'הגישו עם רוטב סויה ווסאבי.',
    ],
    preparationMethodAr: [
      'اطبخ أرز السوشي حسب التعليمات الموجودة على العبوة. اخلطه مع خل الأرز.',
      'ضع ورقة النوري على حصيرة الخيزران.',
      'انشر طبقة رقيقة من الأرز على النوري، مع ترك حواف.',
      'ضع السمك، الخيار، الجزر، والأفوكادو في خط.',
      'لف بإحكام باستخدام حصيرة الخيزران.',
      'قطع إلى قطع صغيرة.',
      'قدم مع صلصة الصويا والوسابي.',
    ],
  },
  {
    id: 3,
    imgEn: 'pad-thai-en.jpg',
    imgHe: 'pad-thai-he.jpg',
    imgAr: 'pad-thai-ar.jpg',
    recipeTitleEn: 'Kids Pad Thai',
    recipeTitleHe: 'פאד תאי לילדים',
    recipeTitleAr: 'باد تاي للأطفال',
    ingredientsEn: [
      'Rice noodles (200g)',
      'Cooked chicken or shrimp (200g)',
      '2 eggs',
      '1 cup bean sprouts',
      '1/2 cup chopped green onions',
      '1/4 cup crushed peanuts',
      '2 tablespoons soy sauce',
      '1 tablespoon lime juice',
      '1 tablespoon brown sugar',
      '2 tablespoons cooking oil',
    ],
    ingredientsHe: [
      'אטריות אורז (200 גרם)',
      'עוף מבושל או שרימפס (200 גרם)',
      '2 ביצים',
      '1 כוס נבטים',
      '1/2 כוס בצל ירוק קצוץ',
      '1/4 כוס בוטנים כתושים',
      '2 כפות רוטב סויה',
      '1 כף מיץ ליים',
      '1 כף סוכר חום',
      '2 כפות שמן בישול',
    ],
    ingredientsAr: [
      'نودلز الأرز (200 جم)',
      'دجاج مطبوخ أو جمبري (200 جم)',
      '2 بيض',
      '1 كوب براعم الفاصوليا',
      '1/2 كوب بصل أخضر مفروم',
      '1/4 كوب فول سوداني مجروش',
      '2 ملاعق كبيرة صلصة الصويا',
      '1 ملعقة كبيرة عصير الليمون',
      '1 ملعقة كبيرة سكر بني',
      '2 ملاعق كبيرة زيت للطبخ',
    ],
    preparationMethodEn: [
      'Cook rice noodles according to package instructions. Drain and set aside.',
      'In a bowl, mix soy sauce, lime juice, and brown sugar.',
      'Heat oil in a pan, scramble eggs.',
      'Add chicken/shrimp, stir for 2 minutes.',
      'Add noodles and sauce mixture, stir to combine.',
      'Toss in bean sprouts and green onions, cook for 1 minute.',
      'Top with crushed peanuts and serve.',
    ],
    preparationMethodHe: [
      'בשלו את אטריות האורז לפי הוראות האריזה. סננו והניחו בצד.',
      'בקערה, ערבבו רוטב סויה, מיץ ליים וסוכר חום.',
      'חממו שמן במחבת, טרפו ביצים.',
      'הוסיפו עוף/שרימפס, ערבבו למשך 2 דקות.',
      'הוסיפו אטריות ותערובת הרוטב, ערבבו לשילוב.',
      'הוסיפו נבטים ובצל ירוק, בשלו למשך 1 דקה.',
      'פזרו בוטנים כתושים והגישו.',
    ],
    preparationMethodAr: [
      'اطبخ نودلز الأرز حسب التعليمات الموجودة على العبوة. صفها وضعها جانباً.',
      'في وعاء، اخلط صلصة الصويا، عصير الليمون، والسكر البني.',
      'سخن الزيت في مقلاة، اخفق البيض.',
      'أضف الدجاج/الجمبري، حرك لمدة دقيقتين.',
      'أضف النودلز وخليط الصلصة، حرك لتتجانس.',
      'أضف براعم الفاصوليا والبصل الأخضر، اطبخ لمدة دقيقة واحدة.',
      'رش الفول السوداني المجروش وقدمه.',
    ],
  },
  {
    id: 4,
    imgEn: 'shakshouka-en.jpg',
    imgHe: 'shakshouka-he.jpg',
    imgAr: 'shakshouka-ar.jpg',
    recipeTitleEn: 'Kids Shakshouka',
    recipeTitleHe: 'שקשוקה לילדים',
    recipeTitleAr: 'شكشوكة للأطفال',
    ingredientsEn: [
      '2 tablespoons olive oil',
      '1 onion, chopped',
      '1 red bell pepper, chopped',
      '3 cloves garlic, minced',
      '1 can (400g) diced tomatoes',
      '1 teaspoon paprika',
      '1 teaspoon cumin',
      'Salt and pepper to taste',
      '4 eggs',
      'Chopped parsley for garnish',
    ],
    ingredientsHe: [
      '2 כפות שמן זית',
      '1 בצל, קצוץ',
      '1 פלפל אדום, קצוץ',
      '3 שיני שום, כתושות',
      '1 קופסה (400 גרם) עגבניות קצוצות',
      '1 כפית פפריקה',
      '1 כפית כמון',
      'מלח ופלפל לפי הטעם',
      '4 ביצים',
      'קצח קצוץ לקישוט',
    ],
    ingredientsAr: [
      '2 ملاعق كبيرة زيت زيتون',
      '1 بصلة مفرومة',
      '1 فلفل أحمر مفروم',
      '3 فصوص ثوم مفرومة',
      '1 علبة (400 جم) طماطم مفرومة',
      '1 ملعقة صغيرة بابريكا',
      '1 ملعقة صغيرة كمون',
      'ملح وفلفل حسب الذوق',
      '4 بيضات',
      'بقدونس مفروم للتزيين',
    ],
    preparationMethodEn: [
      'Heat oil in a pan, sauté onion and bell pepper until soft.',
      'Add garlic, cook for 1 minute.',
      'Stir in tomatoes, paprika, cumin, salt, and pepper. Simmer for 10 minutes.',
      'Make 4 wells in the sauce, crack an egg into each.',
      'Cover and cook until eggs are set.',
      'Garnish with parsley and serve.',
    ],
    preparationMethodHe: [
      'חממים שמן במחבת, מטגנים את הבצל והפלפל האדום עד שהם רכים.',
      'הוסיפו שום, בשלו למש minute אחת.',
      'ערבבו עגבניות, פפריקה, כמון, מלח ופלפל. בשלו במשך 10 דקות.',
      'עשו 4 שקעים ברוטב, שברו ביצה לתוך כל שקע.',
      'כסה ובשל עד שהביצים מתייצבות.',
      'קשטו בקצח והגישו.',
    ],
    preparationMethodAr: [
      'سخن الزيت في مقلاة، وحمّر البصل والفلفل الأحمر حتى يصبحان طريين.',
      'أضف الثوم، واطبخ لمدة دقيقة واحدة.',
      'أضف الطماطم، البابريكا، الكمون، الملح والفلفل. اتركه على نار هادئة لمدة 10 دقائق.',
      'اصنع 4 تجاويف في الصلصة، اكسر بيضة في كل تجويف.',
      'غطّ المقلاة واطبخ حتى تنضج البيض.',
      'زين بالبقدونس وقدمه.',
    ],
  },
  {
    id: 5,
    imgEn: 'spaghetti-en.jpg',
    imgHe: 'spaghetti-he.jpg',
    imgAr: 'spaghetti-ar.jpg',
    recipeTitleEn: 'Kids Spaghetti Bolognese',
    recipeTitleHe: 'ספרגטי בולונז לילדים',
    recipeTitleAr: 'سباغيتي بولونيز للأطفال',
    ingredientsEn: [
      '250g spaghetti',
      '1 tablespoon olive oil',
      '1 onion, chopped',
      '1 carrot, diced',
      '250g ground beef',
      '1 can (400g) diced tomatoes',
      '2 tablespoons tomato paste',
      '1 teaspoon dried basil',
      '1 teaspoon dried oregano',
      'Salt and pepper to taste',
      'Grated cheese for serving',
    ],
    ingredientsHe: [
      '250 גרם ספגטי',
      '1 כף שמן זית',
      '1 בצל קצוץ',
      '1 גזר קצוץ',
      '250 גרם בשר טחון',
      '1 קופסה (400 גרם) עגבניות קצוצות',
      '2 כפות רסק עגבניות',
      '1 כפית בזיליקום מיובש',
      '1 כפית אורגנו מיובש',
      'מלח ופלפל לפי הטעם',
      'גבינה מגוררת להגשה',
    ],
    ingredientsAr: [
      '250 جم سباغيتي',
      '1 ملعقة كبيرة زيت زيتون',
      '1 بصلة مفرومة',
      '1 جزر مفروم',
      '250 جم لحم مفروم',
      '1 علبة (400 جم) طماطم مفرومة',
      '2 ملعقة كبيرة معجون طماطم',
      '1 ملعقة صغيرة ريحان مجفف',
      '1 ملعقة صغيرة أوريجانو مجفف',
      'ملح وفلفل حسب الذوق',
      'جبنة مبشورة للتقديم',
    ],
    preparationMethodEn: [
      'Cook spaghetti according to package instructions. Drain and set aside.',
      'Heat oil in a pan, sauté onion and carrot until soft.',
      'Add ground beef, cook until browned.',
      'Stir in tomatoes, tomato paste, basil, oregano, salt, and pepper. Simmer for 10 minutes.',
      'Mix sauce with spaghetti.',
      'Top with grated cheese and serve.',
    ],
    preparationMethodHe: [
      'בשלו את הספגטי לפי הוראות האריזה. סננו והניחו בצד.',
      'חממים שמן במחבת, מטגנים את הבצל והגזר עד שהם רכים.',
      'הוסיפו את הבשר הטחון, בשלו עד שהוא מתבשל.',
      'ערבבו את העגבניות, רסק העגבניות, בזיליקום, אורגנו, מלח ופלפל. בשלו במשך 10 דקות.',
      'ערבבו את הרוטב עם הספגטי.',
      'פזרו גבינה מגוררת והגישו.',
    ],
    preparationMethodAr: [
      'اطبخ السباغيتي حسب التعليمات الموجودة على العبوة. صفه وضعه جانباً.',
      'سخن الزيت في مقلاة، واطبخ البصل والجزر حتى يصبحان طريين.',
      'أضف اللحم المفروم واطبخه حتى يتحمر.',
      'أضف الطماطم، معجون الطماطم، الريحان، الأوريجانو، الملح والفلفل. اتركه ينضج لمدة 10 دقائق.',
      'امزج الصلصة مع السباغيتي.',
      'رش الجبنة المبشورة وقدمه.',
    ],
  },
  {
    id: 6,
    imgEn: 'hummus-en.jpg',
    imgHe: 'hummus-he.jpg',
    imgAr: 'hummus-ar.jpg',
    recipeTitleEn: 'Kids Hummus',
    recipeTitleHe: 'חומוס לילדים',
    recipeTitleAr: 'حمص للأطفال',
    ingredientsEn: [
      '1 can (400g) chickpeas, drained',
      '1/4 cup tahini',
      '2 tablespoons olive oil',
      '2 tablespoons lemon juice',
      '1 garlic clove, minced',
      '1/2 teaspoon cumin',
      'Salt to taste',
      'Water (as needed)',
    ],
    ingredientsHe: [
      '1 קופסה (400 גרם) חומוס, מסונן',
      '1/4 כוס טחינה',
      '2 כפות שמן זית',
      '2 כפות מיץ לימון',
      'שן שום אחת, כתושה',
      '1/2 כפית כמון',
      'מלח לפי הטעם',
      'מים (לפי הצורך)',
    ],
    ingredientsAr: [
      '1 علبة (400 جم) حمص، مصفّى',
      '1/4 كوب طحينة',
      '2 ملعقة كبيرة زيت زيتون',
      '2 ملعقة كبيرة عصير ليمون',
      'فص ثوم واحد مفروم',
      '1/2 ملعقة صغيرة كمون',
      'ملح حسب الذوق',
      'ماء (حسب الحاجة)',
    ],
    preparationMethodEn: [
      'Blend chickpeas, tahini, olive oil, lemon juice, garlic, cumin, and salt in a food processor until smooth.',
      'Add water as needed to reach desired consistency.',
      'Serve with pita bread or veggies.',
    ],
    preparationMethodHe: [
      'שימו את החומוס, הטחינה, שמן הזית, מיץ הלימון, השום, הכמון והמלח במעבד מזון ולטחון עד שהתערובת חלקה.',
      'הוסיפו מים לפי הצורך כדי להגיע למרקם הרצוי.',
      'הגישו עם לחם פיתה או ירקות.',
    ],
    preparationMethodAr: [
      'اخلط الحمص، الطحينة، زيت الزيتون، عصير الليمون، الثوم، الكمون والملح في محضر الطعام حتى يصبح ناعماً.',
      'أضف الماء حسب الحاجة للحصول على القوام المطلوب.',
      'قدمه مع خبز البيتا أو الخضروات.',
    ],
  },
  {
    id: 7,
    imgEn: 'schnitzel-en.jpg',
    imgHe: 'schnitzel-he.jpg',
    imgAr: 'schnitzel-ar.jpg',
    recipeTitleEn: 'Kids Schnitzel',
    recipeTitleHe: 'שניצל לילדים',
    recipeTitleAr: 'شنيتزل للأطفال',
    ingredientsEn: [
      '4 chicken breasts, pounded thin',
      '1 cup flour',
      '2 eggs, beaten',
      '1 cup breadcrumbs',
      '1/2 teaspoon paprika',
      'Salt and pepper to taste',
      '1/4 cup vegetable oil',
    ],
    ingredientsHe: [
      '4 חזה עוף, מרודדים דק',
      '1 כוס קמח',
      '2 ביצים, טרופות',
      '1 כוס פירורי לחם',
      '1/2 כפית פפריקה',
      'מלח ופלפל לפי הטעם',
      '1/4 כוס שמן צמחי',
    ],
    ingredientsAr: [
      '4 صدور دجاج، مدقوقة رقيقة',
      '1 كوب دقيق',
      '2 بيض، مخفوق',
      '1 كوب فتات خبز',
      '1/2 ملعقة صغيرة بابريكا',
      'ملح وفلفل حسب الذوق',
      '1/4 كوب زيت نباتي',
    ],
    preparationMethodEn: [
      'Season chicken with salt and pepper.',
      'Dredge each piece in flour, dip in beaten eggs, then coat with breadcrumbs mixed with paprika.',
      'Heat oil in a pan over medium heat.',
      'Cook chicken for 4-5 minutes per side until golden and cooked through.',
      'Drain on paper towels and serve.',
    ],
    preparationMethodHe: [
      'תבלו את העוף במלח ופלפל.',
      'לטבל כל פיסת עוף בקמח, לטבול בביצים הטרופות, ואז לצפות בפירורי לחם מעורבבים עם פפריקה.',
      'חממים שמן במחבת על חום בינוני.',
      'מבשלים את העוף 4-5 דקות מכל צד עד שהוא זהוב ומבושל.',
      'מניחים על נייר סופג ומגישים.',
    ],
    preparationMethodAr: [
      'تبّل الدجاج بالملح والفلفل.',
      'غلف كل قطعة بالدقيق، اغمس في البيض المخفوق، ثم غطّي بفتات الخبز الممزوج بالبابريكا.',
      'سخن الزيت في مقلاة على حرارة متوسطة.',
      'اطبخ الدجاج لمدة 4-5 دقائق لكل جانب حتى يصبح ذهبيًا وينضج.',
      'صفيه على مناشف ورقية وقدم.',
    ],
  },
  {
    id: 8,
    imgEn: 'lasagna-en.jpg',
    imgHe: 'lasagna-he.jpg',
    imgAr: 'lasagna-ar.jpg',
    recipeTitleEn: 'Lasagna with Kids',
    recipeTitleHe: 'לזניה עם ילדים',
    recipeTitleAr: 'لازانيا مع الأطفال',
    ingredientsEn: [
      'Lasagna noodles',
      'Ground beef or turkey',
      'Tomato sauce',
      'Ricotta cheese',
      'Shredded mozzarella cheese',
      'Grated Parmesan cheese',
      'Salt and pepper',
      'Italian seasoning',
    ],
    ingredientsHe: [
      'אטריות לזניה',
      'בשר טחון או תרנגול הודו',
      'רוטב עגבניות',
      'גבינת ריקוטה',
      'גבינת מוצרלה מגוררת',
      'גבינת פרמזן מגוררת',
      'מלח ופלפל',
      'תבלין איטלקי',
    ],
    ingredientsAr: [
      'مكرونة لازانيا',
      'لحم بقري مفروم أو ديك رومي',
      'صلصة طماطم',
      'جبنة ريكوتا',
      'جبنة موزاريلا مبشورة',
      'جبنة بارميزان مبشورة',
      'ملح وفلفل',
      'بهارات إيطالية',
    ],
    preparationMethodEn: [
      'Cook Noodles: Boil lasagna noodles until tender. Drain and set aside.',
      'Cook Meat: Brown ground meat in a pan, drain fat, add tomato sauce, and simmer.',
      'Mix Cheese: In a bowl, mix ricotta with salt, pepper, and Italian seasoning.',
      'Layer: In a baking dish, layer noodles, meat sauce, ricotta mix, and mozzarella. Repeat layers.',
      'Top: Finish with a layer of noodles, meat sauce, and a generous sprinkle of mozzarella and Parmesan.',
      'Bake: Cover with foil, bake at 375°F (190°C) for 25 minutes, uncover, and bake for another 10 minutes until bubbly.',
      'Cool & Serve: Let cool slightly before serving.',
    ],
    preparationMethodHe: [
      'בישול אטריות: הרתיחו את אטריות הלזניה עד שהן רכות. סננו ושימו בצד.',
      'בישול בשר: טגנו את הבשר הטחון במחבת, סננו את השומן, הוסיפו רוטב עגבניות ובשלו קלות.',
      'ערבוב גבינה: בקערה, ערבבו ריקוטה עם מלח, פלפל ותבלין איטלקי.',
      'שכבות: בתבנית אפייה, סדרו שכבות של אטריות, רוטב בשר, תערובת ריקוטה ומוצרלה. חזרו על השכבות.',
      'שכבת עליונה: סיימו עם שכבת אטריות, רוטב בשר ופיזור נדיב של מוצרלה ופרמזן.',
      'אפייה: כסו בנייר כסף, אפו בחום של 190°C (375°F) למשך 25 דקות, הסירו את הנייר ואפו לעוד 10 דקות עד שהכל מבעבע.',
      'צינון והגשה: תנו למאפה להתקרר מעט לפני ההגשה.',
    ],
    preparationMethodAr: [
      'طهي المكرونة: اغلي مكرونة اللازانيا حتى تنضج. صفها واتركها جانبًا.',
      'طهي اللحم: اقلي اللحم المفروم في مقلاة، صف الدهون، أضف صلصة الطماطم واتركه ينضج.',
      'خلط الجبن: في وعاء، اخلط الريكوتا مع الملح والفلفل والبهارات الإيطالية.',
      'الطبقات: في صينية خبز، ضع طبقات من المكرونة، صلصة اللحم، خليط الريكوتا والموزاريلا. كرر الطبقات.',
      'الطبقة العلوية: أنهِ بطبقة من المكرونة، صلصة اللحم ورش جبنة الموزاريلا والبارميزان بسخاء.',
      'الخبز: غطِ بورق الألمنيوم، اخبز على 190°C (375°F) لمدة 25 دقيقة، اكشف الغطاء واخبز لمدة 10 دقائق أخرى حتى يذوب الجبن.',
      'التبريد والتقديم: اتركها لتبرد قليلاً قبل التقديم.',
    ],
  },
  {
    id: 9,
    imgEn: 'hamburger-en.jpg',
    imgHe: 'hamburger-he.jpg',
    imgAr: 'hamburger-ar.jpg',
    recipeTitleEn: 'Hamburger with Kids',
    recipeTitleHe: 'המבורגר עם ילדים',
    recipeTitleAr: 'همبرغر مع الأطفال',
    ingredientsEn: [
      'Ground beef',
      'Salt and pepper',
      'Hamburger buns',
      'Cheese slices (optional)',
      'Lettuce, tomato, pickles, and condiments (ketchup, mustard, etc.)',
    ],
    ingredientsHe: [
      'בשר בקר טחון',
      'מלח ופלפל',
      'לחמניות המבורגר',
      'פרוסות גבינה (אופציונלי)',
      '(חסה, עגבנייה, חמוצים, ורטבים (קטשופ, חרדל וכו',
    ],
    ingredientsAr: [
      'لحم بقري مفروم',
      'ملح وفلفل',
      'خبز همبرغر',
      'شرائح جبنة (اختياري)',
      'خس، طماطم، مخللات، وبهارات (كاتشب، خردل، إلخ)',
    ],
    preparationMethodEn: [
      'Mix: In a bowl, mix ground beef with a pinch of salt and pepper.',
      'Shape: Form beef mixture into patties.',
      'Cook: Grill or pan-fry patties on medium heat until fully cooked (about 4-5 minutes per side).',
      'Assemble: Place cooked patties on buns and add cheese, lettuce, tomato, pickles, and condiments as desired.',
      'Serve: Enjoy your homemade hamburgers!',
    ],
    preparationMethodHe: [
      'ערבוב: בקערה, ערבבו את הבשר הטחון עם קמצוץ מלח ופלפל.',
      'עיצוב: עצבו את התערובת לקציצות.',
      'בישול: גרילו או טגנו את הקציצות על חום בינוני עד שהן מבושלות לגמרי (בערך 4-5 דקות לכל צד).',
      'הרכבה: הניחו את הקציצות המבושלות על הלחמניות והוסיפו גבינה, חסה, עגבנייה, חמוצים ורטבים כרצונכם.',
      'הגשה: תהנו מהמבורגרים הביתיים שלכם!',
    ],
    preparationMethodAr: [
      'الخلط: في وعاء، اخلط اللحم المفروم مع رشة ملح وفلفل.',
      'التشكيل: شكل خليط اللحم إلى قطع.',
      'الطهي: اشوي أو اقلي القطع على نار متوسطة حتى تنضج تمامًا (حوالي 4-5 دقائق لكل جانب).',
      'التجميع: ضع القطع المطهوة على الخبز وأضف الجبنة، الخس، الطماطم، المخللات، والبهارات حسب الرغبة.',
      'التقديم: استمتع بالهمبرغر المنزلي الخاص بك!',
    ],
  },

  {
    id: 10,
    imgEn: 'vegetable-stir-fry-en.jpg',
    imgHe: 'vegetable-stir-fry-he.jpg',
    imgAr: 'vegetable-stir-fry-ar.jpg',
    recipeTitleEn: 'Vegetable Stir-Fry with Kids',
    recipeTitleHe: 'ירקות מוקפצים עם ילדים',
    recipeTitleAr: 'خضروات مقليّة مع الأطفال',
    ingredientsEn: [
      'Mixed vegetables (carrots, bell peppers, broccoli, snap peas, etc.)',
      'Olive oil',
      'Soy sauce',
      'Garlic (minced)',
      'Cooked rice or noodles',
    ],
    ingredientsHe: [
      "ירקות מעורבים (גזר, פלפלים, ברוקולי, אפונה שברח וכו'",
      'שמן זית',
      'רוטב סויה',
      'שום (כתוש)',
      'אורז מבושל או אטריות',
    ],
    ingredientsAr: [
      'خضروات متنوعة (جزر، فلفل حلو، بروكلي، بازلاء، إلخ)',
      'زيت زيتون',
      'صلصة الصويا',
      'ثوم (مفروم)',
      'أرز مطبوخ أو نودلز',
    ],
    preparationMethodEn: [
      'Prep: Wash and chop vegetables into bite-sized pieces.',
      'Cook: Heat olive oil in a large pan or wok. Add garlic and stir-fry for 1 minute.',
      'Stir-Fry: Add vegetables to the pan, stir-fry for 5-7 minutes until tender.',
      'Season: Add soy sauce and stir well.',
      'Serve: Serve over cooked rice or noodles and enjoy your veggie meal!',
    ],
    preparationMethodHe: [
      'הכנה: רחצו וחתכו את הירקות לחתיכות בגודל ביס.',
      'בישול: חממים שמן זית במחבת גדולה או ווק. הוסיפו שום וטגנו במשך דקה.',
      'טיגון: הוסיפו את הירקות למחבת, טגנו במשך 5-7 דקות עד ריכוך.',
      'תיבול: הוסיפו רוטב סויה וערבבו היטב.',
      'הגשה: הגישו מעל אורז מבושל או אטריות ותיהנו מהארוחה הירקות שלכם!',
    ],
    preparationMethodAr: [
      'التحضير: اغسل وقطع الخضروات إلى قطع صغيرة.',
      'الطهي: سخن زيت الزيتون في مقلاة كبيرة أو ووك. أضف الثوم وقلّب لمدة دقيقة.',
      'التحمير: أضف الخضروات إلى المقلاة، وقلّب لمدة 5-7 دقائق حتى تنضج.',
      'التتبيل: أضف صلصة الصويا وقلّب جيدًا.',
      'التقديم: قدمه فوق الأرز المطبوخ أو النودلز واستمتع بوجبتك الخضروات!',
    ],
  },
  {
    id: 11,
    imgEn: 'kid-salad-en.jpg',
    imgHe: 'kid-salad-he.jpg',
    imgAr: 'kid-salad-ar.jpg',
    recipeTitleEn: 'Kid-Friendly Salad',
    recipeTitleHe: 'סלט אהוב',
    recipeTitleAr: 'سلطة محببة للأطفال',
    ingredientsEn: [
      'Cherry tomatoes',
      'Cucumber',
      'Carrots',
      'Sweet corn (canned or cooked)',
      'Shredded cheese',
      'Ranch dressing or favorite dressing',
    ],
    ingredientsHe: [
      'עגבניות שרי',
      'מלפפון',
      'גזר',
      'תירס מתוק (מועשר או מבושל)',
      'גבינה מגוררת',
      "רוטב ראנצ' או רוטב מועדף",
    ],
    ingredientsAr: [
      'طماطم شيري',
      'خيار',
      'جزر',
      'ذرة حلوة (معلبة أو مطبوخة)',
      'جبنة مبشورة',
      'صلصة رانش أو الصلصة المفضلة',
    ],
    preparationMethodEn: [
      'Prep: Wash and chop vegetables into bite-sized pieces.',
      'Mix: Combine all vegetables and sweet corn in a bowl.',
      'Add Cheese: Sprinkle shredded cheese on top.',
      'Dress: Add ranch dressing or preferred dressing.',
      'Serve: Toss and serve. Enjoy your kid-friendly salad!',
    ],
    preparationMethodHe: [
      'הכנה: רחצו וחתכו את הירקות לחתיכות בגודל ביס.',
      'ערבוב: שלבו את כל הירקות ואת התירס המתוק בקערה.',
      'הוספת גבינה: פזרו גבינה מגוררת מעל.',
      "תיבול: הוסיפו רוטב ראנצ' או רוטב מועדף.",
      'הגשה: ערבבו והגישו. תהנו מהסלט שמאוד אהוב על ילדים!',
    ],
    preparationMethodAr: [
      'التحضير: اغسل وقطع الخضروات إلى قطع صغيرة.',
      'الخلط: امزج جميع الخضروات والذرة الحلوة في وعاء.',
      'إضافة الجبنة: رش الجبنة المبشورة على الوجه.',
      'التتبيل: أضف صلصة الرانش أو الصلصة المفضلة.',
      'التقديم: اخلط وقدّم. استمتع بسلطة الأطفال المحببة!',
    ],
  },
  {
    id: 12,
    imgEn: 'stuffed-peppers-en.jpg',
    imgHe: 'stuffed-peppers-he.jpg',
    imgAr: 'stuffed-peppers-ar.jpg',
    recipeTitleEn: 'Stuffed Bell Peppers',
    recipeTitleHe: 'פלפלים ממולאים',
    recipeTitleAr: 'فلفل محشي',
    ingredientsEn: [
      'Bell peppers (tops cut off and seeds removed)',
      'Cooked rice',
      'Ground beef or turkey',
      'Tomato sauce',
      'Shredded cheese',
      'Salt and pepper',
    ],
    ingredientsHe: [
      'פפרונים (הקצוות חתוכים והגרעינים הוסרו)',
      'אורז מבושל',
      'בשר טחון או תרנגול הודו',
      'רוטב עגבניות',
      'גבינה מגוררת',
      'מלח ופלפל',
    ],
    ingredientsAr: [
      'فلفل حلو (مقطوع من الأعلى وبدون بذور)',
      'أرز مطبوخ',
      'لحم مفروم أو ديك رومي',
      'صلصة طماطم',
      'جبنة مبشورة',
      'ملح وفلفل',
    ],
    preparationMethodEn: [
      'Cook: Brown the ground meat in a pan, season with salt and pepper.',
      'Mix: Combine cooked rice, meat, and tomato sauce.',
      'Stuff: Fill bell peppers with the mixture.',
      'Top: Sprinkle shredded cheese on top.',
      'Bake: Bake at 375°F (190°C) for 25-30 minutes until peppers are tender and cheese is melted.',
      'Serve: Enjoy your stuffed peppers!',
    ],
    preparationMethodHe: [
      'בישול: טגנו את הבשר הטחון במחבת, תבלו במלח ופלפל.',
      'ערבוב: שלבו את האורז המבושל, הבשר ורוטב העגבניות.',
      'מילוי: מלאו את הפפרונים בתערובת.',
      'הוספת גבינה: פזרו גבינה מגוררת מעל.',
      'אפייה: אפו ב-375°F (190°C) במשך 25-30 דקות עד שהפפרונים רכים והגבינה נמסה.',
      'הגשה: תהנו מהפפרוני הממולאים שלכם!',
    ],
    preparationMethodAr: [
      'الطهي: اقلي اللحم المفروم في مقلاة، وتبّله بالملح والفلفل.',
      'الخلط: اخلط الأرز المطبوخ مع اللحم وصلصة الطماطم.',
      'الحشو: املأ الفلفل المحشي بالخليط.',
      'إضافة الجبنة: رش الجبنة المبشورة على الوجه.',
      'الخبز: اخبز في فرن درجة حرارته 375°F (190°C) لمدة 25-30 دقيقة حتى يطرى الفلفل وتذوب الجبنة.',
      'التقديم: استمتع بالفلفل المحشي!',
    ],
  },
  {
    id: 13,
    ImgEn: 'churros-en.jpg',
    imgHe: 'churros-he.jpg',
    imgAr: 'churros-ar.jpg',
    recipeTitleEn: 'Churros',
    recipeTitleHe: "צ'ורוס",
    recipeTitleAr: 'تشوروس',
    ingredientsEn: [
      '1 cup water',
      '2 tbsp sugar',
      '1/2 cup butter',
      '1 cup flour',
      '2 eggs',
      '1/2 cup sugar (for coating)',
      '1 tsp cinnamon (for coating)',
      'Oil for frying',
    ],
    ingredientsHe: [
      '1 כוס מים',
      '2 כפות סוכר',
      '1/2 כוס חמאה',
      '1 כוס קמח',
      '2 ביצים',
      '1/2 כוס סוכר (לציפוי)',
      '1 כפית קינמון (לציפוי)',
      'שמן לטיגון',
    ],
    ingredientsAr: [
      '1 كوب ماء',
      '2 ملعقة كبيرة سكر',
      '1/2 كوب زبدة',
      '1 كوب دقيق',
      '2 بيض',
      '1/2 كوب سكر (للتغطية)',
      '1 ملعقة صغيرة قرفة (للتغطية)',
      'زيت للقلي',
    ],
    preparationMethodEn: [
      'Boil: In a pot, bring water, 2 tbsp sugar, and butter to a boil.',
      'Mix: Stir in flour until dough forms.',
      'Cool: Let the dough cool slightly, then mix in eggs one at a time.',
      'Pipe: Pipe dough into hot oil using a piping bag.',
      'Fry: Fry until golden brown, then drain on paper towels.',
      'Coat: Mix 1/2 cup sugar with cinnamon and roll churros in the mixture.',
      'Serve: Enjoy your homemade churros!',
    ],
    preparationMethodHe: [
      'רתיחה: הביאו מים, 2 כפות סוכר וחמאה לרתיחה בסיר.',
      'ערבוב: הוסיפו קמח וערבבו עד שהעיסה מתגבשת.',
      'קירור: תנו לעיסה להתקרר מעט, ואז ערבבו ביצה אחר ביצה.',
      'צנרת: שימו את העיסה בשקית זילוף וטפטפו לתוך שמן חם.',
      "טיגון: טגנו עד שהצ'ורוס מזהיב, ואז סננו על נייר סופג.",
      "ציפוי: ערבבו 1/2 כוס סוכר עם קינמון וגלגלו את הצ'ורוס בתערובת.",
      "הגשה: תהנו מהצ'ורוס הביתי שלכם!",
    ],
    preparationMethodAr: [
      'غلي: في قدر، اغلي الماء، 2 ملعقة كبيرة سكر، والزبدة.',
      'خلط: أضف الدقيق وقلّب حتى تتكون العجينة.',
      'تبريد: اترك العجينة تبرد قليلاً، ثم اخلط البيض واحدة تلو الأخرى.',
      'تشكيل: استخدم كيس التزيين لوضع العجينة في الزيت الساخن.',
      'قلي: اقلي حتى تصبح ذهبية اللون، ثم ضعها على مناديل ورقية لتصفيتها.',
      'تغطية: اخلط 1/2 كوب سكر مع القرفة ولف التشوروس في الخليط.',
      'تقديم: استمتع بالتشوروس المنزلية!',
    ],
  },
  {
    id: 14,
    ImgEn: 'cinnabon-en.jpg',
    imgHe: 'cinnabon-he.jpg',
    imgAr: 'cinnabon-ar.jpg',
    recipeTitleEn: 'Cinnabon',
    recipeTitleHe: 'סינבון',
    recipeTitleAr: 'سينابون',
    ingredientsEn: [
      '1 cup warm milk',
      '2 1/4 tsp yeast',
      '1/4 cup sugar',
      '1/2 cup melted butter',
      '1 egg',
      '4 cups flour',
      '1/2 tsp salt',
      '1/2 cup melted butter',
      '1 cup brown sugar',
      '3 tbsp cinnamon',
      '4 oz cream cheese',
      '1/4 cup butter',
      '1 1/2 cups powdered sugar',
      '1 tsp vanilla extract',
    ],
    ingredientsHe: [
      '1 כוס חלב חם',
      '2 1/4 כפית שמרים',
      '1/4 כוס סוכר',
      '1/2 כוס חמאה מומסת',
      '1 ביצה',
      '4 כוסות קמח',
      '1/2 כפית מלח',
      '1/2 כוס חמאה מומסת',
      '1 כוס סוכר חום',
      '3 כפות קינמון',
      '4 אונקיות גבינת שמנת',
      '1/4 כוס חמאה',
      '1 1/2 כוסות סוכר אבקה',
      '1 כפית תמצית וניל',
    ],
    ingredientsAr: [
      '1 كوب حليب دافئ',
      '2 1/4 ملعقة صغيرة خميرة',
      '1/4 كوب سكر',
      '1/2 كوب زبدة ذائبة',
      '1 بيضة',
      '4 أكواب دقيق',
      '1/2 ملعقة صغيرة ملح',
      '1/2 كوب زبدة ذائبة',
      '1 كوب سكر بني',
      '3 ملعقة كبيرة قرفة',
      '4 أونصات جبنة كريمة',
      '1/4 كوب زبدة',
      '1 1/2 كوب سكر بودرة',
      '1 ملعقة صغيرة خلاصة فانيليا',
    ],
    preparationMethodEn: [
      '1. Make Dough: Combine warm milk, yeast, and sugar. Add melted butter, egg, flour, and salt. Knead until smooth. Let rise 1-2 hours.',
      '2. Prepare Filling: Mix melted butter, brown sugar, and cinnamon.',
      '3. Assemble: Roll dough, spread filling, roll up, slice into rolls. Place in a baking dish.',
      '4. Bake: 350°F (175°C) for 20-25 minutes.',
      '5. Frost: Blend cream cheese, butter, powdered sugar, and vanilla. Spread over warm rolls.',
    ],
    preparationMethodHe: [
      '1. הכנת הבצק: שילבו חלב חם, שמרים וסוכר. הוסיפו חמאה מומסת, ביצה, קמח ומלח. לושו עד שהתערובת חלקה. תנו לבצק לתפוח 1-2 שעות.',
      '2. הכנת המילוי: ערבבו חמאה מומסת, סוכר חום וקינמון.',
      '3. הרכבה: רדדו את הבצק, spread את המילוי, גלגלו וחתכו לגלילים. הניחו בתבנית אפייה.',
      '4. אפיה: אפו ב-350°F (175°C) במשך 20-25 דקות.',
      '5. הכנת הזיגוג: ערבבו גבינת שמנת, חמאה, סוכר אבקה ותמצית וניל. מרחו על הגלילים החמים.',
    ],
    preparationMethodAr: [
      '1. تحضير العجينة: امزج الحليب الدافئ مع الخميرة والسكر. أضف الزبدة الذائبة والبيضة والدقيق والملح. اعجن حتى تصبح ناعمة. اتركها تتخمر 1-2 ساعة.',
      '2. تحضير الحشوة: اخلط الزبدة الذائبة والسكر البني والقرفة.',
      '3. التجميع: افرد العجينة، ضع الحشوة، ثم لُف العجينة وقطعها إلى دوائر. ضعها في صينية الخبز.',
      '4. الخبز: اخبزها في 350°F (175°C) لمدة 20-25 دقيقة.',
      '5. التحلية: اخلط الجبنة الكريمة والزبدة وسكر البودرة وخلاصة الفانيليا. وزعها فوق لفائف الدافئة.',
    ],
  },
  {
    id: 15,
    ImgEn: 'amsterdam-cookies-en.jpg',
    imgHe: 'amsterdam-cookies-he.jpg',
    imgAr: 'amsterdam-cookies-ar.jpg',
    recipeTitleEn: 'Amsterdam Cookies',
    recipeTitleHe: 'עוגיות אמסטרדם',
    recipeTitleAr: 'كوكيز أمستردام',
    ingredientsEn: [
      '1 cup butter',
      '1 cup sugar',
      '2 cups flour',
      '1/2 tsp vanilla extract',
      '1/4 tsp salt',
      '1/2 cup chocolate chips (optional)',
    ],
    ingredientsHe: [
      '1 כוס חמאה',
      '1 כוס סוכר',
      '2 כוסות קמח',
      '1/2 כפית תמצית וניל',
      '1/4 כפית מלח',
      "1/2 כוס שוקולד צ'יפס (אופציונלי)",
    ],
    ingredientsAr: [
      '1 كوب زبدة',
      '1 كوب سكر',
      '2 أكواب دقيق',
      '1/2 ملعقة صغيرة خلاصة فانيليا',
      '1/4 ملعقة صغيرة ملح',
      '1/2 كوب رقائق شوكولاتة (اختياري)',
    ],
    preparationMethodEn: [
      'Preheat oven to 350°F (175°C).',
      'Cream butter and sugar. Add vanilla, flour, and salt. Stir in chocolate chips if using.',
      'Roll dough into balls and place on a baking sheet.',
      'Bake for 10-12 minutes until edges are golden.',
      'Cool before serving.',
    ],
    preparationMethodHe: [
      'חממים תנור ל-350°F (175°C).',
      "מקציפים חמאה וסוכר. מוסיפים תמצית וניל, קמח ומלח. מערבבים פנימה שוקולד צ'יפס אם משתמשים.",
      'מעצבים כדורים מהבצק ומניחים על תבנית אפייה.',
      'אופים במשך 10-12 דקות עד שהקצוות מזהיבים.',
      'מניחים להתקרר לפני ההגשה.',
    ],
    preparationMethodAr: [
      'سخن الفرن إلى 350°F (175°C).',
      'اخفق الزبدة والسكر. أضف خلاصة الفانيليا والدقيق والملح. اخلط رقائق الشوكولاتة إذا كنت تستخدمها.',
      'شكل العجينة إلى كرات وضعها على صينية الخبز.',
      'اخبز لمدة 10-12 دقيقة حتى تصبح الحواف ذهبية.',
      'اتركها لتبرد قبل التقديم.',
    ],
  },
  {
    id: 16,
    ImgEn: 'blinches-en.jpg',
    imgHe: 'blinches-he.jpg',
    imgAr: 'blinches-ar.jpg',
    recipeTitleEn: 'Blinches',
    recipeTitleHe: "בלינצ'ס",
    recipeTitleAr: 'بلينشس',
    ingredientsEn: [
      '1 cup flour',
      '1 cup milk',
      '2 eggs',
      '2 tbsp sugar',
      '1/4 tsp salt',
      '2 tbsp melted butter',
    ],
    ingredientsHe: [
      '1 כוס קמח',
      '1 כוס חלב',
      '2 ביצים',
      '2 כפות סוכר',
      '1/4 כפית מלח',
      '2 כפות חמאה מומסת',
    ],
    ingredientsAr: [
      '1 كوب دقيق',
      '1 كوب حليب',
      '2 بيضة',
      '2 ملعقة كبيرة سكر',
      '1/4 ملعقة صغيرة ملح',
      '2 ملعقة كبيرة زبدة ذائبة',
    ],
    preparationMethodEn: [
      'Mix: Combine flour, milk, eggs, sugar, and salt. Stir in melted butter.',
      'Cook: Heat a non-stick pan over medium heat. Pour a small amount of batter and cook until bubbles form, then flip and cook until golden.',
      'Serve: Top with fruit, jam, or syrup.',
    ],
    preparationMethodHe: [
      'ערבבו: שילבו קמח, חלב, ביצים, סוכר ומלח. ערבבו פנימה חמאה מומסת.',
      'בישול: חממו מחבת עם ציפוי מונע הידבקות על חום בינוני. שפכו כמות קטנה מהבלילה ובשלו עד שמופיעות בועות, הפכו ובשלו עד שהן מזהיבות.',
      'הגשה: הוסיפו פרי, ריבה או סירופ.',
    ],
    preparationMethodAr: [
      'اخلط: امزج الدقيق والحليب والبيض والسكر والملح. أضف الزبدة الذائبة.',
      'طهي: سخن مقلاة غير لاصقة على نار متوسطة. صب كمية صغيرة من العجين واطبخ حتى تتشكل الفقاعات، ثم اقلبها واطبخ حتى تصبح ذهبية.',
      'التقديم: أضف الفاكهة أو المربى أو الشراب.',
    ],
  },
]

export default culinaryKidsData
