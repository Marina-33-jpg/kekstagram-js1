const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success'); // -226

const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error'); // -216

const body = document.querySelector('body');

const showSuccessMessage = () => {
  body.append(successMessage);
  body.addEventListener('keydown', onEscDown); // по Esc
  body.addEventListener('click', onBodyClick); // по клику
  successMessage
    .querySelector('.success__button')
    .addEventListener('click', hideMessage);
};

const showErrorMessage = () => {
  body.append(errorMessage);
  body.addEventListener('keydown', onEscDown);
  errorMessage
    .querySelector('.error__button')
    .addEventListener('click', hideMessage);
};

function hideMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscDown);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
    evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
}

function onEscDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
