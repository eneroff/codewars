function expandedForm(num) {
    let [integerPart, decimalPart] = num.toString().split('.');
     
     let expandedInteger = integerPart
     .split('')
     .reverse()
     .map((digit, index) => digit * Math.pow(10, index))
     .filter(value => value > 0)
     .reverse()
     .join(' + ');
     
     let expandedDecimal = decimalPart
     ? decimalPart
     .split ('')
     .map((digit, index) => '${digit}/${Math.pow(10, index + 1)}')
     .filter (value=>value[0] !== '0')
     .join(' + ')
     : '';
     
     return expandedInteger && expandedDecimal
     ? '${expandedInteger} + ${expandedDecimal}'
     : expandedInteger ||  expandedDecimal;
   }