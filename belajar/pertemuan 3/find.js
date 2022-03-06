/**
 * Membuat array of object
 */

const users = [
    {
        name: "Faris",
        age: 15,
    },
    {
        name: "Hannah",
        age: 20,
    },
    {
        name: "Jonas",
        age: 25,
    },
];

/**
 * Find Mecari 1 Data
 * Filter Mencari Semua data
 */

const hasil = users.find(function(user) {
    return user.age > 18;
});

// const hasil = users.filter(function(user) {
//     return user.age > 18;
// });

console.log(hasil);