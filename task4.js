function singkatanNama(namaLengkap) {

    namaLengkap = namaLengkap.trim();
    const namaBagian = namaLengkap.split(/[\s-]+/);


    let singkatan = '';

    for (let i = 0; i < namaBagian.length; i++) {
        let bagianNama = namaBagian[i];

        if (bagianNama.toLowerCase() === 'von') {
            singkatan += 'v';
        } else {
            singkatan += bagianNama[0].toUpperCase();
        }
    }

    return singkatan;
}


console.log(singkatanNama('Thomas Meyer')); // Output: TM
console.log(singkatanNama('martin schmidt')); // Output: MS
console.log(singkatanNama('Jan-Erich Schmidt')); // Output: JES
console.log(singkatanNama('Jan Erich Mueller')); // Output: JEM

console.log(singkatanNama('Paul von Lahnstein')); // Output: Pvl
console.log(singkatanNama('Martin von Lahnstein-Meyer')); // Output: MvLM
