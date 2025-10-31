export function setupDropdownHover(buttonSelector, menuSelector) {
  const button = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);

  if (!button || !menu) return;

  button.addEventListener('mouseover', () => {
    menu.classList.add('visible');
  });

  button.addEventListener('mouseout', () => {
    menu.classList.remove('visible');
  });

  menu.addEventListener('mouseover', () => {
    menu.classList.add('visible');
  });

  menu.addEventListener('mouseout', () => {
    menu.classList.remove('visible');
  });
}
