// main.js
// This file handles dynamic content rendering for the homepage and property details page

// Mobile Hamburger Menu Logic
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const heroName = document.getElementById('hero-name');
if (heroName) {
    heroName.innerText = siteData.realtor.name;
}

const heroTagline = document.getElementById('hero-tagline');
if (heroTagline) {
    heroTagline.innerText = siteData.realtor.tagline;
}

const portraitImg = document.getElementById('hero-portrait');
if (portraitImg) {
    portraitImg.src = siteData.realtor.portrait;
    portraitImg.onerror = () => {
        console.error("Failed to load portrait image at:", siteData.realtor.portrait);
    };
}
//Render the Listings Section
const listingsContainer = document.getElementById('listings-container');
if (listingsContainer && siteData.listings) {
    listingsContainer.innerHTML = '';

    siteData.listings.forEach(property => {
        const card = document.createElement('div');
        card.className = 'glass-card';

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${property.image}');"></div>
            <div class="card-content">
                <h3>${property.address}</h3>
                <p class="price" style="color: var(--accent); font-weight: bold; font-size: 1.2rem;">${property.price}</p>
                <p class="specs">${property.specs}</p>
                <a href="details.html?id=${property.id}" class="btn-glass" style="margin-top: 1rem; display: inline-block;">View Details</a>
            </div>
        `;
        listingsContainer.appendChild(card);
    });
}

//Render the Resources Section
const resourcesContainer = document.getElementById('resources-container');
if (resourcesContainer && siteData.resources) {
    resourcesContainer.innerHTML = ''; 

    siteData.resources.forEach(item => {
        const resCard = document.createElement('div');
        resCard.className = 'glass-card resource-card';
        
        resCard.innerHTML = `
            <div class="card-content">
                <span class="badge" style="background: var(--accent); color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.7rem; text-transform: uppercase;">${item.type}</span>
                <h3 style="margin: 0.5rem 0;">${item.title}</h3>
                <p style="margin-bottom: 1rem; font-size: 0.9rem;">${item.description}</p>
                <a href="${item.link}" target="_blank" class="btn-solid" style="font-size: 0.9rem;">View ${item.type}</a>
            </div>
        `;
        resourcesContainer.appendChild(resCard);
    });
}