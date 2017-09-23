//crypto 모듈사용 해시 처리

var crypto = require('crypto');

var pw = 'test1234!@$!!#'
var shasum = crypto.createHash('sha256');
shasum.update(pw);
var output = shasum.digest('hex');

console.log('pw:'+pw);
console.log('crypto_hash:', output);


var shasum2 = crypto.createHash('sha256');

shasum2.update('test1234!@$!!@');
var output2 = shasum2.digest('hex');
console.log('crypto_hash2:'+output2);

if(output != output2) {
	console.log('잘못된 암호입니다.');
}