class CaesarCipher {
    constructor(shift) {
      this.shift = shift;
    }
  
    encode(input) {
      return this.transform(input, this.shift);
    }
  
    decode(input) {
      return this.transform(input, -this.shift);
    }
  
    transform(input, shift) {
      let result = '';
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (/[a-zA-Z]/.test(char)) {
          let code = char.charCodeAt(0);
          let base = code >= 65 && code <= 90 ? 65 : 97;
          char = String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        result += char;
      }
      return result.toUpperCase(); 
    }
  }