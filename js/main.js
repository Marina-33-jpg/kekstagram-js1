//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

const getRandomPositiveInteger  = (a, b) => {
  //реализуем поддержку передачи минимального и максимального
  //значения в любом порядке, вычислив  какое из них большее
  //или меньшее с помощью Math.min  Math.max
  //что границы диапазона даже при получении дробных значений
  //мы округлим границы к ближайшему большему целому Math.ceil
  //соответственно верхнюю границу - к ближайшему меньшему целому
  //Math.floor
  //при передаче отрицательного числа мы берем его модуль Math.abs
  //при расчете результата +1 чтобы включить верхнюю границу диапазонав случайные числа
  //Math.floor округляем полученный результат
  const lower =  Math.ceil(Math.min(Math.abs(a), Math. abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math. abs(b)));
  const result = Math.random( ) * (upper-lower + 1) +lower;
  return Math.floor(result);
};

//случайный выбор элемента массива
const getRandomArrayElement  = (array) => array[getRandomPositiveInteger(0, array.length-1)];

//сравнение строки комментария с максимальнодопустимой длиной
const checkStringLength = (string, length) => string.length <= length;

//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

const getRandomPositiveFloat = (a, b, digits) => {
  //реализуем поддержку передачи минимального и максимального
  //значения в любом порядке, вычислив  какое из них большее
  //или меньшее с помощью Math.min  Math.max
  //при передаче отрицательного числа мы берем его модуль Math.abs
  //метод toFixed  числа возвращает строку числа с указанным
  //числом знаков после запятой
  //унарный плюс превращает строку в число
  const lower = Math.min(Math.abs(a), Math. abs(b));
  const upper = Math.max(Math.abs(a), Math. abs(b));
  const result = Math.random( ) * (upper-lower + 1) +lower;
  return +result.toFixed(digits);
};

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

const createMessage = () =>
  Array.from({length:getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MessagesList)).join(' ');
//строка склеивается из массива с размером случайно 1 или 2 строки из случайно выбранных элементов MessagesList

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(Names),
});
//на каждый index-комментарий выбирается рандомный аватар, создается строка комментария и рандомное имя автора

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(Descriptions),
  likes: getRandomPositiveInteger(15,200),
  comments: Array.from( {length:getRandomPositiveInteger(0, 6)}, (_,commentIndex) => createComment(commentIndex +1) ),
});
//на каждый index выбирается ссылка на фото с рандомным описанием,рандомным числом лайков и массивом с рандомным
//размером,содержащим комментарии. Каждый комментарий создается с параметром сommentIndex, который увеличивается на 1
//при создании следующего элемента комментария.

const getPhotos = () => Array.from({length:25}, (_, photoIndex) => createPhoto(photoIndex +1) );
//собирает в массив из 25 элементов из обьектов createPhoto
