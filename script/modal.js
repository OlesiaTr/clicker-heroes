import { modalRefs, refs } from './refs.js';

export function toggleModal() {
  modalRefs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
