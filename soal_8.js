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

function main() {
    console.log(concatString("Hello", "Student") === "HelloStudent");
    console.log(concatString("", "Student") === "Student");
    console.log(concatString("Student ", "Indonesia") === "Student Indonesia");
}

/// SILAKAN UBAH FILE INI DARI HANYA DARI LINE 26 SAMPAI BAWAH.
/// Pastikan tidak menggandung keyword 'function' dan karakter '{' & '}
/// Pastikan tidak mengubah nama 'concatString'
const concatString = (string1, string2) => "";
main();

module.exports = { concatString };
