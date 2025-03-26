// script.js (updated with real image URLs)
document.addEventListener('DOMContentLoaded', () => {
    const restaurants = [
        {
            name: "Le Bistro Elegance",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
            rating: "4.8",
            cuisine: "French Fine Dining",
            deliveryTime: "30-35 min"
        },
        {
            name: "Trattoria Bella",
            image: "https://images.unsplash.com/photo-1517248135467-2c7ed3ab7221?q=80&w=2070&auto=format&fit=crop",
            rating: "4.6",
            cuisine: "Italian Gourmet",
            deliveryTime: "35-40 min"
        },
        {
            name: "The Saffron Room",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            rating: "4.7",
            cuisine: "Indian Haute Cuisine",
            deliveryTime: "25-30 min"
        }
    ];

    const restaurantGrid = document.getElementById('restaurantGrid');

    function createRestaurantCard(restaurant) {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <div class="rating">★ ${restaurant.rating}</div>
                <div class="cuisine">${restaurant.cuisine}</div>
                <div class="delivery-time">${restaurant.deliveryTime}</div>
            </div>
        `;
        return card;
    }

    restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        restaurantGrid.appendChild(card);
    });

    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        restaurantGrid.innerHTML = '';
        
        const filteredRestaurants = restaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm)
        );

        filteredRestaurants.forEach(restaurant => {
            const card = createRestaurantCard(restaurant);
            restaurantGrid.appendChild(card);
        });
    });
});