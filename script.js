

const namaUMKM = "Nasi Padang Pagi-Sore";
let jumlahProduk = 7;

console.log("=== SISTEM INFORMASI UMKM ===");
console.log("Nama UMKM:", namaUMKM);
console.log("Stok Awal:", jumlahProduk);


jumlahProduk += 1;
jumlahProduk -= 1;
console.log("Stok Terkini:", jumlahProduk);


let olahanAyam = 2;
let olahanSapi = 3;
let olahanTelur = 2;
let totalJenis = olahanAyam + olahanSapi + olahanTelur;

console.log(`Total Varian Menu: ${totalJenis} jenis hidangan.`);


const testimoniProduk = [
    "Rendangnya empuk dan bumbunya meresap!",
    "Ayam bakarnya gurih banget 😋",
    "Pelayanannya cepat dan ramah.",
    "Tempat bersih dan nyaman."
];

console.log("\n=== APA KATA MEREKA? ===");
testimoniProduk.forEach((pesan, index) => {
    console.log(`${index + 1}. "${pesan}"`);
});


function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

$(document).ready(function () {


    console.log("jQuery Siap Digunakan!");



    $('#formWebinar').on('submit', function (e) {
        e.preventDefault();


        let nama = $('#webinar_nama').val().trim();
        let email = $('#webinar_email').val().trim();
        let nohp = $('#webinar_nohp').val().trim();
        let topik = $('#webinar_topik').val();
        let syarat = $('#webinar_syarat').is(':checked');

        let isValid = true;
        let pesanError = "";


        $('.form-control, .form-select').removeClass('is-invalid');


        if (nama === "") {
            $('#webinar_nama').addClass('is-invalid');
            isValid = false;
        }


        if (email === "" || email.includes("@yahoo.com")) {
            $('#webinar_email').addClass('is-invalid');
            pesanError += "Email tidak boleh kosong atau menggunakan Yahoo.\n";
            isValid = false;
        }


        if (nohp === "" || !/^[0-9]+$/.test(nohp)) {
            $('#webinar_nohp').addClass('is-invalid');
            isValid = false;
        }


        if (!syarat) {
            $('#webinar_syarat').addClass('is-invalid');
            alert("Anda harus menyetujui syarat & ketentuan!");
            isValid = false;
        }


        if (isValid) {
            alert(`Pendaftaran Berhasil!\nNama: ${nama}\nTopik: ${topik}`);

            $('#formWebinar')[0].reset();
            $('.form-control').removeClass('is-invalid');
        } else {
            if (pesanError) alert(pesanError);
        }
    });




    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing');
    });


    $(window).resize(function () {
        console.log("Lebar layar saat ini: " + $(window).width() + "px");
    });

});