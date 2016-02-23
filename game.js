var specNum = [3,5,7];

function calculate (num) {
	var result = "";
	if(num.toString().indexOf(specNum[0].toString())!=-1){
		result = "Fizz";
	}
	else if(num%(specNum[0]*specNum[1]*specNum[2])==0){
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
	return result;
}