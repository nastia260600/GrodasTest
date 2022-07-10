//the total number of elements in the DOM tree
const allElements = document.getElementsByTagName("*");
console.log('Визначити загальну кількість елементів у DOM-дереві: ', allElements.length);

//Group items by tag name, determine the number of items for each tag
var count = {};

Array.prototype.forEach.call(document.getElementsByTagName("*"), function (a) {
   count[a.tagName] = (count[a.tagName] || 0) + 1;
});
console.log('Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу:')
console.log(count);

//Group elements by the number of characters in the tag name, determine the number of elements
const allTagNames = [].map.call(allElements, el => el.nodeName.toLowerCase());

const result = allTagNames.reduce((groups, item) => {
   groups[item.length] = [...(groups[item.length] || []), item]
   return groups;
}, {});
console.log('Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів:')
console.log(Object.keys(result).length)
console.log(result)