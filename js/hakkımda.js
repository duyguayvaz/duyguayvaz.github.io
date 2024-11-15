// toogle, buton metnini dinamik olarak değiştirir
function toggleText() {
    const moreText = document.getElementById("fazla-bio");
    const toggleBtn = document.getElementById("fazla-buton");

    // eğer fazlalık metin gizliyse
    if (moreText.style.display === "none") {
        // metni görünür yapar
        moreText.style.display = "inline";
        // butonun yazısını değiştirir
        toggleBtn.textContent = "Daha Az Göster";
    } else {
        moreText.style.display = "none";
        toggleBtn.textContent = "Daha Fazla Göster";
    }
}
