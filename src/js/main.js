import { navitemActions, mobileMenuActions } from '../blocks/header/header.js';
import { callbackModalActions } from '../blocks/modal/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  navitemActions();
  mobileMenuActions();
  callbackModalActions();
});
