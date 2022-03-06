/**
 * download: 3 detik
 * verfy: 2 detik
 * notify: menampilkan basil
 */

function download() {
    /**
     * Membuat promise: new Promise
     * Promise membutuhkan 2 parms: resolve dan reject
     */
    return new Promise(function(resolve,reject) {
        setTimeout(function () {
            console.log("Proses download 3 detik");
        },3000);  
    });
}

function verify(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("Proses download 2 detik");
        }, 2000);
    });
}

function notify() {
    console.log("Selesai download");
}

function main() {
    download()
        .then(function(hasil) {
            console.log(hasil);
            return verify();
        })
        .then(function(hasil) {
            console.log(hasil);
            notify();
        })
        .catch((err)=> {
            console.log(error);
        });
}

// async function main() {
//     console.log(await download());
//     console.log(await verify());
//     notify();
// }

main();