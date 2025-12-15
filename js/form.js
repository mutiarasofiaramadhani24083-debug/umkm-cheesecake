import { formatPesan } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {

    //VALIDASI FORM KONTAK
    const form = document.getElementById("formKontak");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let valid = true;

            // Nama
            const nama = document.getElementById("nama");
            const errorNama = document.getElementById("errorNama");
            if (nama.value.trim() === "") {
                errorNama.textContent = "Nama wajib diisi.";
                valid = false;
            } else {
                errorNama.textContent = "";
            }

            // Email
            const email = document.getElementById("email");
            const errorEmail = document.getElementById("errorEmail");
            const emailPattern = /^[^ ]+@gmail\.com$/i;
            if (!emailPattern.test(email.value)) {
                errorEmail.textContent = "Email harus @gmail.com dan format benar.";
                valid = false;
            } else {
                errorEmail.textContent = "";
            }

            // Kategori
            const kategori = document.getElementById("kategori");
            const errorKategori = document.getElementById("errorKategori");
            if (kategori.value === "") {
                errorKategori.textContent = "Pilih salah satu kategori.";
                valid = false;
            } else {
                errorKategori.textContent = "";
            }

            // Pesan
            const pesan = document.getElementById("pesan");
            const errorPesan = document.getElementById("errorPesan");
            if (pesan.value.trim().length < 10) {
                errorPesan.textContent = "Pesan minimal 10 karakter.";
                valid = false;
            } else {
                errorPesan.textContent = "";
            }

            // Jika valid → pakai modul formatPesan
            if (valid) {
                const hasil = formatPesan(nama.value, kategori.value, pesan.value);
                alert(hasil);
                form.reset();
            }
        });

        // Realtime: Nama
        const namaInput = document.getElementById("nama");
        namaInput.addEventListener("blur", function () {
            const errorNama = document.getElementById("errorNama");
            if (this.value.trim() === "") {
                errorNama.textContent = "Nama wajib diisi.";
            } else {
                errorNama.textContent = "";
            }
        });

        // Realtime: Pesan minimal
        const pesanInput = document.getElementById("pesan");
        pesanInput.addEventListener("input", function () {
            const errorPesan = document.getElementById("errorPesan");
            if (this.value.trim().length < 10) {
                errorPesan.textContent = "Pesan minimal 10 karakter.";
            } else {
                errorPesan.textContent = "";
            }
        });
    }


    //LANGGANAN NEWSLETTER
    const langgananCheckbox = document.getElementById("langganan");
    if (langgananCheckbox) {
        langgananCheckbox.addEventListener("change", function () {
            if (this.checked) {
                alert("Terima kasih telah berlangganan newsletter!");
            }
        });
    }


    //MODAL WEBINAR + VALIDASI
    (function () {
        const openBtn = document.getElementById('openWebinarBtn');
        const modal = document.getElementById('webinarModal');
        const closeBtn = document.getElementById('closeWebinarBtn');

        function openModal() {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
            const first = document.getElementById('wNama');
            if (first) first.focus();
        }

        function closeModal() {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }

        if (openBtn) openBtn.addEventListener('click', openModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

        // Validasi Webinar
        const form = document.getElementById('formWebinar');
        if (!form) return;

        const wNama = document.getElementById('wNama');
        const wEmail = document.getElementById('wEmail');
        const wHp = document.getElementById('wHp');
        const wTopik = document.getElementById('wTopik');
        const wAgree = document.getElementById('wAgree');

        const errNama = document.getElementById('errorWNama');
        const errEmail = document.getElementById('errorWEmail');
        const errHp = document.getElementById('errorWHp');
        const errTopik = document.getElementById('errorWTopik');
        const errAgree = document.getElementById('errorWAgree');
        const global = document.getElementById('wFormGlobal');

        function showError(el, msg) { el.textContent = msg; }
        function clearError(el) { el.textContent = ''; }

        function validateNama() {
            const v = wNama.value.trim();
            if (v.length < 3) { showError(errNama, 'Nama minimal 3 karakter.'); return false; }
            clearError(errNama); return true;
        }

        function validateEmail() {
            const v = wEmail.value.trim();
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(v)) { showError(errEmail, 'Format email tidak valid.'); return false; }
            const domain = v.split('@').pop().toLowerCase();
            if (domain === 'yahoo.com') { showError(errEmail, 'Mohon gunakan email selain yahoo.com.'); return false; }
            clearError(errEmail); return true;
        }

        function validateHp() {
            if (!/^[0-9]+$/.test(wHp.value.trim())) { showError(errHp, 'No HP hanya boleh berisi angka.'); return false; }
            clearError(errHp); return true;
        }

        function validateTopik() {
            if (wTopik.value === '') { showError(errTopik, 'Pilih topik webinar.'); return false; }
            clearError(errTopik); return true;
        }

        function validateAgree() {
            if (!wAgree.checked) { showError(errAgree, 'Anda harus menyetujui syarat & ketentuan.'); return false; }
            clearError(errAgree); return true;
        }

        // Realtime
        wNama.addEventListener('input', validateNama);
        wEmail.addEventListener('input', validateEmail);
        wHp.addEventListener('input', validateHp);
        wTopik.addEventListener('change', validateTopik);
        wAgree.addEventListener('change', validateAgree);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            global.textContent = '';

            const v1 = validateNama();
            const v2 = validateEmail();
            const v3 = validateHp();
            const v4 = validateTopik();
            const v5 = validateAgree();

            if (v1 && v2 && v3 && v4 && v5) {
                global.style.color = 'green';
                global.textContent = '✅ Pendaftaran berhasil! Terima kasih.';
                form.reset();
                setTimeout(closeModal, 1000);
            } else {
                global.style.color = 'red';
                global.textContent = '⚠️ Perbaiki field yang bermasalah.';
            }
        });

    })();

});
