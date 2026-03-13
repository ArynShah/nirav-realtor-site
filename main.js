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

const heroFb = document.getElementById('hero-fb');
if (heroFb) heroFb.href = siteData.realtor.facebook;

const heroIg = document.getElementById('hero-ig');
if (heroIg) heroIg.href = siteData.realtor.instagram;

// 2. Mobile Hamburger Menu Auto-Close Logic
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Automatically close the menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

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

// 4. Render the Listings Section with Icons & Highlights
const listingsContainer = document.getElementById('listings-container');
if (listingsContainer && siteData.listings) {
    listingsContainer.innerHTML = '';

    siteData.listings.forEach(property => {
        const card = document.createElement('div');
        card.className = 'glass-card';

        // Build Highlights List
        let highlightsHTML = '';
        if (property.highlights && property.highlights.length > 0) {
            highlightsHTML = `<ul class="highlights-list">
                ${property.highlights.map(h => `<li><i class="fa-solid fa-check"></i> ${h}</li>`).join('')}
            </ul>`;
        }

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${property.image}');"></div>
            <div class="card-content">
                <h3>${property.address}</h3>
                <p class="price" style="color: var(--accent); font-weight: bold; font-size: 1.2rem;">${property.price}</p>
                
                <div class="icon-specs">
                    <span><i class="fa-solid fa-bed"></i> ${property.beds}</span>
                    <span><i class="fa-solid fa-bath"></i> ${property.baths}</span>
                    <span><i class="fa-solid fa-ruler-combined"></i> ${property.sqft} sqft</span>
                </div>
                
                ${highlightsHTML}
                
                <a href="details.html?id=${property.id}" class="btn-glass" style="margin-top: 1rem; display: inline-block;">View Details</a>
            </div>
        `;
        listingsContainer.appendChild(card);
    });
}

// 5. Render the Resources Section with Image Cards
const resourcesContainer = document.getElementById('resources-container');
if (resourcesContainer && siteData.resources) {
    resourcesContainer.innerHTML = ''; 

    siteData.resources.forEach(item => {
        const resCard = document.createElement('div');
        resCard.className = 'glass-card resource-card';
        
        // Add image thumbnail if it exists
        const imgHTML = item.thumbnail ? `<div class="card-img" style="background-image: url('${item.thumbnail}'); height: 160px;"></div>` : '';

        resCard.innerHTML = `
            ${imgHTML}
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