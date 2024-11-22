function expandedForm(number) {
    const [integerPart, decimalPart] = String(number).split('.');
    const result = [];

    // Обработка целой части
    integerPart.split('').forEach((digit, index, arr) => {
        if (digit !== '0') {
            result.push(digit + '0'.repeat(arr.length - index - 1));
        }
    });

    // Обработка дробной части
    if (decimalPart) {
        decimalPart.split('').forEach((digit, index) => {
            if (digit !== '0') {
                result.push(`${digit}/${Math.pow(10, index + 1)}`);
            }
        });
    }

    return result.join(' + ');
}