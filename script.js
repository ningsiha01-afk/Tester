const video = document.getElementById("coverVideo");
const btnBuka = document.getElementById("btnBuka");
const tampilanAwal = document.getElementById("tampilanAwal");
const tampilanAkhir = document.getElementById("tampilanAkhir");
const music = document.getElementById("bgMusic");

/* awal */
video.pause();
document.body.style.overflow = "hidden";

/* klik buka undangan */
btnBuka.addEventListener("click", async () => {

  /* sembunyikan isi cover */
  const content = document.querySelector(".cover-content");

  content.style.transition = "0.8s";
  content.style.opacity = "0";

  try{

    /* video play */
    await video.play();

    /* music play */
    await music.play();

  }catch(err){
    console.log(err);
  }

});

/* video selesai */
video.addEventListener("ended", () => {

  tampilanAkhir.classList.add("active");

  document.body.style.overflow = "auto";

});


// AYAT

// EFEK MUNCUL SAAT SCROLL

const ayatBox = document.querySelector('.ayat-box');
const flowerLeft = document.querySelector('.ayat-flower-left');
const flowerRight = document.querySelector('.ayat-flower-right');

window.addEventListener('scroll', () => {

  const position = ayatBox.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if(position < screen - 100){

    ayatBox.style.opacity = "1";
    ayatBox.style.transform = "translateY(0)";

    flowerLeft.classList.add("show");
    flowerRight.classList.add("show");
  }

});


// MEMPELAI

const mempelaiFlowers =
document.querySelectorAll('.mempelai .flower, .mempelai .flower-side');

function showFlower(){

  mempelaiFlowers.forEach(flower => {

    const posisi =
    flower.getBoundingClientRect().top;

    if(posisi < window.innerHeight - 100){
      flower.classList.add('show');
    }

  });

}

window.addEventListener('scroll', showFlower);
showFlower();

// ZOOM MEMPELAI

const mempelaiItems = document.querySelectorAll(
  '.subtitle, .desc, .card-mempelai, .simbol'
);

function showMempelai() {

  mempelaiItems.forEach(item => {

    const posisi = item.getBoundingClientRect().top;

    if (posisi < window.innerHeight - 100) {
      item.classList.add('show');
    }

  });

}

window.addEventListener('scroll', showMempelai);
showMempelai();




// TANGGAL ACARA COUNTDOWN
const weddingDate = new Date("Dec 20, 2026 08:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){

    clearInterval(countdown);

    document.querySelector(".countdown-box").innerHTML =
      "<h3>Acara Telah Dimulai</h3>";

  }

}, 1000);


/* =========================
   SCROLL ANIMATION
========================= */

const fadeUp = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {

  fadeUp.forEach(item => {

    const rect = item.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){
      item.classList.add('show');
    }

  });

});



// =========================
// LOVE STORY
// =========================

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      item.classList.add('show');
    }

  });

});

const flowers = document.querySelectorAll('.love-flower');

window.addEventListener('scroll', () => {

  flowers.forEach(flower => {

    const posisi = flower.getBoundingClientRect().top;

    if(posisi < window.innerHeight - 100){
      flower.classList.add('show');
    }

  });

});


// =========================
// OUR GALLERY (KODE BARU)
// =========================
const popup = document.getElementById("galleryPopup");
const popupImg = document.getElementById("popupImg");

const images = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;

images.forEach((img, index)=>{
    img.addEventListener("click",()=>{
        currentIndex = index;
        showImage();
        popup.classList.add("active");
    });
});

function showImage(){
    popupImg.src = images[currentIndex].src;
}

// Menggunakan addEventListener + stopPropagation agar aman dari bubble event
const closeGallery = document.getElementById("closeGallery");

closeGallery.addEventListener("click", function(e){
    e.stopPropagation();
    popup.classList.remove("active");
});

document.querySelector(".next-photo").onclick = (e)=>{
    if(e) e.stopPropagation();
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
};

document.querySelector(".prev-photo").onclick = (e)=>{
    if(e) e.stopPropagation();
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage();
};

/* SWIPE HP */
let startX = 0;

popup.addEventListener("touchstart",(e)=>{
    startX = e.touches[0].clientX;
}, { passive: true });

popup.addEventListener("touchend",(e)=>{
    // Mencegah fungsi swipe berjalan kalau user menyentuh tombol close/navigasi
    if (
        e.target.classList.contains("close-popup") || 
        e.target.classList.contains("next-photo") || 
        e.target.classList.contains("prev-photo")
    ) {
        return; 
    }

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        showImage();
    }

    if(endX - startX > 50){
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }
        showImage();
    }
});



// =========================
// OPEN POPUP (WEDDING GIFT)
// =========================

const openGift = document.getElementById('openGift');
const closeGift = document.getElementById('closeGift');
const giftPopup = document.getElementById('giftPopup');

openGift.addEventListener('click', () => {
  giftPopup.classList.add('active');
});

closeGift.addEventListener('click', () => {
  giftPopup.classList.remove('active');
});

// CLOSE SAAT KLIK LUAR

giftPopup.addEventListener('click', (e) => {

  if(e.target === giftPopup){
    giftPopup.classList.remove('active');
  }

});

// =========================
// COPY REKENING
// =========================

function copyRek(id){

  const text =
  document.getElementById(id).innerText;

  navigator.clipboard.writeText(text);

  alert('Nomor rekening berhasil di copy');

}

// =========================
// COPY ALAMAT
// =========================

function copyAlamat(){

  navigator.clipboard.writeText(
    'Jl. Dipatiukur Kota Bandung Jawa Barat'
  );

  alert('Alamat berhasil di copy');

}




// =========================
// BEST WISHES
// =========================

const wishForm = document.getElementById('wishForm');
const wishList = document.getElementById('wishList');

wishForm.addEventListener('submit', function(e){

  e.preventDefault();

  // AMBIL VALUE
  const nama =
  document.getElementById('nama').value;

  const ucapan =
  document.getElementById('ucapan').value;

  // BUAT CARD
  const card =
  document.createElement('div');

  card.classList.add('wish-card');

  card.innerHTML = `
    <h4>${nama}</h4>
    <p>${ucapan}</p>
  `;

  // MASUKKAN KE LIST
  wishList.prepend(card);

  // RESET FORM
  wishForm.reset();

});


