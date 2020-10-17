// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
const name = 'Josh' // Assign your name
const meals = []; // Add in some meals...

// HELPER FUNCTIONS
const getDay = () => { };

const getRandomWeeklyMeals = () => { };

const displayWeeklyMealPlan = () => { };

const showPlan = () => { };

headline.textContent = getDay();
tagline.textContent = `Hey ${name}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);


