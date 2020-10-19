// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
const name = 'Josh';
let mealPlan = [];
const meals = [
    'Beef Teriyaki with Pineapple',
    'Vegan Quesadilla',
    'Oven Roasted Broccoli Heads with Halloumi',
    'Spiced Pear and Goat Cheese Salad',
    'Spaghetti with Tomato Sauce',
    'Bacon and Onion Sandwich',
    'California Sushi Roll',
    'Loaded Nachos',
    'Mozzarella and Tomato Salad',
    'Chicken and Waffles',
    'Beef and Shrimp Lo Mein',
    'Tofu Feta, Watermelon and Chicken Salad',
    'Barbecue Spare Ribs',
    'Healthy Veggie Curry with Garlic Naan'
];

// Get current day of the week
function getDay() {
    const date = new Date();
    let currentDay = date.getDay();

    switch (currentDay) {
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
    }
    return currentDay;
}

// Get random number and create new array to store weekly meal plan
function getRandomWeeklyMeals() {

    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * meals.length);
        mealPlan.push(meals[randomNumber]);
    }
    return mealPlan;
}

// Create a new list item for every meal and append it to the DOM using the `mealList` element
function displayWeeklyMealPlan() {
    const weeklyMeals = getRandomWeeklyMeals();

    for (let i = 0; i < 7; i++) {
        const li = document.createElement('li');
        li.innerText = `${weeklyMeals[i]}`;
        mealList.appendChild(li);
    }
    return mealList;
}

function showPlan() {
    displayWeeklyMealPlan();
    headline.classList.add('slideUp');
    headline.textContent = "Here's your weekly meal plan!";
    headline.style.marginBottom = '0';
    headline.style.fontSize = '3rem';
    tagline.style.marginTop = '0';
    tagline.textContent = '🍅🍆🥑🌽🥖🥩🌮🥟🧁';
    planDiv.classList.remove('hidden');
    startButton.style.display = "none";
}

headline.textContent = getDay();
tagline.textContent = `Hey ${name}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);


