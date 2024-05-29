function insertFeedContext() {
  const divElements = document.querySelectorAll('div[data-feed-context]');

  divElements.forEach((div) => {
    if (!div.querySelector('p.inserted-feed-context')) {
      const feedContext = div.getAttribute('data-feed-context');
      const pElement = document.createElement('p');
      pElement.classList.add('inserted-feed-context');
      pElement.textContent = feedContext;
      div.appendChild(pElement);
    }
  });
}

// Run the function initially
insertFeedContext();

// Create a MutationObserver to watch for DOM changes
const observer = new MutationObserver((mutations) => {
  let shouldInsertFeedContext = false;

  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      shouldInsertFeedContext = true;
    }
  });

  if (shouldInsertFeedContext) {
    insertFeedContext();
  }
});

// Configure the observer to watch for changes in the body element and its subtree
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
