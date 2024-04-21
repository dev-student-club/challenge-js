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
// Lengkapi fungsi di bawah dengan ketentuan sebagai berikut:
// - Fungsi menerima input string dan integer dengan rentang 1-100.
// - Fungsi harus mengembalikan string dengan ketentuan:
//    - Jika string mengandung angka, maka kalikan angka pada string dengan angka yang diinput.
//      Kemudian gabungkan string yang diinput dengan hasil kali tersebut.
//    - Jika string tidak mengandung angka, maka gabungkan string yang diinput dengan angka yang diinput.
//
// Contoh:
// Input = manipulateString("student123", 10) -> Output = student1230 | Penjelasan: string mengandung angka 123. 123*10 = 1230 -> student1230
// Input = manipulateString("Student000010", 100) -> Output = Student1000 | Penjelasan: string mengandung angka 000010. Empat 0 di awal tidak dianggap, jadi 10 *100 = 1000 -> Student1000
// Input = manipulateString("student", 100) -> Output = student100 | Penjelasan: string tidak mengandung angka. Langsung gabungkan student dengan 100 -> student100
//
function manipulateString(str, number) {
    return "";
}

function main() {
    console.log(manipulateString("Student000010", 100) === "Student1000");
    console.log(manipulateString("student", 99) === "student99");
    console.log(manipulateString("student123", 10) === "student1230");
}

main();

module.exports = { manipulateString };
