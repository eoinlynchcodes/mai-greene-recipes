
const recipeList = [
    {
        id: 1,
        title: "Short Bread",
        ingredients: [
            "6 ozs Sugar",
            "5 ozs Flour S.R.",
            "3 ozs Marg",
            "2 Table spoons milk"
        ],
        method: "Mix all in mixer until well beaten. Bake in 2 sandwich tins (8 ins) for about 20 minutes at 160°C. Cool on wire tray and sandwich with butter icing."
    },
    {
        id: 2,
        title: "Butter Icing",
        ingredients: [
            "3 ozs Butter",
            "6 ozs Icing sugar",
            "1 teaspoon cocoa mixed in a little water"
        ],
        method: "Beat butter & sugar until soft & smooth then add cocoa"
    },
    {
        id: 3,
        title: "Coffee Sponge Sandwich",
        ingredients: [
            "3 eggs",
            "5 ozs sugar",
            "5 ozs flour",
            "1 level teaspoon baking powder",
            "1 dessertspoon coffee"
        ],
        method: "Separate whites of eggs, beat stiff. Then beat in yolks, sugar and coffee. Last mix in sifted flour and baking powder. Gently fold in stiff egg whites. Bake in 2 x 8 sandwich tins."
    },
    {
        id: 4,
        title: "Short Bread",
        ingredients: [
            "4 lb flour",
            "2 lb shortening",
            "1 lb sugar"
        ],
        method: "Mix flour, shortening and sugar together."
    },
    {
        id: 5,
        title: "Buns",
        ingredients: [
            "1 lb marg",
            "1 lb sugar",
            "1 lb flour S.R. 100g",
            "2 eggs",
            "1 tsp milk"
        ],
        method: "Mix marg & sugar until creamy. Beat in eggs one at a time. Add in flour (with spoon). Mix all together. Bake in hot oven."
    },
    {
        id: 6,
        title: "Brownies",
        ingredients: [
            "700g melted choc (dark 64%)",
            "300g choc pieces (dark)",
            "500g caster sugar",
            "200g flour",
            "50g cocoa",
            "450g melted butter",
            "4 eggs",
            "1 heaped teaspoon baking powder",
            "200g hazelnuts"
        ],
        method: ""
    },
    {
        id: 7,
        title: "Leek and Potato Soup with Smoked Bacon",
        ingredients: [
            "2 oz butter",
            "1 lb leeks, trimmed and chopped",
            "1 onion, roughly chopped",
            "1 potato, cut into cubes (about 200g)",
            "1 oz flour",
            "7 ozs chicken stock",
            "3 pints water",
            "4 ozs cream (800ml)",
            "1/2 teaspoon dried basil leaves",
            "salt and pepper",
            "4 rashers smoked streaky bacon"
        ],
        method: [
            "Melt the butter in a large pan.",
            "Gently fry the onion and bacon over a low heat for about 5 minutes until softened. Do not allow the onions to colour.",
            "Add the leeks and potato cubes and cook for another 2 minutes, stirring.",
            "Gradually add the stock, stirring to prevent any lumps forming.",
            "Bring to the boil, then reduce the heat to simmer for 15 minutes or until the potatoes are completely tender, stirring occasionally.",
            "Stir in half of the cream and the dried basil leaves.",
            "Season to taste. Remove from the heat and reserve a large spoonful of potato cubes to use as garnish.",
            "Puree the soup in a liquidiser until smooth. Season to taste.",
            "Preheat the remaining cream in a bowl and lightly whip.",
            "To serve, divide the reserved hot potato cubes between warmed bowls.",
            "Ladle over the soup and drizzle the cream on top. Garnish with the crispy rashers and some basil leaves to serve."
        ]
    },
    {
        id: 8,
        title: "Rasp of Boxty",
        ingredients: [
            "6 large potatoes",
            "Breadcrumbs (about 2 slices bread)",
            "1 teaspoon salt",
            "2 oz flour",
            "1/4 pt milk"
        ],
        method: [
            "Grate potatoes very fine.",
            "Add breadcrumbs, salt and milk.",
            "Add in flour and mix well.",
            "Cook in hot pan with mags of butter. Makes about 6 pans.",
            "Allow 2 tablespoons per pan.",
            "Cook for 4-5 mins on each side."
        ]
    },
    {
        id: 9,
        title: "Fruit Ice Cream",
        ingredients: [
            "1 pint double cream",
            "Juice of 1 orange",
            "Juice of 1 lemon",
            "3 sharp eating apples",
            "3 eggs",
            "3 ozs sugar"
        ],
        method: [
            "Whisk cream until fairly thick.",
            "Dissolve sugar in fruit juice.",
            "Peel apples and grate coarsely into the juice.",
            "Stir into the cream.",
            "Put into glasses or sundae dishes and chill in fridge for 2 hours before serving."
        ]
    }
]

function displayRecipes() {
    const recipeSection = document.getElementById('recipe-list');
    if (!recipeSection) return;

    recipeList.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';

        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

        recipeSection.appendChild(recipeElement);
    });
}

document.addEventListener('DOMContentLoaded', displayRecipes);
