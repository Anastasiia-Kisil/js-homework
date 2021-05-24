// TASK 2 Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com"
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// console.log(apartment);

// TASK 3 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptTags);

// TASK 4 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// TASK 5 Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptTags);

// TASK 6Дополни код обновив значения свойств объекта apartment:
// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted"
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment.owner);

// TASK 7 Добавь объекту apartment несколько новых свойств:
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
        name: 'Henry Sibola',
        phone: '982-126-1588',
        email: 'henry.carter@aptmail.com',
    },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = { country: 'Jamaica', city: 'Kingston' };
console.log(apartment.location.city);
