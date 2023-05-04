const coffeeMenu = require("./coffee_data")
console.log(coffeeMenu)

// 2. Print an array of all the drinks on the menu.

const name = (item) => {
    return item.name
}
console.log(coffeeMenu.map(name))

// 3. Print an array of drinks that cost 5 and under.

const underFifty = (item) => {
    return item.price <= 5;
}
const itemsUnderFifty = coffeeMenu.filter(underFifty);
console.table(itemsUnderFifty);

// Print an array of drinks that are priced at an even number.

const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
const evenPricedDrinkNames = evenPricedDrinks.map(item => item.name);
console.log(evenPricedDrinkNames);

//  Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, item) => {
    const price = Number(item.price);
    return acc + price;
  }, 0);

console.log(`Total price for one of every drink: $${total.toFixed(2)}`);

// Print an array with all the drinks that are seasonal.

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.table(seasonalDrinks)
// Print all the seasonal drinks with the words "with imported beans" after the item name. 
// For example: "affogato with imported beans".

const drinksWithBeans = coffeeMenu.filter(drink => drink.seasonal);
const seasonalDrinksWithBeans = drinksWithBeans.map(drink => `${drink.name} with imported beans`);
console.table(seasonalDrinksWithBeans);