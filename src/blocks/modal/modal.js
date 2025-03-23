export const callbackModalActions = () => {
  const modal = document.getElementById('modal');
  const overlay = modal.querySelector('.modal__overlay');
  const closeBtn = modal.querySelector('.modal__close');
  const openButtons = document.querySelectorAll('.modal-open');

  if (!modal || !overlay || !closeBtn) return;

  const openModal = () => {
    // Если мобильное меню открыто, закрываем его
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu && mobileMenu.classList.contains('mobile-menu--active')) {
      mobileMenu.classList.remove('mobile-menu--active');
    }
    modal.classList.add('modal--active');
  };

  // Функция закрытия модального окна
  const closeModal = () => {
    modal.classList.remove('modal--active');
  };

  // Навешиваем слушатели на все кнопки открытия модального окна
  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal();
    });
  });

  // Закрытие по кнопке закрытия
  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // Закрытие при клике на оверлей
  overlay.addEventListener('click', () => {
    closeModal();
  });

  // Закрыть при нажатии клавиши Backspace (= кнопка "назад" на устройстве)
  // document.addEventListener('keydown', e => {
  //   if (e.key === 'Backspace') {
  //     if (modal.classList.contains('modal--active')) {
  //       modal.classList.remove('modal--active');
  //       e.preventDefault();
  //     }
  //   }
  // });
};
