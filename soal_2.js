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
// Sesuaikan fungsi di bawah ini agar dapat mengembalikkan nilai dengan rumus
// perhitungan berikut:
//
//      valueA + (valueB - valueC)
//
// Jika valueC bernilai null, silakan tetapkan nilai 50 sebagai nilai default-nya
// In JavaScript, handling of null will need to be explicitly defined if used outside this scope
function calculate(valueA, valueB, valueC) {
    return 0;
}

// todo 2
// Sesuaikan fungsi di bawah ini agar dapat mengembalikkan text seperti berikut:
//
//      Result is $result
function resultText(result) {
    return "";
}

function main() {
    const valueA = 101;
    const valueB = 52;
    const valueC = 99;

    const resultA = calculate(valueA, valueB, valueC);
    const resultB = calculate(valueA, valueB, null);

    console.log(resultText(resultA));
    console.log(resultText(resultB));
}

main();

module.exports = { calculate, resultText };
