describe('calculate_median_spec', function() {

  it('当报数是第一个数的倍数时，输出单词Fizz', function() {
    var result = calculate(9);
    expect(result).toEqual("Fizz");
  });

  it('当报数是第二个数的倍数时，输出单词Buzz', function() {
    var result = calculate(25);
    expect(result).toEqual("Buzz");
  });

  
  it('当报数是第三个数的倍数时，输出单词Whizz', function() {
    var result = calculate(49);
    expect(result).toEqual("Whizz");
  });


  it('当报数同时是第一个数和第二个数的倍数时，输出单词FizzBuzz', function() {
    var result = calculate(15);
    expect(result).toEqual("FizzBuzz");
  });


  it('当报数同时是第二个数和第三个数的倍数时，输出单词BuzzWhizz', function() {
    var result = calculate(70);
    expect(result).toEqual("BuzzWhizz");
  }); 

  it('当报数同时是第一个数和第三个数的倍数时，输出单词FizzWhizz', function() {
    var result = calculate(21);
    expect(result).toEqual("FizzWhizz");
  }); 

  it('当报数同时是第一个数、第二个数和第三个数的倍数时，输出单词FizzBuzzWhizz', function() {
    var result = calculate(105);
    expect(result).toEqual("FizzBuzzWhizz");
  });

  it('当报数包含第一个数，忽略其他规则，输出单词Fizz', function() {
    var result = calculate(35);
    expect(result).toEqual("Fizz");
  }); 
});