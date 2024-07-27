function apakahJalanValid(jalan) {
    if (jalan.length !== 10) return false;
  
    let x = 0, y = 0;
  
    const posisiAwal = { x: 0, y: 0 };
  
    for (let i = 0; i < jalan.length; i++) {
        let arah = jalan[i];
        if (arah === 'n') {
            y += 1;
        } else if (arah === 's') {
            y -= 1;
        } else if (arah === 'e') {
            x += 1;
        } else if (arah === 'w') {
            x -= 1;
        }
  
        if (x === posisiAwal.x && y === posisiAwal.y && i < jalan.length - 1) {
            return false;
        }
    }
  
   
    return x === 0 && y === 0;
  }
  

  console.log(apakahJalanValid(['n', 'n', 'n', 'e', 'e', 's', 's', 's', 'w', 'w'])); // true
  console.log(apakahJalanValid(['n', 'n', 'e', 'e', 's', 's', 'w', 'w', 'n', 's'])); // false