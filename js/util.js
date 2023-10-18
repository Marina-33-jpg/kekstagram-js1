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

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength };
