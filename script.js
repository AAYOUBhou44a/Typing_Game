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
input.addEventListener("input", () => {
    const inputValue = input.value;
    spans.forEach((span, index) => {
        if(inputValue[index]==null){
            span.style.color = "black";
        }
        else if(inputValue[index]==span.innerText){
            span.style.color = "green";
        }
        else{span.style.color = "red";}
    });
    // if(inputValue===spans[conteur].innerText)
    // {
    //     spans[conteur].style.color = "green";
    // }
    // else{document.span.color = "red";}
    // conteur ++;
});





