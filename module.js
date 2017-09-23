exports.abs = function(num) {
	if(0<num){
		return num;
	} else {
		return -num;
	}
};

exports.circleArea = function(rad) {
	return rad*rad*Math.PI;
};