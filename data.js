const siteData = {
    realtor: {
        name: "Nirav Shah",
        phone: "+1 (647) 854-7700",
        portrait: "assets/nirav-portrait.jpeg",
        tagline: "Elevating your real estate experience."
    },
    listings: [
        {
            id: "prop-001",
            address: "123 Glassy Way, Cambridge",
            price: "$850,000",
            specs: "3 Bed • 2 Bath",
            image: "assets/house1/01.jpg",
            description: "A stunning modern home featuring open-concept living, a newly renovated kitchen, and a spacious backyard perfect for entertaining.",
            gallery: ["assets/house1/01.jpg", "assets/house1/02.jpg", "assets/house1/03.jpg", "assets/house1/04.jpg"] 
        },
        {
            id: "prop-002",
            address: "123 Frosty Way, Cambridge",
            price: "$850,000",
            specs: "3 Bed • 2 Bath",
            image: "assets/house1.jpg",
            description: "A stunning modern home featuring open-concept living, a newly renovated kitchen, and a spacious backyard perfect for entertaining.",
            gallery: ["assets/house1-2.jpg", "assets/house1-3.jpg"]
        }
    ],
    
    resources: [
        {
            title: "First-Time Buyer Guide",
            type: "Guide",
            description: "Everything you need to know about your first home purchase.",
            link: "assets/guides/buyer-guide.pdf", // Path to your PDF
            thumbnail: "assets/guides/thumb-guide.jpg"
        },
        {
            title: "Latest Market Trends",
            type: "Reel",
            description: "A quick look at the Cambridge housing market this month.",
            link: "https://instagram.com/your-reel-link", // Link to your Reel
            thumbnail: "assets/reels/thumb-reel.jpg"
        }
    ]
};