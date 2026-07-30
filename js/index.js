const container = document.getElementById("projet-container");


projets.forEach(projet => {

    const card = document.createElement("div");
    card.classList.add("projet");


    card.innerHTML = `
        <div class="projet-info-up">

            <img src="${projet.image}" alt="${projet.nom}">

            <h2>${projet.nom}</h2>

        </div>


        <p>
            ${projet.description}
        </p>
    `;


    container.appendChild(card);

});