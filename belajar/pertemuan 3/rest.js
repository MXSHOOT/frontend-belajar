/**
 * Membuat fungsi sum untuk menjumlahkan semua bilangan.
 * parameter harus dinamis:rest parms
 */

function sum(...numbers) {
    let hasil = 0;

    for (const number of numbers){
        hasil = hasil + number;
    }

    console.log(hasil);
}

sum(1,2,3,4,5);