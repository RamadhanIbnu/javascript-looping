/*
Soal No.1

Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.

Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman
HTML.

Lakukan FOR LOOP pada Javascript. */

for (i=1; i<=100;i++){
    console.log("User ke- " + i);
}

/*
Soal No.2

Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.

Nilai awal = 0

Pengulangan = 10 kali

Nilai awal ditambah 2 setiap pengulangan

Tampilan hasil penambahan pada setiap pengulangan*/

let nilai1=0;
let hasil
for (nilai1; nilai1<10;nilai1++){
    console.log(hasil= nilai1+2);
}

/*
Soal No.3
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.

Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.

Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan*/

for (i=0; i<=20; i++){
    if(i % 2 == 0){
        console.log(i+ " adalah nilai genap");
    }
    else{
        console.log(i+ " adalah nilai ganjil");
    }
}

/*
Soal No.4

Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();

Berikan teks ‘Apakah anda mau mengulang’ pada box confirm

Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama

Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak
…(jumlah klik OK yang dilakukan user)*/

let checkUser = true;
let jmlclick= 0;

while (checkUser){
    console.log(jmlclick += 1)
    checkUser = confirm("Apakah anda mau mengulang?");
}
alert("Perulangan sudah dilakukan sebanyak " + (jmlclick-1) + " kali" );

/*
Soal No.5
Buat sebuah program kuis.

Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB
(Impact Byte)?’

Lakukan pengecekan apakah jawaban dari user sudah benar

Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’

Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar*/








