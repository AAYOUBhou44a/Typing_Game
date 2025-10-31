const texte = "JavaScript allows developers to create interactive and dynamic websites that engage users and enhance the browsing experience.";
const texteDiv = document.querySelector(".texte");
let input = document.querySelector(".input");
let conteur = 0;
const spans = [];
let tempsRestant = 60;
let correct = 0;
let incorrect = 0;
let timer = null;
for(let i=0;i<texte.length;i++)
{
    const span = document.createElement("span");
    span.innerText = texte[i];
    texteDiv.appendChild(span);  //span ici est un variable pas un mot 
    spans.push(span);
//     if (texte[i] === " ") {
//   span.innerHTML = "&nbsp;"; // espace visible
// }

}
input.addEventListener("input", () => {
    correct = 0;
    incorrect = 0;
    const inputValue = input.value;
    spans.forEach((span, index) => {
        if(inputValue[index]==null){
            span.style.color = "black";
        }
        else if(inputValue[index]==span.innerText){
            span.style.color = "green";
            correct++;
        }
        else{
            span.style.color = "red";
            incorrect++;
        }
    });
});
let temps = document.querySelector(".temps");

input.addEventListener("input", function(){
    if(!timer){
    timer = setInterval(() => {
        tempsRestant--;
        temps.innerText = `le temps restant est : ${tempsRestant} `;
        if(tempsRestant <= 0 || correct==texte.length){
            finDeJeu();
        }
    }, 1000);
              }
});

function finDeJeu(){
        input.disabled = true;
        clearInterval(timer);
        temps.innerText = "le jeux a terminé!";
        let minutes = (60-tempsRestant)/60;
        let wpm = Math.round((correct/5)/minutes);
        let accurancy = (correct/(correct+incorrect))*100;
        const resultat = document.querySelector(".resultat");
        resultat.innerText = `Bravo! tu peut écrire ${wpm} mots par minute , avec un de ${accurancy}% `;
        resultat.style.background = "rgb(19, 120, 215)";
        
    let ancien = parseInt(localStorage.getItem("meilleur")) || 0;
    if (wpm > ancien) {
        localStorage.setItem("meilleur", wpm);
        ancien = wpm;
    }
}


let meilleurScore = document.createElement("div");
meilleurScore.setAttribute("class","meilleurScore");
document.body.appendChild(meilleurScore);
meilleurScore.innerText = `Meilleur score : ${localStorage.getItem("meilleur")}`;

document.querySelector("#recommencer").addEventListener("click", ()=> {
    location.reload();
});





