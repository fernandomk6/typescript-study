var _a;
var uniqueKey = Symbol('description');
var obj = (_a = {},
    _a[uniqueKey] = 'This is a unique property',
    _a);
console.log(obj[uniqueKey]); // 'This is a unique property'
