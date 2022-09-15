let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener( 'click', function() {
    cards[i].classList.toggle('is-flipped');
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
