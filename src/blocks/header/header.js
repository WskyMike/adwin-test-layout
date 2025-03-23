export const navitemActions = () => {
  // Логика навигации desktop
  const navItems = document.querySelectorAll('.navigation__item');

  navItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      navItems.forEach(i => {
        i.classList.remove('navigation__item--active');
        const dropdownBtn = i.querySelector('.dropdown-toggle');
        if (dropdownBtn) {
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.add('navigation__item--active');

      const dropdownBtn = item.querySelector('.dropdown-toggle');
      if (dropdownBtn) {
        dropdownBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

// Функция для мобильного меню
export const mobileMenuActions = () => {
  const burgerBtn = document.querySelector('.header__nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');
  const overlay = mobileMenu.querySelector('.mobile-menu__overlay');

  if (!burgerBtn || !mobileMenu || !closeBtn || !overlay) return;

  // Открыть меню
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active');
  });

  // Закрыть меню по клику на кнопку закрытия
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
  });

  // Закрыть меню при клике на оверлей
  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
  });

  // Закрыть меню при нажатии клавиши Backspace (= кнопка "назад" на устройстве)
  document.addEventListener('keydown', e => {
    if (e.key === 'Backspace') {
      if (mobileMenu.classList.contains('mobile-menu--active')) {
        mobileMenu.classList.remove('mobile-menu--active');
        e.preventDefault();
      }
    }
  });
};
