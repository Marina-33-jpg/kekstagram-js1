import { resetScale } from '/js/scale.js';
import { resetEffects } from '/js/effect.js';

const form = document.querySelector('.img-upload__form'); //18
const overlay = document.querySelector('.img-upload__overlay'); //43
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel'); //66 Закрыть
const fileField = document.querySelector('#upload-file'); //38
const hashtagField = document.querySelector('.text__hashtags'); //119
const commentField = document.querySelector('.text__description'); //120

const MAX_HASHTAG_COUNT = 5;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;     //регулярное выражение -с глобальным поиском ()


const pristine = new Pristine(form, {
  classTo: 'img-upload__element', //указываем элемент, на который добавяем служебные классы
  errorTextParent: 'img-upload__element', //класс элемента, в который будет выводиться текст ошибки
  errorTextClass: 'img-upload__error',  //класс для стилизация текста ошибки
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
  //добавили обработчик по Escape на окно формы
};

const hideModal = () => {
  form.reset(); //закрываем и обнуляем поля формы
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  //удалили обработчик по Escape на окно формы
};

// фокус на поле хэштега или комментария
const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();//закрываем и скрываем окно формы по Escape
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

//требования к хэштегу
//по первому символу
const startsWithHash = (string) => string[0] === '#';
//по длине
const hasValidLength = (string) =>
  string.length >= MIN_HASHTAG_LENGTH && string.length <= MAX_HASHTAG_LENGTH;
//по допустимости символов
const hasValidSymbols = (string) => !UNVALID_SYMBOLS.test(string.slice(1));


//проверка условия валидности хэштега
const isValidTag = (tag) =>
  startsWithHash(tag) && hasValidLength(tag) && hasValidSymbols(tag);

//проверка условия количества хэштегов в строке
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

//проверка уникальности хэштегов в строке
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};
const validateTags1 = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags.every(isValidTag);
};
const validateTags2 = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags);
};
const validateTags3 = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return  hasUniqueTags(tags) ;
};

//связываем пристин с валидацией
pristine.addValidator(
  hashtagField,
  validateTags1,
  'Хештег должен начинаться с #, разделяться пробелом, содержать буквы или цифры, быть не длиннее 20 символов'
);

pristine.addValidator(
  hashtagField,
  validateTags2,
  'Не больше 5 хештегов'
);

pristine.addValidator(
  hashtagField,
  validateTags3,
  'Хештеги не должны повторяться'
);

//проверяем валидность вводимых хэштегов
pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);
/*
const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};
*/
const onFormSubmit = (evt) => { //126 Опубликовать
  evt.preventDefault();
  pristine.validate(); //запуск валидации пристин
};

fileField.addEventListener('change', onFileInputChange); //Загрузить -открытие окна формы для загрузки изображения
cancelButton.addEventListener('click', onCancelButtonClick); //Закрыть  -для закрытия формы редактирования изображения
form.addEventListener('submit', onFormSubmit); //Опубликовать -для отправки данных на сервер
