document.getElementById('kotaAsal').addEventListener('change', function() {
    updateTotalBiaya(); // Panggil fungsi updateTotalBiaya() saat kota asal berubah
});

// Menambahkan event listener untuk elemen kotaTujuan
document.getElementById('kotaTujuan').addEventListener('change', function() {
    updateTotalBiaya(); // Panggil fungsi updateTotalBiaya() saat kota tujuan berubah
});

function hitungBiaya() {
    const beratBarang = parseFloat(document.getElementById("beratBarang").value);
    const kotaAsal = document.getElementById("kotaAsal").value;
    const kotaTujuan = document.getElementById("kotaTujuan").value;
    
    if (!nomorResi || isNaN(beratBarang) || beratBarang <= 0 || !kotaAsal || !kotaTujuan) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon isi semua data dengan benar!',
        });
        return; // Berhenti jika validasi gagal
    }
    // Biaya berat
    let biayaBerat = 0;
    if (beratBarang <= 1) {
        biayaBerat = 1500;
    } else if (beratBarang <= 5) {
        biayaBerat = 2500;
    } else if (beratBarang <= 10) {
        biayaBerat = 3500;
    } else {
        biayaBerat = 4500;
    }
    
    // Biaya jarak
    const biayaJarak = {
        "Banyuwangi": { "Banyuwangi": 5000, "Jember": 7500, "Probolinggo": 10000, "Surabaya": 15000 },
        "Jember": { "Banyuwangi": 7500, "Jember": 5000, "Probolinggo": 85000, "Surabaya": 12500 },
        "Probolinggo": { "Banyuwangi": 10000, "Jember": 8500, "Probolinggo": 5000, "Surabaya": 6500 },
        "Surabaya": { "Banyuwangi": 15000, "Jember": 12500, "Probolinggo": 6500, "Surabaya": 5000 }
    };
    
    const biayaJarakTujuan = biayaJarak[kotaAsal][kotaTujuan];
    
    const totalBiaya = biayaBerat + biayaJarakTujuan;
    document.getElementById("totalBiaya").value = "Rp. " + totalBiaya;
}
