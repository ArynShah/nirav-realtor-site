const siteData = {
    realtor: {
        name: "Nirav Shah",
        phone: "(647) 854-7700",
        fax: "(416) 747-9777",
        email: "realtorniravshah@yahoo.com",
        officeAddress: "470 Chrysler Dr #20, Brampton, ON L6S 0C1",
        facebook: "https://facebook.com/yourprofile", 
        instagram: "https://www.instagram.com/realtor.niravshah/",
        portrait: "assets/nirav-portrait.jpeg",
        tagline: "Elevating your real estate experience."
    },
    listings: [
        {
            id: "prop-001",
            address: "123 Glassy Way, Cambridge",
            price: "$850,000",
            beds: 3,
            baths: 2,
            sqft: 2100,
            highlights: [
                "Open-concept chef's kitchen",
                "Spacious backyard for entertaining"
            ],
            image: "assets/house1/01.jpg",
            description: "A stunning modern home featuring open-concept living, a newly renovated kitchen, and a spacious backyard perfect for entertaining.",
            gallery: ["assets/house1/01.jpg", "assets/house1/02.jpg", "assets/house1/03.jpg", "assets/house1/04.jpg"] 
        },
        {
            id: "prop-002",
            address: "123 Frosty Way, Cambridge",
            price: "$850,000",
            beds: 3,
            baths: 2,
            sqft: 1850,
            highlights: [
                "Newly finished basement",
                "Quiet, family-friendly neighborhood"
            ],
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
            link: "assets/guides/buyer-guide.pdf", 
            thumbnail: "assets/house1/01.jpg" // Added a thumbnail image for the card view
        },
        {
            title: "Market Watch",
            type: "Treb Report",
            description: "February 2026 (Residential, Commercial & Condominium)",
            link: "assets/guides/MarketWatch.pdf", 
            thumbnail: "assets/house1/02.jpg" // Added a thumbnail image for the card view
        },
        {
            title: "Latest Market Trends",
            type: "Reel",
            description: "A quick look of 201 Emarson Dr London",
            link: "https://www.instagram.com/p/DRa40c1jE1I/", 
            thumbnail: "assets/house1/02.jpg" // Added a thumbnail image for the card view
        }
    ]
};