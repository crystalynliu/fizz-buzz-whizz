describe('gameTest', function() {
  specNum = [3,5,7];
  it('当报数是第一个数的倍数时，输出单词Fizz', function() {
    var result = calculate(9,specNum);
    expect(result).toEqual("Fizz");
  });

  it('当报数是第二个数的倍数时，输出单词Buzz', function() {
    var result = calculate(25,specNum);
    expect(result).toEqual("Buzz");
  });

  
  it('当报数是第三个数的倍数时，输出单词Whizz', function() {
    var result = calculate(49,specNum);
    expect(result).toEqual("Whizz");
  });


  it('当报数同时是第一个数和第二个数的倍数时，输出单词FizzBuzz', function() {
    var result = calculate(15,specNum);
    expect(result).toEqual("FizzBuzz");
  });


  it('当报数同时是第二个数和第三个数的倍数时，输出单词BuzzWhizz', function() {
    var result = calculate(70,specNum);
    expect(result).toEqual("BuzzWhizz");
  }); 

  it('当报数同时是第一个数和第三个数的倍数时，输出单词FizzWhizz', function() {
    var result = calculate(21,specNum);
    expect(result).toEqual("FizzWhizz");
  }); 

  it('当报数同时是第一个数、第二个数和第三个数的倍数时，输出单词FizzBuzzWhizz', function() {
    var result = calculate(105,specNum);
    expect(result).toEqual("FizzBuzzWhizz");
  });

  it('当报数包含第一个数，忽略其他规则，输出单词Fizz', function() {
    var result = calculate(35,specNum);
    expect(result).toEqual("Fizz");
  }); 

  it('当报数不符合以上规则时，输出数字本身',function () {
    var result = calculate(2,specNum);
    expect(result).toEqual(2);
  });

});