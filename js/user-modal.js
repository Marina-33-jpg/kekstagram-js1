import { isEscapeKey } from '/js/util.js';

//отрисовка окна миниатюры в полноразмерном изображении
//родительские узлы
const bigPicture = document.querySelector('.big-picture');
//const commentCount = document.querySelector('.social__comment-count');
//const commentList = document.querySelector('.social__comments');
//const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
/*
// количество комментариев comment  как текстовое содержание  элемента comment-count
// список комментариев под фото: должны вставляться в блок ('.social__comments')
// каждый комментарий '.social__comment' имеет строку как текстовое содержание ('.social__text')
const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentList.append(fragment);
};
*/

//закрываем окно
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};
//нажимаем клавишу 'Escape'
function onEscKeyDown(evt) {
  if ( isEscapeKey ) {
    evt.preventDefault();
    hideBigPicture();//скрыть
  }
}

// нажимаем кнопку окна
const onCancelButtonClick = () => {
  hideBigPicture();//скрыть
};
/*
//для открытия полноразмерного окна миниатюры
//каждый раз заполняем его данными о конкретной фотографии
// адрес изображения url как  атрибут scr изображения внутри блока '.big-picture__img'
// количество лайков likes  как текстовое содержание элемента ('.likes-count')
// описание фотографии description (как атрибут alt) - строка в блок ('.social__caption')
const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;

  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

// для открытия полноразмерного окна удалите класс .hidden у элемента .big-picture
// добавьте класс .modal-open тегу body, чтобы контейнер с фото позади не прокручивался
// при скролле. При закрытии окна не забудьте удалить этот класс
const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');// прячем блок загрузки новых комментариев .comments-loader
  commentCount.classList.add('hidden');// прячем блок счетчика комментариев .social__comment-count
  document.addEventListener('keydown', onEscKeyDown);//закрытие по клавише Esc и клику по кнопке

  renderPictureDetails(data);
  renderComments(data.comments);
};
*/
cancelButton.addEventListener('click', onCancelButtonClick);

export { onEscKeyDown };
