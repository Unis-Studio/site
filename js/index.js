const container = document.getElementById("projet-container");
const container_partner = document.querySelector(".partners-container");

// ===================
// Projets
// ===================
projets.forEach(projet => {

    const card = document.createElement("div");
    card.classList.add("projet");

    card.innerHTML = `
        <div class="projet-info-up">
            <img src="${projet.image}" alt="${projet.nom}">
            <h2>${projet.nom}</h2>
        </div>

        <p>${projet.description}</p>
    `;

    container.appendChild(card);

});

// ===================
// Partenaires
// ===================

function createPartnerCard(partner) {
    const card = document.createElement("div");
    card.classList.add("partner");

    card.innerHTML = `
        <div class="card-top">
            <img src="${partner.image}" alt="${partner.nom}">
            <span class="badge">${partner.relation}</span>
        </div>

        <div class="card-name">${partner.nom}</div>
        <div class="card-cat">${partner.categorie}</div>
        <div class="card-desc">${partner.description}</div>

        <div class="card-divider"></div>

        <div class="card-foot">
            <span>Depuis ${partner.depuis}</span>
            <a href="${partner.lien}">Découvrir →</a>
        </div>
    `;

    return card;
}

container_partner.innerHTML = "";

// Originaux
partners.forEach(partner => {
    container_partner.appendChild(createPartnerCard(partner));
});

// Clones (pour l'animation infinie)
partners.forEach(partner => {
    container_partner.appendChild(createPartnerCard(partner));
});