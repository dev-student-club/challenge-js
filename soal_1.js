/// **************************************************************************************************
///                               Perhatian                                                          *
///                                                                                                  *
///          Agar dapat diperiksa dengan baik, hindari beberapa hal berikut:                         *
///                                                                                                  *
///          1. Mengubah kode yang berada di dalam fungsi main()                                     *
///          2. Mengubah atau menghapus kode yang sudah ada secara default                           *
///          3. Membuat fungsi baru yang bukan merupakan tugas latihan                               *
///          4. Mengubah struktur project (menghapus, mengedit, dan memindahkan package)             *
///                                                                                                  *
///*************************************************************************************************


// todo 1
// Sesuaikan fungsi di bawah ini dengan kode untuk mengecek apakah parameter number
// merupakan angka genap
function isEvenNumber(number) {
    return false;
}

// todo 2
// Sesuaikan fungsi di bawah ini dengan kode untuk mengecek apakah parameter number
// lebih dari 5
function moreThanFive(number) {
    return false;
}

// todo 3
// Sesuaikan fungsi di bawah ini agar dapat menghasilkan nilai akhir dengan
// rumus:
//
//      param * (param + 10)
function result(number) {
    return 0;
}

function main() {
    // Generate an array with numbers from 1 to 100
    const listNumber = Array.from({ length: 100 }, (_, index) => index + 1);
    for (const number of listNumber) {
        if (isEvenNumber(number)) continue;

        if (moreThanFive(number)) break;

        const resultValue = result(number);
        console.log(`range result is ${resultValue}`);
    }
}

main();

module.exports = { isEvenNumber, moreThanFive, result };
