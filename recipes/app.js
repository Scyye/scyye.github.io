async function loadRecipes() {

    const response = await fetch("./data/recipes.json");
    const recipes = await response.json();

    const container = document.getElementById("recipes");

    recipes.forEach(recipe => {

        const card = document.createElement("a");

        card.className = "recipe-card";

        card.href = `recipe.html?id=${recipe.id}`;

        card.innerHTML = `
            <img src="${recipe.image}">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
        `;

        container.appendChild(card);
    });
}

loadRecipes();