// details.js
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

const property = siteData.listings.find(p => p.id === propertyId);
const container = document.getElementById('property-details-container');

if (property) {
    let galleryHTML = '';
    if (property.gallery && property.gallery.length > 0) {
        // Apply the thick white border to gallery images to match the new aesthetic
        const galleryImages = property.gallery.map(imgUrl => `
            <img src="${imgUrl}" alt="Gallery image for ${property.address}" class="gallery-img" style="border: 4px solid var(--border-white); border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
        `).join('');

        galleryHTML = `
            <h3 style="margin-top: 4rem; margin-bottom: 2rem; color: var(--accent-gold); font-size: 2rem; font-family: 'Playfair Display', serif; font-style: italic;">Photo Gallery</h3>
            <div class="gallery-grid">
                ${galleryImages}
            </div>
        `;
    }

    container.innerHTML = `
        <div class="details-panel" style="max-width: 1000px; margin: 0 auto;">
            <img src="${property.image}" alt="${property.address}" style="width: 100%; height: 500px; object-fit: cover; border-radius: 8px; border: 6px solid var(--border-white); margin-bottom: 2.5rem; box-shadow: 0 15px 30px rgba(0,0,0,0.3);">
            
            <h1 style="margin-bottom: 0.5rem; font-size: 3rem; font-family: 'Playfair Display', serif; font-style: italic; color: var(--accent-gold);">${property.address}</h1>
            <h2 style="color: var(--text-light); margin-bottom: 2rem; font-size: 2rem; font-family: 'Playfair Display', serif;">${property.price}</h2>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 3rem;">
                <span style="background: rgba(224, 176, 107, 0.1); color: var(--accent-gold); padding: 0.8rem 1.5rem; border-radius: 4px; font-weight: 600; border: 1px solid var(--accent-gold); letter-spacing: 1px; text-transform: uppercase; font-size: 0.95rem;">
                    <i class="fa-solid fa-bed"></i> ${property.beds} Bed &nbsp;&nbsp;|&nbsp;&nbsp;
                    <i class="fa-solid fa-bath"></i> ${property.baths} Bath &nbsp;&nbsp;|&nbsp;&nbsp;
                    <i class="fa-solid fa-ruler-combined"></i> ${property.sqft} sqft
                </span>
            </div>
            
            <h3 style="margin-bottom: 1.5rem; color: var(--accent-gold); font-size: 1.8rem; font-family: 'Playfair Display', serif;">About this Property</h3>
            <p style="line-height: 1.9; font-size: 1.1rem; color: #e2dcd3;">
                ${property.description}
            </p>
            
            ${galleryHTML}
            
            <div style="margin-top: 5rem; text-align: center;">
                <a href="index.html#contact" class="btn-solid" style="font-size: 1.1rem; padding: 1.2rem 2.5rem;">Book a Showing for this Home</a>
            </div>
        </div>
    `;
} else {
    // Fallback if property not found (styled to match the dark theme)
    container.innerHTML = `
        <div class="details-panel" style="text-align: center; padding: 5rem 3rem; max-width: 600px; margin: 0 auto; border: 1px solid var(--accent-gold);">
            <h2 style="color: var(--accent-gold); font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 1rem;">Property Not Found</h2>
            <p style="margin-bottom: 2.5rem; color: var(--text-light); font-size: 1.1rem;">The listing you are looking for may have been removed or sold.</p>
            <a href="listings.html" class="btn-solid">Return to Listings</a>
        </div>
    `;
}