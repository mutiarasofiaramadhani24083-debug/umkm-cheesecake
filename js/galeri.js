// === Modul Galeri (ES6 Module) ===

// 1️⃣ Ambil semua item galeri (pakai query modern)
const galeriItems = document.querySelectorAll(".galeri-item");

// 2️⃣ Fitur ES6: fungsi helper pakai arrow function + template literal
const tampilNama = (element, nama) => {
  element.textContent = `${nama}`;
};

// 3️⃣ Loop modern forEach (ES6)
galeriItems.forEach((item) => {
  // 4️⃣ Destructuring (ES6)
  const img = item.querySelector("img");
  const namaTeks = item.querySelector(".nama-produk");

  const { namaProduk } = item.dataset;

  if (!img || !namaTeks) return;

  let timer; // timer buat auto-hide

  // === Event Klik: tampilkan nama produk ===
  img.addEventListener("click", () => {
    tampilNama(namaTeks, namaProduk);
    namaTeks.classList.add("muncul");

    // reset timer kalau diklik berkali-kali
    clearTimeout(timer);

    // Auto-hide 2 detik
    timer = setTimeout(() => {
      namaTeks.classList.remove("muncul");
    }, 2000);
  });

  // Hover efek
  img.addEventListener("mouseenter", () => img.classList.add("hover-aktif"));
  img.addEventListener("mouseleave", () => img.classList.remove("hover-aktif"));
});

// Spread operator (ES6)
const totalFoto = [...galeriItems].length;
console.log(`Total foto di galeri: ${totalFoto}`);
