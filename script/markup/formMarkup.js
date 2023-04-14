import { modalRefs } from '../refs.js';

export const formMarkup = () => {
  const markup = `    <div class="modal">
      <form id="registration-form" class="modal-content">

        <p class="modal-greeting">Welcome to the most addictive game ever!</p>


        <h2 class="modal-header">Register to play</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" minlength="4" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <button type="submit" id="registration-btn">Register</button>
      </form>
    </div>`;

  modalRefs.modal.insertAdjacentHTML('beforeend', markup);
};
