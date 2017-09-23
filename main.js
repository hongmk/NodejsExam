//전역변수 출력
console.log('filename:', __filename);
console.log('dirname:', +__dirname);

//console 전역객체 사용
//console.log('숫자:%d+%d = %d', 273, 52, 273+52);
console.log('숫자:'+273+'+'+52+'='+'%d',273+52);
console.log('문자열:%s'+ 'Hello World!' + ' 특수기호와 상관없음');
console.log('JSON:%j', {name:'Hong'});
console.log('JSON:'+ JSON.stringify({name:'Hong'}));

//JSON <-> String 전환 예제
var obj = {name:'Hong'};
obj = JSON.stringify(obj); //객체 -> 문자열
console.log('JSON2:'+obj);
obj = JSON.parse(obj); //문자열 -> 객체
console.log('JSON3:'+obj);
console.log('JSON3:%j',obj);

//수행시간 찍는 법
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++) {
  output *= i;
}
console.log('Result:', output);

console.timeEnd('alpha');

//exports 사용법
var module = require('./module.js');

console.log("num:"+module.abs(-10000));
console.log("rad:"+module.circleArea(3));