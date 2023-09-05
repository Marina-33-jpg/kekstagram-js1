import {getRandomPositiveInteger, getRandomArrayElement} from '/js/util.js';
//создаем массив обьектов временных данных

const Descriptions = [
  'Голубая лагуна днём. Ничто не портит природную красоту.',
  'Ждём приключений!',
  'Кипр. Здесь богиня явилась миру.',
  'Пляжный фотограф - отказать невозможно!',
  'У бунгала паркуй хоть ягуара.',
  'Французский завтрак, это не шведский стол!',
  'Головокружительный отдых!',
  'Просто чудеса техники...',
  'Путешествуем по Греции на арендованном авто. Завтра - только кабриалет!',
  'Просто конфетка!',
  'Пообедал и сиеста...',
  'Как мило.',
  'Завораживает!?',
  'Раз, два, три,четыре, пять - вышли к морю погулять.',
  'Хорошо сидим!',
];

const Names = [
  'Денис',
  'Дмитрий',
  'Борис',
  'Роман',
  'Олег',
  'Никита',
  'Мила',
  'Роза',
  'Ирина',
  'Карина',
  'Анна',
];

const MessagesList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//на основе замыкания
//генератор для получения уникальных идентификаторов   на основе замыкания
//function createIdGenerator () {
/*const getCreateIdGenerator = () =>  {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
*/
//на основе замыкания
//генератор для получения случайных уникальных идентификаторов из указанного диапазона(пока не будут все перебраны)
//function  createRandomIdFromRangeGenerator(min, max) {
/*const  getCreateRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function() {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max-min+1)) { // заменить скобку на ( Math.abs(max-min) +1 )
      //console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
*/

const createMessage = () =>
  Array.from({length:getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MessagesList)).join(' ');
//строка склеивается из массива с размером случайно 1 или 2 строки из случайно выбранных элементов MessagesLis

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,//
  message: createMessage(),
  name: getRandomArrayElement(Names),
});
//на каждый index-комментарий выбирается рандомный аватар, создается строка комментария и рандомное имя автора

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(Descriptions),
  likes: getRandomPositiveInteger(15,200),
  comments: Array.from( {length:getRandomPositiveInteger(0, 5)}, (_,commentIndex) => createComment(commentIndex +1) ),
});
//на каждый index выбирается ссылка на фото с рандомным описанием,рандомным числом лайков и массивом с рандомным
//размером,содержащим комментарии. Каждый комментарий создается с параметром сommentIndex, который увеличивается на 1
//при создании следующего элемента комментария. Количество комментариев не превышает 5.

//собирает в массив из 25 элементов из обьектов createPhoto
const getPictures = () => Array.from({length:25}, (_, photoIndex) => createPhoto(photoIndex+1) );

export {getPictures};


