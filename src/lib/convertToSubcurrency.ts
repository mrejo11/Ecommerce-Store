function convertToSubcurrency(amount: number, factor = 100) {
    return Math.round(Number(amount * factor));
  }
  
  export default convertToSubcurrency;