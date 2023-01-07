const nuit = document.querySelector("#nuit");
const body = document.querySelector("body");
const milieu = document.querySelector(".container");
const iim = document.querySelector(".presentationiim");
const localisation = document.querySelector(".ecoleIIM");
const modeLuneSoleil = document.querySelector("#lune");



nuit.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.add("modeNuit");
    body.classList.remove("light");
    document.getElementById("lune").src = "assets/images/soleil.png";
    nuit.innerHTML = "Mode ☀️";
  } else {
    body.classList.remove("modeNuit");
    body.classList.add("light");
    document.getElementById("lune").src = "assets/images/lune.png";
    nuit.innerHTML = "Mode 🌚";
  }
  if (milieu.classList.contains("light")) {
    milieu.classList.remove("light");
    milieu.classList.add("modeNuit");
  } else {
    milieu.classList.remove("modeNuit");
    milieu.classList.add("light");

  }

  if (iim.classList.contains("clair_orange")) {
    iim.classList.remove("clair_orange");
    iim.classList.add("modeNuitIIM");
  } else {
    iim.classList.remove("modeNuitIIM");
    iim.classList.add("clair_orange");

  }

  if (localisation.classList.contains("clair_loca")) {
    localisation.classList.remove("clair_loca");
    localisation.classList.add("modeNuitIIMLoca");
  } else {
    localisation.classList.remove("modeNuitIIMLoca");
    localisation.classList.add("clair_loca");

  }

  if (nuit.classList.contains("myButton")) {
    nuit.classList.remove("myButton");
    nuit.classList.add("myButtonSun");
  } else {
    nuit.classList.remove("myButtonSun");
    nuit.classList.add("myButton");

  }

});

// ------------------------------------------------------------------------------------
modeLuneSoleil.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.add("modeNuit");
    body.classList.remove("light");
    document.getElementById("lune").src = "assets/images/soleil.png";
    nuit.innerHTML = "Mode ☀️";
  } else {
    body.classList.remove("modeNuit");
    body.classList.add("light");
    document.getElementById("lune").src = "assets/images/lune.png";
    nuit.innerHTML = "Mode 🌚";
  }
  if (milieu.classList.contains("light")) {
    milieu.classList.remove("light");
    milieu.classList.add("modeNuit");
  } else {
    milieu.classList.remove("modeNuit");
    milieu.classList.add("light");

  }

  if (iim.classList.contains("clair_orange")) {
    iim.classList.remove("clair_orange");
    iim.classList.add("modeNuitIIM");
  } else {
    iim.classList.remove("modeNuitIIM");
    iim.classList.add("clair_orange");

  }

  if (localisation.classList.contains("clair_loca")) {
    localisation.classList.remove("clair_loca");
    localisation.classList.add("modeNuitIIMLoca");
  } else {
    localisation.classList.remove("modeNuitIIMLoca");
    localisation.classList.add("clair_loca");

  }

  if (nuit.classList.contains("myButton")) {
    nuit.classList.remove("myButton");
    nuit.classList.add("myButtonSun");
  } else {
    nuit.classList.remove("myButtonSun");
    nuit.classList.add("myButton");

  }

});
//---------------------------------------------------------------------------------

// Fait apparaitre une image en scrollant 

// window.addEventListener("scroll", function(){
//   const{scrollTop, clientHeight } = this.document.documentElement;
//   // console.log(scrollTop,clientHeight)
//   const topElement = logoIIM.getBoundingClientRect().top;

//   if (scrollTop > (scrollTop +  topElement).toFixed()-clientHeight * 0.50){
//     logoIIM.classList.add("active");
//   }
// })

const windowHeight = 990;
const logoIIM = document.querySelector(".image_iim_anime");
const texteIIM = document.querySelector(".parttexte")
const map = document.querySelector(".map")

window.addEventListener("scroll", function (event) {
  let ratio = (Math.ceil((window.scrollY / windowHeight) * 100)) 
  if (ratio > 80) {
    logoIIM.classList.add("active")
    texteIIM.classList.add("active")
  }
  if (ratio > 130) {
    map.classList.add("active")
  }
})

//-------------------------------------------------------------------------

// Créer les blocs en HTML
// Créer les styles Css (couleur sur nos blocs, transition CSS)
// JS : 
// 1. Selectionner le bouton + cartes
// 2. Implémenter l'ecoute d'un évènement clique
// 3. Action qui s'applique / Fonction

const button = document.querySelector(".transi");
const container = document.querySelector(".transiDeco");
const cards = document.querySelectorAll(".deco");

window.addEventListener("scroll", function () {
  let ratio = (Math.ceil((window.scrollY / windowHeight) * 100))
  // cards[0].classList.toggle("active");
  if (ratio > 35) {
    for (i = 0; i < 6; i++) {
      cards[i].classList.add("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
  }
  if (ratio < 65) {
    for (i = 0; i < 6; i++) {
      cards[i].classList.remove("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
  }
});

// -----------------------------
// Crée un évenement qui permet de de changer la couleur du prénom Raphaël Chiche dés qu'on clique dessus

const titre = document.querySelector("#prenom_nom");

titre.addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Variable qui permet de génerer un code en hexadecimal (la variable est dans la 
  //fonction afin que la valeur change à chaque clique)
  document.getElementById("prenom_nom").style.color = "#" + randomColor;
})

// ------------------------------------------------------


 const apparaitreImg = document.querySelector(".apparaitreImg");
  const js_img1=document.querySelector(".js-img1");
 apparaitreImg.addEventListener("click",function(){
    const parttexte = document.querySelector(".parttexte");
    if(js_img1.classList.contains("none")){
      js_img1.classList.remove("none")
    }else{
      js_img1.classList.add("none")
    }
    
    

    // if( js_img1.src = "assets/images/mars/cockpit_card.png"){
    //   parttexte.removeChild(js_img1)
    // }
    
 })
// -------------------
const h1 = document.querySelector("h1");
const italic = document.querySelector(".italicButton")

italic.addEventListener("click",function(){
  h1.classList.toggle("italic")
})
