const javaTexte= document.querySelector("#texteJava");
const java = document.querySelector("#java");



java.addEventListener("click", function () {
    if (javaTexte.classList.contains("texteOrange")) {
        javaTexte.classList.remove("texteOrange")
        javaTexte.classList.add("texteNoir")
    } 
    else {
        javaTexte.classList.remove("texteNoir")
        javaTexte.classList.add("texteOrange")
      
    }
  });