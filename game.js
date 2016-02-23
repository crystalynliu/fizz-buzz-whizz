// var specNum = [3,5,7];

var wordArr = ["Fizz","Buzz","Whizz"];

function calculate (num,specNum) {
	var result = "";
	if(ruleOne(num)==""){
		if(ruleTwo(num)==""){
			result=ruleThree(num);
		}else{
			result=ruleTwo(num);
		}
	}else{
		result=ruleOne(num);
	};
	return result;
}

function ruleOne(num){
	result=num.toString().indexOf(specNum[0].toString())!=-1?wordArr[0]:"";
	return result;
}

function ruleTwo(num){
	result = specNum.reduce(function(p,c,i){
		return p += (num%c)?"":wordArr[i];
	},"")
	return result;
}

function ruleThree(num){
	return num;
}

