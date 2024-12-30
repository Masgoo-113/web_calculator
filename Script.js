function hitung() {
    // Ambil nilai input dari user
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    const operator = document.getElementById('operator').value;

    let hasil;

    // Lakukan operasi berdasarkan operator yang dipilih
    if (isNaN(bil1) || isNaN(bil2)) {
        hasil = 'Masukkan bilangan yang valid!';
    } else {
        switch (operator) {
            case 'tambah':
                hasil = bil1 + bil2;
                break;
            case 'kurang':
                hasil = bil1 - bil2;
                break;
            case 'kali':
                hasil = bil1 * bil2;
                break;
            case 'bagi':
                hasil = bil1 / bil2;
                break;
            default:
                hasil = 'Operator tidak valid';
        }
    }

    // Tampilkan hasil
    document.getElementById('hasil').value = hasil;
}