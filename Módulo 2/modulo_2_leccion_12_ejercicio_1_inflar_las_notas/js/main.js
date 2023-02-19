'use strict';

const marks = [5, 4, 6, 7, 9];

let inflatedMarks = marks.map(function(element){
    return element +1;
});

console.log(marks);
console.log(inflatedMarks);