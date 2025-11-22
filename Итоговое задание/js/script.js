// Данные о животных
const petsData = [
    {
        id: 1,
        name: "Барсик",
        type: "cat",
        breed: "Дворовая",
        age: "2 года",
        gender: "Мальчик",
        image: "img/barsik.jpg"
    },
    {
        id: 2,
        name: "Рекс",
        type: "dog",
        breed: "Немецкая овчарка",
        age: "3 года",
        gender: "Мальчик",
        image: "img/reks.jpg"
    },
    {
        id: 3,
        name: "Мурка",
        type: "cat",
        breed: "Сиамская",
        age: "1 год",
        gender: "Девочка",
        image: "img/murka.jpg"
    },
    {
        id: 4,
        name: "Джесси",
        type: "dog",
        breed: "Лабрадор",
        age: "4 года",
        gender: "Девочка",
        image: "img/djessi.jpg"
    },
    {
        id: 5,
        name: "Шарик",
        type: "dog",
        breed: "Дворняга",
        age: "5 месяцев",
        gender: "Мальчик",
        image: "img/sharik.jpg"
    },
    {
        id: 6,
        name: "Соня",
        type: "cat",
        breed: "Британская",
        age: "3 года",
        gender: "Девочка",
        image: "img/sonya.jpg"
    },
    {
        id: 7,
        name: "Кеша",
        type: "other",
        breed: "Попугай",
        age: "1 год",
        gender: "Мальчик",
        image: "img/kesha.jpg"
    },
    {
        id: 8,
        name: "Боня",
        type: "other",
        breed: "Кролик",
        age: "6 месяцев",
        gender: "Девочка",
        image: "img/bonya.jpg"
    }
];

// Функция для отображения животных
function displayPets(pets, containerId) {
    const petsContainer = document.getElementById(containerId);
    if (!petsContainer) return;
    
    petsContainer.innerHTML = '';
    
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'col-md-6 col-lg-4 col-xl-3';
        petCard.setAttribute('data-type', pet.type);
        
        petCard.innerHTML = `
            <div class="card pet-card border-0 shadow-sm h-100 fade-in">
                <div class="pet-image">
                    <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${pet.name}</h5>
                    <div class="d-flex justify-content-between text-muted small mb-2">
                        <span>${pet.breed}</span>
                        <span>${pet.age}</span>
                    </div>
                    <p class="card-text">${pet.gender}</p>
                    <button class="btn btn-primary mt-auto" onclick="showPetDetails(${pet.id})">Узнать больше</button>
                </div>
            </div>
        `;
        
        petsContainer.appendChild(petCard);
    });
}

// Функция для отображения избранных животных (для главной страницы)
function displayFeaturedPets() {
    const featuredContainer = document.getElementById('featured-pets');
    if (!featuredContainer) return;
    
    // Берем первые 4 животных для показа на главной
    const featuredPets = petsData.slice(0, 4);
    displayPets(featuredPets, 'featured-pets');
}

// Функция для фильтрации животных
function filterPets(filter) {
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (filter === 'all') {
        displayPets(petsData, 'pets-container');
    } else {
        const filteredPets = petsData.filter(pet => pet.type === filter);
        displayPets(filteredPets, 'pets-container');
    }
}

// Функция для поиска животных по имени
function searchPets(query) {
    const filteredPets = petsData.filter(pet => 
        pet.name.toLowerCase().includes(query.toLowerCase())
    );
    displayPets(filteredPets, 'pets-container');
}

// Функция для показа деталей животного
function showPetDetails(id) {
    const pet = petsData.find(p => p.id === id);
    alert(`Подробная информация о ${pet.name}:\n\nПорода: ${pet.breed}\nВозраст: ${pet.age}\nПол: ${pet.gender}\n\nСвяжитесь с нами, чтобы узнать больше!`);
}

// Обработчик формы
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
    
    // Инициализация при загрузке страницы
    displayPets(petsData, 'pets-container');
    displayFeaturedPets();
    
    // Обработчики для кнопок фильтра
    document.querySelectorAll('[data-filter]').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterPets(filter);
        });
    });
    
    // Обработчик для поиска
    const searchInput = document.getElementById('search-pets');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchPets(this.value);
        });
    }
});