//1.Пишем функцию принимающую два числа и возращающяя меньший из них.
function findMin(a, b) {

    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(findMin(5, 3));

//Используем данные с прошлого задания.
const dishes = [
    {
        name: "Buzza",
        ingredients: ['dough', 'meat', 'onions']
    },
    {
        name: "Pies",
        ingredients: ['dough', 'meat', 'onions', 'potato'],
    },
    {
        name: "Pizza",
        ingredients: ['dough', 'pepperoni', 'tomatoes', 'cheese']
    }
];

const ingredientPrices = {
    meat: 2,
    dough: 1,
    onions: 0.5,
    potato: 1,
    pepperoni: 1.5,
    tomatoes: 1,
    cheese: 2
}

for (let dish of dishes) {
    let costOfPreparation = 0;
    for (let ingredient of dish.ingredients) {
        costOfPreparation += ingredientPrices[ingredient];
    }
    dish.costOfPreparation = costOfPreparation;
}

console.log(dishes);

// Создаем массив для хранения строк меню
const menuItems = [];

// Создаем строки с информацией о каждом блюде и добавляем их в массив menuItems
for (let dish of dishes) {
    let dishInfo = `Блюдо: ${dish.name}, Ингридиенты: ${dish.ingredients.join(", ")}, Стоимость приготовления: $${dish.costOfPreparation.toFixed(2)}`;
    menuItems.push(dishInfo); // Добавляем строку информации о блюде в массив меню
}

// Создаем одну строку, содержащую все строки меню с переносом строк
const globalMenu = menuItems.join(`\n`);

// Выводим полученное меню
console.log(globalMenu);



//2. Создаем функцию которая будет считать профит от продаж блюд.
function calculateProfit(costOfPreperation, sellingPrice, quantitySold) {
// Вычисляем выручку от продаж (цена продажи * количество проданных порций)
const revenue = sellingPrice * quantitySold;

//Вычисляем профит (выручка - стоимость приготовления)
const profit = revenue - costOfPreperation;

//Возвращаем вычисленный профит
return profit;
}

// Пример использования фун-ции для каждогор блюда 
for (let dish of dishes) {
    const profit = calculateProfit(dish.costOfPreparation, 10, 20);

    dish.profit = profit;
}

console.log(dishes);