import { LOCALSTORAGE_KEY } from './constants.js';
import { toggleModal } from './modal.js';

export const submitForm = (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ name, email }));
  toggleModal();
};
