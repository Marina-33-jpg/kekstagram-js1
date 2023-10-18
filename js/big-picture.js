//отрисовка окна миниатюры в полноразмерном изображении
//родительские узлы
const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');

const body = document.querySelector ('body');
const cancelButton = document.querySelector('.big-picture__cancel');

const commentsLoader = document.querySelector('.comments-loader'); //172 -кнопка Загрузить еще
const COMMENTS_PER_PORTION = 5; //к картинке просмотр по 5 коментов
let commentsShown = 0;
let comments = [];


// количество комментариев comment  как текстовое содержание  элемента comment-count
// список комментариев под фото: должны вставляться в блок ('.social__comments')
// каждый комментарий '.social__comment' имеет строку как текстовое содержание ('.social__text')
const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement ('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};
/*
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
const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden'); //прячем кнопку, показав все
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden'); //кнопка видна
  }

  const fragment = document.createDocumentFragment();//фрагмент 5 коментов
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

//закрываем окно
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  //удалили обработчик  -закрытие по клавише Esc и клику по кнопке
  commentsShown = 0;
};

// выбор клавиши Escape
const isEscapeKey = (evt) =>  evt.key === 'Escape';

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

/* для открытия полноразмерного окна удалите класс .hidden у элемента .big-picture
// добавьте класс .modal-open тегу body, чтобы контейнер с фото позади не прокручивался
// при скролле. При закрытии окна не забудьте удалить этот класс
const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');// прячем блок загрузки новых комментариев .comments-loader
  commentCount.classList.add('hidden');// прячем блок счетчика комментариев .social__comment-count
  document.addEventListener('keydown', onEscKeyDown);//добавили обработчик  -закрытие по клавише Esc и клику по кнопке
  renderPictureDetails(data);
  renderComments(data.comments);
};
*/
const onCommentsLoaderClick = () => renderComments();//

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
  comments = data.comments;
  //if (comments.length > 0) {// это условие вызывает ошибку!!! при нулевых коментах захватывает предыдущие чужие коменты
  renderComments();
  //}
};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { showBigPicture };
