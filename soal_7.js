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

// todo
// Lengkapi fungsi di bawah dengan ketentuan sebagai berikut:
// - Fungsi menerima input string dengan panjang karakter 1-100.
// - Fungsi harus mengembalikan karakter yang ditengah dari string yang diinput.
//    - Jika panjang string bernilai genap, maka yang dikembalikan adalah 2 karakter.
//    - Jika panjang string bernilai ganjil, maka yang dikembalikan adalah 1 karakter.
//
// Contoh:
// Input = getMiddleCharacters("studentindonesia") -> Output = in | Penjelasan: panjang string "studentindonesia" adalah 16 (genap) dan dua karakter paling tengah adalah "in"
// Input = getMiddleCharacters("student")  -> Output = d | Penjelasan: panjang string "student" adalah 7 (ganjil) dan satu karakter paling tengah adalah "d"
// Input = getMiddleCharacters("A")  -> Output = A | Penjelasan: panjang string "A" adalah 1 (ganjil) dan satu karakter paling tengah adalah "A"

function getMiddleCharacters(string) {
   return '';
}

function main() {
    console.log(getMiddleCharacters("studentindonesia") === "in");
    console.log(getMiddleCharacters("student") === "d");
    console.log(getMiddleCharacters("A") === "A");
}

main();

module.exports = { getMiddleCharacters };
