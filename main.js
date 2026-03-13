// 1. Populate Hero Contact Info
const heroEmail = document.getElementById('hero-email');
if (heroEmail) {
    heroEmail.href = `mailto:${siteData.realtor.email}`;
    heroEmail.innerText = siteData.realtor.email;
}

const heroPhone = document.getElementById('hero-phone');
if (heroPhone) {
    heroPhone.href = `tel:${siteData.realtor.phone.replace(/[^0-9+]/g, '')}`;
    heroPhone.innerText = siteData.realtor.phone;
}

const heroFax = document.getElementById('hero-fax');
if (heroFax) heroFax.innerText = siteData.realtor.fax;

const heroAddress = document.getElementById('hero-address');
if (heroAddress) heroAddress.innerText = siteData.realtor.officeAddress;

// 3. Populate Realtor Hero Info
const heroName = document.getElementById('hero-name');
if (heroName) heroName.innerText = siteData.realtor.name;

const heroTagline = document.getElementById('hero-tagline');
if (heroTagline) heroTagline.innerText = siteData.realtor.tagline;

const portraitImg = document.getElementById('hero-portrait');
if (portraitImg) {
    portraitImg.src = siteData.realtor.portrait;
    portraitImg.onerror = () => console.error("Failed to load portrait.");
}

// 4. Render the Listings Section
const listingsContainer = document.getElementById('listings-container');
if (listingsContainer && siteData.listings) {
    listingsContainer.innerHTML = '';

    siteData.listings.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card'; // Updated class

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${property.image}');"></div>
            <div class="card-content">
                <h3>${property.address}</h3>
                <p class="price">${property.price}</p>
                
                <div class="icon-specs">
                    <span><i class="fa-solid fa-bed"></i> ${property.beds} Bed</span>
                    <span><i class="fa-solid fa-bath"></i> ${property.baths} Bath</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${property.sqft} sqft</span>
                </div>
                
                <a href="details.html?id=${property.id}" class="btn-solid" style="display: block; text-align: center; margin-top: 1rem;">View Details</a>
            </div>
        `;
        listingsContainer.appendChild(card);
    });
}

// 5. Render the Resources Section
const resourcesContainer = document.getElementById('resources-container');
if (resourcesContainer && siteData.resources) {
    resourcesContainer.innerHTML = ''; 

    siteData.resources.forEach(item => {
        const resCard = document.createElement('div');
        resCard.className = 'property-card'; // Reusing the same beautiful card style
        
        const imgHTML = item.thumbnail ? `<div class="card-img" style="background-image: url('${item.thumbnail}'); height: 180px;"></div>` : '';

        resCard.innerHTML = `
            ${imgHTML}
            <div class="card-content">
                <span style="color: var(--accent-gold); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">${item.type}</span>
                <h3 style="margin: 0.5rem 0; color: var(--text-light);">${item.title}</h3>
                <p style="margin-bottom: 1.5rem; font-size: 0.95rem; color: #ccc;">${item.description}</p>
                <a href="${item.link}" target="_blank" class="btn-outline" style="display: block; text-align: center;">View Resource</a>
            </div>
        `;
        // Make resources dark theme to stand out against the dark background section
        resCard.style.background = 'var(--bg-dark)';
        resCard.style.border = '1px solid var(--accent-gold)';
        
        resourcesContainer.appendChild(resCard);
    });
}