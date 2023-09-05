// отрисовка на основе временных данных и шаблона #picture
const container = document.querySelector('.pictures'); //узел для контейнера
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

//создать ДОМ-элементы, соответствущие фото и шаблону и данным
//- адрес url поставить как атрибут src изображения
//-количество likes    вывести в блок .picture_likes
//-количество comments (длина массива) вывести в блок .picture_comment
//const createPicture = ({url, description, likes, comments}) => {
const createPicture = ({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  return picture;
};

//отрисовать сгенерированные ДОМ-элементы в блок .pictures
const renderPictures = (pictures) => {
  //Для вставки элементов использовать DocumentFragment
  const fragment = document.createDocumentFragment();
  //перебираем
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  }
  );
  container.append(fragment);
};

//Подключить модуль в проект
export {renderPictures};
