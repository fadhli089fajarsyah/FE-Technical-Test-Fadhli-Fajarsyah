function sisaPembagian(a, b) {

    if (a === 0 || b === 0) {
      if ((a === 0 && b >= 0) || (b === 0 && a >= 0)) {
        return "NaN division by zero";
      }
      return 0;
    }
  
    const lebihBesar = Math.max(a, b);
    const lebihKecil = Math.min(a, b);
    
    return lebihBesar % lebihKecil;
  }
  

  console.log(sisaPembagian(17, 5));  // Output: 2
  console.log(sisaPembagian(13, 72)); // Output: 7
  console.log(sisaPembagian(0, -1));  // Output: 0
  console.log(sisaPembagian(0, 1));   // Output: NaN
  