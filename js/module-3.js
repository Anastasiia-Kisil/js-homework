// // TASK 2 Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
// // name - имя владельца, значение "Henry";
// // phone - телефон, значение "982-126-1588";
// // email - почта, значение "henry.carter@aptmail.com"
// // const apartment = {
// //     imgUrl: 'https://via.placeholder.com/640x480',
// //     descr: 'Spacious apartment in the city center',
// //     rating: 4,
// //     price: 2153,
// //     tags: ['premium', 'promoted', 'top'],
// //     owner: {
// //         name: 'Henry',
// //         phone: '982-126-1588',
// //         email: 'henry.carter@aptmail.com',
// //     },
// // };

// // console.log(apartment);

// // TASK 3 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.
// // const apartment = {
// //     imgUrl: 'https://via.placeholder.com/640x480',
// //     descr: 'Spacious apartment in the city centre',
// //     rating: 4,
// //     price: 2153,
// //     tags: ['premium', 'promoted', 'top'],
// // };
// // const aptRating = apartment.rating;
// // const aptDescr = apartment.descr;
// // const aptPrice = apartment.price;
// // const aptTags = apartment.tags;
// // console.log(aptTags);

// // TASK 4 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// // ownerName - имя владельца;
// // ownerPhone - телефон владельца;
// // ownerEmail - почта владельца;
// // numberOfTags - количество элементов массива в свойстве tags;
// // firstTag - первый элемент массива в свойстве tags;
// // lastTag - последний элемент массива в свойстве tags.

// // TASK 5 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.
// // const apartment = {
// //     imgUrl: 'https://via.placeholder.com/640x480',
// //     descr: 'Spacious apartment in the city centre',
// //     rating: 4,
// //     price: 2153,
// //     tags: ['premium', 'promoted', 'top'],
// // };

// // const aptRating = apartment['rating'];
// // const aptDescr = apartment['descr'];
// // const aptPrice = apartment['price'];
// // const aptTags = apartment['tags'];

// // console.log(aptTags);

// // TASK 6Дополни код обновив значения свойств объекта apartment:
// // цену в свойстве price на 5000;
// // рейтинг квартиры в свойстве rating на 4.7;
// // имя владельца во вложенном свойстве name на "Henry Sibola";
// // массив тегов в свойстве tags добавив в конец строку "trusted"
// // const apartment = {
// //     imgUrl: 'https://via.placeholder.com/640x480',
// //     descr: 'Spacious apartment in the city centre',
// //     rating: 4,
// //     price: 2153,
// //     tags: ['premium', 'promoted', 'top'],
// //     owner: {
// //         name: 'Henry',
// //         phone: '982-126-1588',
// //         email: 'henry.carter@aptmail.com',
// //     },
// // };
// // apartment.price = 5000;
// // apartment.rating = 4.7;
// // apartment.owner.name = 'Henry Sibola';
// // apartment.tags.push('trusted');
// // console.log(apartment.owner);

// // TASK 7 Добавь объекту apartment несколько новых свойств:
// // area - площадь в квадратных метрах, число 60;
// // rooms - количество комнат, число 3;
// // location - местоположение квартиры, обьект со следующими вложенными свойствами;
// // country - страна, строка "Jamaica";
// // city - город, строка "Kingston".
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Henry Sibola',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };
// console.log(apartment.location.city);

// // TASK 8 Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// // TASK 9 Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// // Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam"
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',
// };

// // TASK 10 Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// for (key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// // TASK 11 Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// // TASK 12 Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
// }

// // TASK 13 Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// // TASK 14 Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
// function countProps(object) {
//     let propCount = 0;

//     const keys = Object.keys(object);

//     for (const key of keys) {
//         propCount += 1;
//     }

//     return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// // TASK 15 Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
// const apartment = {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // TASK 16 Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (const sal of values) {
//         totalSalary += sal;
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// TASK 17 Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors
const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

// TASK 18 Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    for (const product of products) {
        let name = product.name;
        if (productName === name) {
            return product.price;
        }
    }

    return null;
}

console.log(getProductPrice('Scanner'));

// TASK 19 Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    const array = [];
    for (const product of products) {
        if (product.hasOwnProperty(propName)) {
            array.push(product[propName]);
        }
    }

    return array;
}
console.log(getAllPropValues('price'));

// TASK 20 Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    for (product of products) {
        let total = product.price * product.quantity;
        if (productName === product.name) {
            return total;
        }
    }

    return 0;
}

console.log(calculateTotalPrice('Droid'));

// TASK 21
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// TASK 22 В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
const {
    yesterday,
    today,
    tomorrow,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

// TASK 23 Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};

const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// TASK 24 Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
}

console.log(rgbColors);

// TASK 25 Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
const {
    today: {
        high: highToday,
        low: lowToday,
        icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
    tomorrow: {
        high: highTomorrow,
        low: lowTomorrow,
        icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
} = forecast;

// TASK 26 Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {today: { low: 10, high: 20 },tomorrow: { low: 20, high: 30 }}
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
function calculateMeanTemperature(forecast) {
    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;

    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
    calculateMeanTemperature({
        today: { low: 28, high: 32 },
        tomorrow: { low: 25, high: 29 },
    }),
);

// TASK 27 В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// TASK 28 В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
    ...firstGroupScores,
    ...secondGroupScores,
    ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// TASK 29 В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
};
const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
};
const finalSettings = { ...defaultSettings, ...overrideSettings };

// TASK 30 Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи. category - категория задачи. priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
function makeTask(data) {
    const completed = false;
    const category = 'General';
    const priority = 'Normal';

    const task = { completed, category, priority, ...data };

    return task;
}

console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
