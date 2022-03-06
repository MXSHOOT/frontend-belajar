const names = ["Mikel","Hannah","Jonas"];

/**
 * Foreach: untuk looping data (iterate)
 * Foreach menerima parameter: callback function
 * Foreach sama kaya forof
 */

names.forEach(function(name) {
    console.log('Name saya: ${name}')
});

// names.names.forEach(function(name) => console.log('Name saya: ${name}'));


/**
 * Function map untuk mengupah data.
 * Function map menerima parameter:callback function
 * Function map tidak mengubah data aslinnya
 * Funtion map mengembalikan data baru
 */

const hasil = names.map((name) => 'Mr/Mrs ${name}');

console.log(hasil);