import { formMarkup } from './script/markup/formMarkup.js';
import { formRefs } from './script/refs.js';
import { submitForm } from './script/submitForm.js';

(() => {
  window.addEventListener('load', () => {
    formMarkup();
    const form = document.querySelector('[data-modal]');
    form.addEventListener('submit', submitForm);
  });
})();
