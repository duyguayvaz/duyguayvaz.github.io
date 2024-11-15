// filtreleme fonksiyonu
function filterProjects(category) {
    const projects = document.querySelectorAll('.proje-kartı');
    
    projects.forEach(project => {
        if (category === 'tümü' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


// modal elemanları seçimi
const modal = document.getElementById("proje-modal");
const modalImage = document.getElementById("modal-görsel");
const modalTitle = document.getElementById("modal-başlık");
const modalDescription = document.getElementById("modal-açıklama");
const closeBtn = document.querySelector(".kapatma");

// tüm proje kartlarını seç
const projectCards = document.querySelectorAll(".proje-kartı");

// tıklama olayı
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;
        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;

        // modal içeriklerini ayarla
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // modalı göster
        modal.style.display = "block";
    });
});

// modalı kapatmak için
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// dış kısma tıklanınca kapatmak için
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
