// Get the cards data from the script tag
const cardsData = document.querySelector('script[data-cards]').getAttribute('data-cards');
const cards = JSON.parse(cardsData);

// Define the winning message
const winMessage = [ '', 'c', 'O', 'n', 'g', 'r', 'a', 't', 'u', 'l', 'a', 't', 'i','o','n','s'];

// Function to shuffle the cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the cards twice
const shuffledCards = shuffle(cards);
const shuffledCardsAgain = shuffle(shuffledCards);

// Add event listener to each card
document.querySelectorAll('.card').forEach((card, index) => {
  card.onclick = () => {
    // Add the flip class to the card
    card.classList.add('flip_card');

    // Check if two cards are flipped
    setTimeout(() => {
      const flippedCards = document.querySelectorAll('.flip_card');
      if (flippedCards.length > 1) {
        // Check if the cards match
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          // Add the match class to the cards
          flippedCards[0].classList.add('match_card');
          flippedCards[1].classList.add('match_card');

          // Remove the flip class from the cards
          flippedCards[1].classList.remove('flip_card');
          flippedCards[0].classList.remove('flip_card');

          // Check if all cards are matched
          const matchedCards = document.querySelectorAll('.match_card');
          if (matchedCards.length === cards.length) {
            // Display the winning message
            setTimeout(() => {
              matchedCards.forEach((card, index) => {
                card.innerHTML = winMessage[index];
              });
            }, 8000);
          }
        } else {
          // Remove the flip class from the cards
          flippedCards[1].classList.remove('flip_card');
          flippedCards[0].classList.remove('flip_card');
        }
      }
    }, 500);
  };
});