// ===============================
// VALIDASI FORM LOGIN
// ===============================
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan password wajib diisi!");
    } else {
        alert("Data login sudah lengkap!");
    }
}


// ===============================
// VALIDASI FORM REGISTER
// ===============================
function cekRegister() {
    let nama = document.getElementById("nama").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let konfirmasiPassword = document.getElementById("konfirmasi").value;
    let kelas = document.getElementById("kelas").value;

    if (nama === "" || username === "" || password === "") {
        alert("Data penting harus diisi!");
    } 
    else if (password.length < 8) {
        alert("Password minimal 8 karakter!");
    } 
    else if (password !== konfirmasiPassword) {
        alert("Password dan konfirmasi password tidak sama!");
    } 
    else if (kelas === "" || kelas === "-- Pilih Kelas --") {
        alert("Silakan pilih kelas!");
    } 
    else {
        alert("Data registrasi valid!");
    }
}


// ===============================
// MENJALANKAN LOGIN & REGISTER
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector("form");

    if (form) {

        // Mematikan validasi bawaan browser
        // supaya alert JavaScript kita yang muncul
        form.noValidate = true;

        form.addEventListener("submit", function (event) {

            // Mencegah halaman berpindah
            event.preventDefault();

            // Jika ada id "konfirmasi",
            // berarti halaman REGISTER
            if (document.getElementById("konfirmasi") !== null) {
                cekRegister();
            }

            // Jika tidak ada "konfirmasi",
            // berarti halaman LOGIN
            else {
                cekLogin();
            }
        });
    }
});


// ===============================
// FUNCTION BARU
// ===============================
function tampilkanPesan() {
    alert("Selamat belajar JavaScript!");
}


// ===============================
// CHALLENGE NILAI
// ===============================
let nilai = 75;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}


// ===============================
// CHALLENGE GAME
// ===============================
let nyawa = 3;

if (nyawa > 0) {
    console.log("Game masih berjalan");
} else {
    console.log("Game Over");
}