// Memberi tahu mahasiswa bahwa script berhasil di-load
alert('Selamat datang di Website Profil UMKM Sweet Cheese Cake!');

// Menampilkan informasi variabel di console
const namaUMKM = 'Sweet Cheese Cake';
console.log('Nama UMKM:', namaUMKM);

// Menyapa pengguna dengan nama usaha
alert('Terima kasih sudah mengunjungi halaman produk kami!');
alert('Kami siap menggoda lidah Anda dengan aneka varian Cheese Cake.');

// Demonstrasi variabel dan operator
let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan produk baru:', produk);

// Variabel tambahan untuk penerapan hal lain
let produkChocolate = 10; // jumlah slice 
let produkStrawberry = 10;
let produkMatcha = 8;
let produkLotus = 5;
let produkBurnCheese = 2; // loyang

// Menampilkan informasi di console
console.log('Jumlah produk Chocolate:', produkChocolate);
console.log('Jumlah produk Strawberry:', produkStrawberry);
console.log('Jumlah produk Matcha:', produkMatcha);
console.log('Jumlah produk Lotus:', produkLotus);
console.log('Jumlah produk Burn Cheese Cake:', produkBurnCheese);

// Hitung total semua produk
let totalProduk = produkChocolate + produkStrawberry + produkMatcha + produkLotus + produkBurnCheese;
console.log('Total keseluruhan produk di stok:', totalProduk);

// Tambahan operator untuk simulasi stok
totalProduk -= 4; 
console.log('Setelah penjualan, sisa produk sekarang:', totalProduk);

// Pesan akhir ke pengguna
alert('Saat ini kami memiliki total ' + totalProduk + ' produk yang siap dinikmati! 🍰');

// Nilai rating untuk masing-masing produk (bisa kamu ubah sesuai data)
let ratings = [4.8, 4.2, 3.5, 3.0, 5.0];

// Ambil semua elemen yang punya class "hasil-rating"
let elemenRatings = document.querySelectorAll(".hasil-rating");

// Loop setiap produk dan tampilkan rating-nya
elemenRatings.forEach((el, i) => {
  let rating = ratings[i];

  if (rating >= 4.5) {
    el.textContent = "★★★★★ Sangat Direkomendasikan";
  } else if (rating >= 3) {
    el.textContent = "★★★★ Direkomendasikan";
  } else {
    el.textContent = "★★ Tidak Direkomendasikan";
  }
});
