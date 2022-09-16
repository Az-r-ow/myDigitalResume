// Flippiing the cards
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener( 'click', function() {
    cards[i].classList.toggle('is-flipped');
  });
}

// Starting the page from the top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Using this function to wait for the promise 
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Using the observer api to check when the element is on the screen
const observer = new IntersectionObserver(async entries => {
  entries.forEach(async entry => {
    if (entry.isIntersecting){
      for (const row of rows) {
        for (const td of row.children) {
          await sleep(100);
          if(!td.classList.length) continue;
          td.style.opacity = 1;
        }
      }
    }
  })
});

// When the table is visible load the rows
let table = document.querySelector('table');
observer.observe(table);


// Getting rid of the bars
let rows = document.querySelectorAll('tr');
for (let i = 0; i < rows.length; i++) {
  for (const td of rows[i].children){
    if (!td.classList.length)continue;
    td.style.opacity = 0;
  }
}
