// Flippiing the cards
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener( 'click', function() {
    cards[i].classList.toggle('is-flipped');
  });
}

// Removing buggy animation on small screens
let pageWidth = $(window).width();

function removeBuggyAnimation() {
  let pageWidth = $(window).width();
  if (pageWidth <= 450) {
    $('.card__face--front').removeAttr("data-aos");
    $('.card__face--front').removeAttr("data-aos-duration");
  } else {
    // if the attribute is not there add it
    if (!$('.card__face--front').attr("data-aos")) {
      $('.card__face--front').attr("data-aos", "fade-down");
      $('.card__face--front').attr("data-aos-duration", "1000");
    }
  }
}

removeBuggyAnimation();

// On window resize remove the animation as well
$(window).resize(function() {
  removeBuggyAnimation();
})

// Starting the page from the top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Using this function to wait for the promise
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Getting the table rows
let rows = document.querySelectorAll('tr');

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
      return
    };
    removeWhiteBars();
  })
});

// When the table is visible load the rows
let table = document.querySelector('table');
observer.observe(table);


// Getting rid of the bars
const removeWhiteBars = () => {
  for (let i = 0; i < rows.length; i++) {
    for (const td of rows[i].children){
      if (!td.classList.length)continue;
      td.style.opacity = 0;
    }
  }
};

removeWhiteBars();
