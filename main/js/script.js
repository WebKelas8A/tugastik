//animasi text dan div
const welcomeText = new SplitType("#welcomeText", {types:'words' /* type dibagi menjadi 3, yaitu words untuk kata, line untuk satu baris, dan character / char untuk memisahkan satu huruf dengan huruf lainnya */}); //membuat variabel teks untuk welcome
const groupName = new SplitType("#groupName", { types :'words' }); //membuat variabel teks untuk nama grup

gsap.to(".word" /* style .char berada di style.css */, {
      //membuat animasi yang di inginkan
  y: 0, //ketinggian Y (vertikal) yang di inginkan
  stagger: 0.05, //membuat kata menjadi muncul satu per satu huruf ( karena pada variabel adanya types: 'words'. jadi yang muncul satu per satu kata )
  delay: 0.2, //membuat kata lebih lama munculnya
  duration: 0.1, //waktu durasi untuk muncul
});

//membuat navbar saat discroll kebawah background navbar berganti

const navbar = document.querySelector(".navbar"); //membuat variabel navbar
window.onscroll = function () {
  //membuat sebuah function
  var top = window.scrollY; //membuat variabel top untuk mendefined nilai tinggi
  if (top >= 100) {
    //menentukan kondisi (jika top lebih dari 100)
    navbar.classList.add("scrolled" /* style .scrolled berada di stye.css */); //menambahkan class .scrolled pada navbar
  } else {
    //menentukan kondisi selain nilai top kurang dari 100
    navbar.classList.remove("scrolled"); //menghilangkan class .scrolled pada navbar
  }
};