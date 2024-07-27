function kombisnasi(str1, str2, str3) {
    if (str1.length !== str2.length || str1.length !== str3.length || str2.length !== str3.length) {
        return("Semua string input harus memiliki panjang yang sama");
    }

    let result = '';


    for (let i = 0; i < str1.length; i++) {   
        let chars = [str1[i], str2[i], str3[i]];
        chars.sort();
        result += chars.join('');
    }

    return result;
}

console.log(kombisnasi("aa", "bb","cc")); 
