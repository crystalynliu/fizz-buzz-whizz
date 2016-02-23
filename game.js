var specNum = [3,5,7];
var wordArr = ["Fizz","Buzz","Whizz"];

function calculate (num) {
	var result = "";
	if(ruleOne(num)==false){
		if(num%(specNum[0]*specNum[1]*specNum[2])==0){
			result="FizzBuzzWhizz";
		}
		else if(num%(specNum[0]*specNum[1])==0){
			result="FizzBuzz";
		}else if(num%(specNum[1]*specNum[2])==0){
			result="BuzzWhizz";
		}else if(num%(specNum[0]*specNum[2])==0){
			result="FizzWhizz";
		}
		else if(num%specNum[0]==0){
			result="Fizz";
		}else if(num%specNum[1]==0){
			result="Buzz";
		}else if(num%specNum[2]==0){
			result="Whizz";
		}else{
			result=num;
		}
	}else{
		result=ruleOne(num);
	};
	return result;
}

function ruleOne(num){
	result=num.toString().indexOf(specNum[0].toString())!=-1?wordArr[0]:false;
	return result;
}



