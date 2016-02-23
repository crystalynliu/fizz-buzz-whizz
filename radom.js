function rd(n,m){
	var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
}

function getSpecNum(){
	specNum=[];
	for(i=0;i<3;i++){
		num = rd(1,9);
		if(specNum.indexOf(num)==-1){
			specNum[i]=num;
		}else{
			i=i-1;
		}
	}
	return specNum;
}