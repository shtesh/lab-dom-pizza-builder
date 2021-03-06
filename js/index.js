// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }     
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const sauce = document.querySelector('.sauce');
if (state.whiteSauce) {
  sauce.setAttribute('class','sauce sauce-white');
  //sauce.classList.add("sauce-white");
} else {
  sauce.setAttribute('class','sauce');
  //sauce.classList.remove("sauce-white");
}
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const crust = document.querySelector('.crust');
if (state.glutenFreeCrust) {
  crust.setAttribute('class','crust crust-gluten-free');
  //crust.classList.add("crust-gluten-free");
} else {
  crust.setAttribute('class', 'crust');
  //crust.classList.remove("crust-gluten-free");
}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni active');
    
  }
  else {
    document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni');
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms active');
  }
  else {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms');
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers active');
  }
  else {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers');
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce active');
  }
  else {
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce');
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust active');
  }
  else {
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust');
  }
}
//To correct the upper code - line 24 and 30 should reference the event
//function renderEverything(event) {
  //renderButtons(event);
//function renderButtons(event) {
//if (event) {
//const btnClicked = event.currentTarget;
//for(let property in state) {
//if(state[property]) btnClicked.classList.add("active");
//else btnClicked.classList.remove("active");
//}
//}

//OR
//function renderButtons(event) {
//if (event) {
  //const btnClicked = event.currentTarget;
  //let hasClassActive = btnClicked.classList.contains("active");
  //btnClicked.classList.toggle("active", !hasClassActive)

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = document.querySelector('aside.panel.price ul');
  let total = 10;
  let totalHTML = document.querySelector('aside.panel.price strong');
  console.log(totalHTML);
  const priceMain = 1;
  const priceWhite = 3;
  const priceFree = 5;
  price.innerHTML= ``;
  if (state.pepperoni){
    price.innerHTML += `<li>$${priceMain} pepperoni</li>`;
    total += priceMain;
    totalHTML.innerHTML =`<strong>$${total}</strong>`;
  }
  if (state.mushrooms){
    price.innerHTML += `<li>$${priceMain} mushrooms</li>`;
    total += priceMain;
    totalHTML.innerHTML =`<strong>$${total}</strong>`;
  }
  if (state.greenPeppers){
    price.innerHTML += `<li>$${priceMain} green peppers</li>`;
    total += priceMain;
    totalHTML.innerHTML =`<strong>$${total}</strong>`;
  }
  if (state.whiteSauce){
    price.innerHTML += `<li>$${priceWhite} white sauce</li>`;
    total += priceWhite;
    totalHTML.innerHTML =`<strong>$${total}</strong>`;
  } 
  if (state.glutenFreeCrust){
  price.innerHTML += `<li>$${priceFree} gluten-free crust</li>`;
  total += priceFree;
  totalHTML.innerHTML =`<strong>$${total}</strong>`;
  }
}

renderEverything();

//function renderPrice() {
 //const priceListEle = document.querySelector('.price ul');
//priceListEle.innerHTML = '';
//const totalPriceEle = document.querySelector('.price strong');
//let totalPrice = basePrice; 
//for(let oneIngredient in ingredients) {
//if(state[oneIngredient]) {
//let newLi = document.createElement('li')
//newLi.innerHTML = `$${ingredients[oneIngredient].price} ${ingredients[oneIngredient].name}`
//priceListEle.appendChild(newLi);
//totalPrice += ingredients[oneIngredient].price;
//}
//totalPriceEle.innerHTML = `$${totalPrice}`;
//}
//}
//renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
