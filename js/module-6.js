// TASK 1 Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    orderedItems.forEach(function (number, index) {
        totalPrice += orderedItems[index];
    });
    return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// TASK 2
function filterArray(numbers, value) {
    const filteredNumbers = [];
    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 38));

// TASK 3 Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    firstArray.forEach(function (firstNum) {
        if (secondArray.includes(firstNum)) {
            commonElements.push(firstNum);
        }
    });
    return commonElements;
}

// TASK 4 Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
};

// TASK 5 Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// TASK 6 Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию
const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach(item => (totalPrice += item));

    return totalPrice;
};

// TASK 7 Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
};

// TASK 8 Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Пиши код выше этой строки
    return commonElements;
};

// TASK 9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const numbersEven = [];
    numbers.forEach(element => {
        if (element % 2 !== 0) {
            numbersEven.push(element);
        }
        if (element % 2 === 0) {
            numbersEven.push(element + value);
        }
    });
    return numbersEven;
    // Пиши код выше этой строки
}
changeEven([1, 2, 3, 4, 5], 10);
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
