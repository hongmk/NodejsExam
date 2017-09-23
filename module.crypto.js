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

//암복호와 테스트

var crypto = require('crypto');

var key = 'test1234!@$!!#IASYAIPSDHASF:ASKFHP';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('pw: ' + input);
console.log('cipher pw ' + cipheredOutput);
console.log('decipher pw: ' + decipheredOutput);
