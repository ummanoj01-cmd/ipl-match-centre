const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const teamFilter = document.querySelector('#team-filter');
const matchList = document.querySelector('#match-list');
const emptyState = document.querySelector('.empty-state');
const viewButtons = document.querySelectorAll('.view-button');

function setNavigationOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('nav-open', isOpen);
}

menuButton.addEventListener('click', () => {
  setNavigationOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setNavigationOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setNavigationOpen(false);
    menuButton.focus();
  }
});

teamFilter.addEventListener('change', () => {
  const selectedTeam = teamFilter.value;
  let visibleMatches = 0;

  matchList.querySelectorAll('.match-card').forEach((card) => {
    const shouldShow = selectedTeam === 'all' || card.dataset.teams.split(' ').includes(selectedTeam);
    card.hidden = !shouldShow;
    if (shouldShow) visibleMatches += 1;
  });

  emptyState.hidden = visibleMatches > 0;
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isListView = button.dataset.view === 'list';
    matchList.classList.toggle('list-view', isListView);
    viewButtons.forEach((viewButton) => {
      const isSelected = viewButton === button;
      viewButton.classList.toggle('is-selected', isSelected);
      viewButton.setAttribute('aria-pressed', String(isSelected));
    });
  });
});
