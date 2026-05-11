async function loadRecipe() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    const response = await fetch(`./data/recipes/${id}.json`);

    const recipe = await response.json();

    document.title = recipe.title;

    document.getElementById("recipe").innerHTML = `
        <h1>${recipe.title}</h1>

        <img src="${recipe.image}">

        <p>${recipe.description}</p>

        <p>
            Prep: ${recipe.prepTime} |
            Cook: ${recipe.cookTime} |
            Servings: ${recipe.servings}
        </p>

        <h2>Ingredients</h2>

        <ul>
            ${recipe.ingredients.map(x => `<li>${x}</li>`).join("")}
        </ul>

        <h2>Instructions</h2>

        <ol>
            ${recipe.instructions.map(x => `<li>${x}</li>`).join("")}
        </ol>
    `;
}

loadRecipe();