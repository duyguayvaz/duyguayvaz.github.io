function updateDateTime() {

    // anlık tarih ve saat için date nesnesi 
    const now = new Date();

    // html dosyasında id si date and time olan yere güncel tarih ve saati yazdırmak için
    document.getElementById('tarih').innerText = now.toLocaleDateString(); 
    document.getElementById('saat').innerText = now.toLocaleTimeString(); 
}

// her 1 snde güncellemek için
setInterval(updateDateTime, 1000);

// sayfa açılınca dürekt gözükmesi için
updateDateTime();


// iletişim bölümü
document.getElementById('gönder').onclick = function() {
    // Form alanlarının değerini alır
    const name = document.getElementById('isim').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mesaj').value;
    const errorElement = document.getElementById('hata');

    // Hata mesajını temizler
    errorElement.innerText = '';

    // Boş alanları kontrol eder
    if (name === '' || email === '' || message === '') {
        errorElement.innerText = 'Lütfen tüm alanları doldurun.';
        return; 
    }

    // E-posta formatını kontrol eder
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        errorElement.innerText = 'Lütfen geçerli bir e-posta adresi girin.';
        return; 
    }

    // Tüm kontroller başarılıysa
    errorElement.innerText = 'Mesajınız başarıyla gönderildi.';

    // Form alanlarını sıfırlar
    document.getElementById('isim').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mesaj').value = '';
};

