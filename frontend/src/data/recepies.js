  const recipes = [
    {
      id: 1,
      name: "Chocolate Cake",
      ingredients: ["flour", "sugar", "chocolate", "eggs", "butter"],
      cookingTime: "45 minutes",
      description:
        "Indulge in the rich and moist chocolate cake that satisfies your sweet cravings.",
      instructions: [
        "Preheat the oven to 350°F (180°C).",
        "Mix flour, sugar, and cocoa powder in a bowl.",
        "Add eggs and melted butter to the mixture, and stir well.",
        "Pour the batter into a greased baking pan and bake for 30-35 minutes.",
        "Allow the cake to cool before serving.",
      ],
      photo:
        "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Dessert",
    },
    {
      id: 2,
      name: "Vegetable Soup",
      ingredients: ["potato", "carrot", "zucchini", "onion", "garlic"],
      cookingTime: "30 minutes",
      description:
        "Enjoy a hearty bowl of vegetable soup packed with nutritious goodness.",
      instructions: [
        "Peel and chop the vegetables.",
        "Sauté the onion and garlic in a pot.",
        "Add the chopped vegetables and cover with water or vegetable broth.",
        "Simmer until the vegetables are tender.",
        "Blend the soup until creamy using a blender.",
        "Season with salt and pepper to taste before serving.",
      ],
      photo:
        "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Soup",
    },
  {
    id: 3,
    name: "Caesar Salad",
    ingredients: [
      "romaine lettuce",
      "croutons",
      "parmesan cheese",
      "Caesar dressing",
      "grilled chicken breast",
    ],
    cookingTime: "20 minutes",
    description:
      "Enjoy a classic Caesar salad with crisp lettuce, savory chicken, and zesty dressing.",
    instructions: [
      "Wash and tear the romaine lettuce leaves.",
      "Grill the chicken breast and slice it into strips.",
      "Combine the lettuce, croutons, and parmesan cheese in a bowl.",
      "Add the grilled chicken on top.",
      "Drizzle with Caesar dressing and toss well before serving.",
    ],
    photo:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Salad",
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    ingredients: [
      "spaghetti",
      "eggs",
      "bacon",
      "parmesan cheese",
      "black pepper",
    ],
    cookingTime: "25 minutes",
    description:
      "Indulge in this classic Italian pasta dish with creamy egg and cheese sauce.",
    instructions: [
      "Boil the spaghetti in salted water until al dente.",
      "In a separate bowl, whisk eggs, grated parmesan cheese, and black pepper.",
      "Cook bacon until crispy, then crumble it.",
      "Drain the cooked pasta and immediately mix it with the egg mixture.",
      "Add the bacon and toss to combine.",
      "Serve with extra parmesan cheese and black pepper.",
    ],
    photo:
      "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pasta",
  },
  {
    id: 5,
    name: "Chicken Tacos",
    ingredients: [
      "chicken breast",
      "taco shells",
      "lettuce",
      "tomato",
      "cheddar cheese",
      "sour cream",
    ],
    cookingTime: "30 minutes",
    description:
      "Enjoy these flavorful and easy-to-make chicken tacos for a delicious meal.",
    instructions: [
      "Season and grill the chicken breast until cooked through.",
      "Chop lettuce and dice tomatoes.",
      "Warm the taco shells according to the package instructions.",
      "Slice the cooked chicken into strips.",
      "Fill each taco shell with lettuce, tomatoes, chicken, and cheddar cheese.",
      "Top with sour cream and serve.",
    ],
    photo:
      "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tacos",
  },
  {
    id: 6,
    name: "Mushroom Risotto",
    ingredients: [
      "arborio rice",
      "mushrooms",
      "onion",
      "white wine",
      "parmesan cheese",
      "vegetable broth",
    ],
    cookingTime: "40 minutes",
    description:
      "Savor the creamy and rich flavors of this comforting mushroom risotto.",
    instructions: [
      "Sauté chopped onion in a pan until translucent.",
      "Add sliced mushrooms and cook until they release their moisture.",
      "Add arborio rice and cook for a few minutes.",
      "Pour in white wine and allow it to be absorbed by the rice.",
      "Gradually add warm vegetable broth while stirring until the rice is creamy and tender.",
      "Stir in grated parmesan cheese and serve.",
    ],
    photo:
      "https://images.pexels.com/photos/2067418/pexels-photo-2067418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Risotto",
  },
  {
    id: 7,
    name: "Greek Salad",
    ingredients: [
      "cucumber",
      "tomato",
      "red onion",
      "feta cheese",
      "kalamata olives",
      "olive oil",
    ],
    cookingTime: "15 minutes",
    description:
      "Enjoy the freshness of a traditional Greek salad with vibrant flavors.",
    instructions: [
      "Chop cucumber, tomato, and red onion.",
      "Combine the chopped vegetables in a bowl.",
      "Add crumbled feta cheese and kalamata olives.",
      "Drizzle with olive oil and toss to combine.",
      "Season with salt and pepper to taste before serving.",
    ],
    photo:
      "https://images.pexels.com/photos/724664/pexels-photo-724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Salad",
  },
  {
    id: 8,
    name: "Spaghetti Bolognese",
    ingredients: [
      "spaghetti",
      "ground beef",
      "onion",
      "garlic",
      "crushed tomatoes",
      "oregano",
    ],
    cookingTime: "35 minutes",
    description:
      "Delight in the classic Italian-American dish featuring hearty meat sauce.",
    instructions: [
      "Cook spaghetti in salted water until al dente.",
      "Sauté chopped onion and minced garlic in a pan.",
      "Add ground beef and cook until browned.",
      "Stir in crushed tomatoes and oregano.",
      "Simmer the sauce for about 20 minutes.",
      "Serve the sauce over cooked spaghetti.",
    ],
    photo:
      "https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pasta",
  },
  {
    id: 9,
    name: "Fruit Smoothie Bowl",
    ingredients: [
      "banana",
      "mixed berries",
      "Greek yogurt",
      "granola",
      "honey",
    ],
    cookingTime: "10 minutes",
    description:
      "Start your day with a nutritious and colorful fruit smoothie bowl.",
    instructions: [
      "Blend banana, mixed berries, and Greek yogurt until smooth.",
      "Pour the smoothie into a bowl.",
      "Top with granola and drizzle with honey.",
      "Add additional fruits if desired.",
    ],
    photo:
      "https://images.pexels.com/photos/674554/pexels-photo-674554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Breakfast",
  },
]

export default recipes
