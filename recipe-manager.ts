interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
}

const recipeList: Recipe[] = [
    {
        name: "Example Recipe",
        ingredients: ["Ingredient 1", "Ingredient 2"],
        instructions: "Step 1: Do something..."
    }
    // Add more recipes as needed
];

function displayRecipes(): void {
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

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayRecipes)