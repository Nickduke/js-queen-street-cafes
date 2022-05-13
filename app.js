const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: "Jimmy's",
      price: '$',
    },
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: "Ten Ren's",
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    },
  ],
};

// randomize our data of remaining cafes and select a single cafe
const getRandomItem = (array) => {
  // get a random cafe title from the matchedCafes array
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// add event listener (submit) to our form element
const formEl = document.querySelector('form');
formEl.addEventListener('submit', (e) => {
  // prevent page from refreshing
  e.preventDefault();

  // retreive the user's drinks and price choice from the form inputs - store in variables
  const drinkChoice = document.querySelector(
    'input[name=beverage]:checked'
  ).value;
  const priceChoice = document.querySelector(
    'input[name = price]:checked'
  ).value;

  // use the drink choice to isolate the array that represents their choice (coffee or tea)
  const chosenDrinksArray = drinks[drinkChoice];

  // Will store the new array of filtered options
  const matchedCafes = [];

  // use the user's price choice to filter for cafe's that match that price point
  // loop throuhg the chosen array
  for (let i = 0; i < chosenDrinksArray.length; i++) {
    const cafePrice = chosenDrinksArray[i].price;

    // use a conditional statement to check if the user's price === cafe's price
    if (priceChoice === cafePrice) {
      // push the matching cafes into the matchedShops array
      matchedCafes.push(chosenDrinksArray[i].title);
    }
  }

  // randomize our data of remaining cafes and select a single cafe
  const finalOption = getRandomItem(matchedCafes);
  console.log(finalOption);

  // take that randomly selected cafe and display it's title in the HTML
  const resultsDiv = document.querySelector('.results');
  resultsDiv.innerHTML = `<h2>${finalOption}</h2>`;
});
