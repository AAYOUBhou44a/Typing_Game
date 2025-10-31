const texte = "JavaScript makes the web alive and interactive.";
const texteDiv = document.querySelector(".texte");
let input = document.querySelector(".input");
let conteur = 0;
const spans = [];
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





