import { testArray, testObject, dataArray } from './testData.js';

/* ARRAYS */

const showArray = (arrayParametr) => {
  arrayParametr.map(arrayParametrItem => console.log(arrayParametrItem));

  // более понятная запись
  // arrayParametr.map((arrayParametrItem) => (
  //   console.log(arrayParametrItem)
  // ));
}

const filterArray = (arrayParametr, operator, filteredValue) => {
  switch (operator) {
    case '=':
      return arrayParametr.filter(arrayParametrItem => arrayParametrItem == filteredValue);
      break;
    case '!=':
      return arrayParametr.filter(arrayParametrItem => arrayParametrItem != filteredValue);
      break;
    case 'length >':
      return arrayParametr.filter(arrayParametrItem => arrayParametrItem.length > filteredValue);
      break;
      /* прочие условия */
    default:
      return false;
  }

  // более понятная запись
  // const filteredArray = arrayParametr.filter((arrayParametrItem) => (
  //   arrayParametrItem == filteredValue
  // ));
  // return filteredArray;
}

const addItemToArray = (arrayParametr, newItem) => {
  let newArray = [...arrayParametr];
  newArray.push(newItem);
  return newArray;
}

const removeItemFromArray = (arrayParametr, itemToRemove) => {
  let newArray = [...arrayParametr];
  let index = newArray.indexOf(itemToRemove);
  if (index > -1) {
    newArray.splice(index, 1);
    return newArray;
  } else {
    return false;
  }
  /* Эта функция удаляет только первый соответствующий элемент.
     если необходимо удалить из массива все копии искомого элемента,
     реобходимо использовать фильтр или цикл map.
     Данный пример - скажем так - устаревший. Для удаления элементов
     лучше всегда использовать фильтр
  */
}

// showArray(testArray);
// console.log(filterArray(testArray, '!=', 'Саша'));
// console.log(filterArray(testArray, 'length >', '4',));
// console.log(addItemToArray(testArray, 'Николай'));
// console.log(removeItemFromArray(testArray, 'Петя'));


/* OBJECTS */

const showObject = (objectParametr) => {
  Object.entries(objectParametr).forEach((objectParametrPropertyArray, objectParametrPropertyIndex) => (
    console.log(`[${objectParametrPropertyIndex}]: ${objectParametrPropertyArray[0]} => ${objectParametrPropertyArray[1]}`)
  ));
}

const addItemToObject = (objectParametr, newProperty) => {
  let newObject = objectParametr;
  Object.assign(newObject, newProperty);
  return newObject;
}

const removeItemFromObject = (objectParametr, propertyToRemove) => {
  let newObject = Object.assign({}, objectParametr);
  delete newObject[propertyToRemove]; // или delete newObject.age;
  return newObject;
}

// showObject(testObject);
// console.log(addItemToObject(testObject, {city: 'Запорожье'}));
// console.log(removeItemFromObject(testObject, 'age







// Задание №1
const string_list = '2 4 5 6 7';
const number_list = string_list.split(' ');
let show_number_sum = 0;
number_list.map(number => show_number_sum += Number(number));
// console.log(number_list);
// console.log(show_number_sum);

// Задание №2
let showNameList = '';
testArray.map(name => showNameList += name + ', ');
let result = showNameList.slice(0, showNameList.length - 2);
// console.log(showNameList);
// console.log(result);

// Задание №3
const numberArray = [2, 5, 7, 1, 4, 2, 3];
let newNumberArray = [];
numberArray.map((currentNum, currentIndex) => {
  if (currentIndex != numberArray.length - 1) {
    // console.log(currentIndex);
    newNumberArray.push(currentNum + numberArray[currentIndex + 1]);
  }
});

let newSum = Math.min(...newNumberArray);
let sumPositionsArray = [];
newNumberArray.map((sumItem, sumIndex) => {
  if (sumItem == newSum) {
    sumPositionsArray.push(sumIndex);
  }
});

let finalArray = [];
sumPositionsArray.map((position) => {
    let obj = {
      firstNumber: numberArray[position],
      secondNumber: numberArray[position + 1]
    }
    finalArray.push(obj);
  })
  // console.log(finalArray);

// Задание №4
dataArray.map((obj) => {
  Object.entries(obj).forEach(keyValue => {
    // console.log(typeof(keyValue[1]));
    switch (typeof(keyValue[1])) {
      case 'string':
        console.log(`
          ${keyValue[0]} ==> '${keyValue[1]}';
        `)
        break;
      case 'number':
        console.log(`
          ${keyValue[0]} ==> ${keyValue[1]};
        `)
        break;
      case 'object':
        let showArray = '';
        keyValue[1].map(item => {
          showArray += item + '|';
        })
        console.log(`
          ${keyValue[0]} ==> ${showArray};
        `)
        break;
      default:
        console.log('false')
        break;
    }
  });
  console.log('----------------------------');
});