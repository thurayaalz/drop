export function setupDropdown(buttonSelector, menuSelector) {
  const button = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);

  button.addEventListener('click', () => {
    menu.classList.toggle('visible');
  });
}
