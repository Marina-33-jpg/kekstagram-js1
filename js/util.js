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

//на основе замыкания
//генератор для получения уникальных идентификаторов   на основе замыкания
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
//на основе замыкания
//генератор для получения случайных уникальных идентификаторов из указанного диапазона(пока не будут все перебраны)
function  createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];
  return function() {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max-min+1)) { // заменить скобку на ( Math.abs(max-min) +1 )
      console.error('Перебраны все числа из диапазона от' + min +' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

//сравнение строки комментария с максимальнодопустимой длиной
const checkStringLength = (string, length) => string.length <= length;

//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength};
