// details.js
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

const property = siteData.listings.find(p => p.id === propertyId);
const container = document.getElementById('property-details-container');

if (property) {
    let galleryHTML = '';
    if (property.gallery && property.gallery.length > 0) {
        const galleryImages = property.gallery.map(imgUrl => `
            <img src="${imgUrl}" alt="Gallery image for ${property.address}" class="gallery-img">
        `).join('');

        galleryHTML = `
            <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Photo Gallery</h3>
            <div class="gallery-grid">
                ${galleryImages}
            </div>
        `;
    }

    container.innerHTML = `
        <div class="glass-panel" style="max-width: 1000px; margin: 0 auto; padding: 2rem; border-radius: 16px;">
            <img src="${property.image}" alt="${property.address}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">
            
            <h1 style="margin-bottom: 0.5rem; font-size: 2.5rem;">${property.address}</h1>
            <h2 style="color: var(--accent); margin-bottom: 1.5rem; font-size: 1.8rem;">${property.price}</h2>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 2.5rem;">
                <span style="background: rgba(255,255,255,0.7); padding: 0.7rem 1.2rem; border-radius: 8px; font-weight: bold; border: 1px solid var(--glass-border);">
                    ${property.specs}
                </span>
            </div>
            
            <h3 style="margin-bottom: 1rem;">About this Property</h3>
            <p style="line-height: 1.8; font-size: 1.1rem; color: var(--text-muted);">
                ${property.description}
            </p>
            
            ${galleryHTML}
            
            <div style="margin-top: 4rem; text-align: center;">
                <a href="index.html#contact" class="btn-solid" style="font-size: 1.1rem; padding: 1rem 2rem;">Book a Showing for this Home</a>
            </div>
        </div>
    `;
} else {
    // Fallback if property not found
    container.innerHTML = `
        <div class="glass-panel" style="text-align: center; padding: 4rem; max-width: 600px; margin: 0 auto;">
            <h2>Property not found.</h2>
            <p style="margin-bottom: 2rem;">The listing you are looking for may have been removed or sold.</p>
            <a href="index.html" class="btn-solid">Return to Listings</a>
        </div>
    `;
}