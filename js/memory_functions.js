// Minuten und Sekunden extrahieren
let turn1=0;turn2=0;
let seconds=1;
let isflipped=0;
let trys=0;
let karteid=0;
let karteid2=0;
var karten = new Array(16);
let x = 0;
matched=0;



function updateTime(){
// Zeit ausgeben
document.getElementById("zeit").innerHTML = `Zeit: ${seconds}`;
seconds++;
}
setInterval(updateTime, 1000);


function start(){
// Div-Element, in das die Bilder eingefügt werden sollen
const spielbereich = document.getElementById("spielbereich");

// Schleife über die Anzahl der Bilder
for (let i = 1; i <= 16; i++) {
  // Bild-Element erstellen
  var bild = document.createElement("div");

  // Bild-Attribute setzen
  bild.classList.add("karte");
  bild.setAttribute("onClick","flip("+i+")");
  //bild.id=`card${i}`;
  bild.setAttribute("id",i);
  karten.push(bild);
  // Bild in die Galerie einfügen
  //spielbereich.appendChild(bild);

  //Karte in Array speichern
  //karten.push(karten);
}

karten.sort(function() {
  return 0.5 - Math.random();
});

for(i=0;i<16;i++){

spielbereich.appendChild(karten[i]);
if(i%4==0){
  karten[i].style.clear="left";
}
}
}


function flip(i){

  if(isflipped==0){
    document.getElementById(i).style.backgroundImage = "url(pics/card" + i + ".png)";	
    karteid=i;
    isflipped++;

  }else{
    document.getElementById(i).style.backgroundImage = "url(pics/card" + i + ".png)";	
trys++;
  document.getElementById("Versuche").innerHTML = `Versuche: ${trys}`;
isflipped=0;

if(karteid+i==17){
  turn1=karteid;
  turn2=i;
  setTimeout(match, 500);
  matched++;

}else{
  turn1=karteid;
  turn2=i;
  setTimeout(unflip, 500);
}
  }

    console.log(i);
  }

function unflip(){
  document.getElementById(turn1).style.backgroundImage = "url(pics/memoryBg.png)"
  document.getElementById(turn2).style.backgroundImage = "url(pics/memoryBg.png)"
}

function match(){
  document.getElementById(turn1).style.backgroundImage = "url(pics/memoryBgI.png)";	
  document.getElementById(turn2).style.backgroundImage = "url(pics/memoryBgI.png)";	
  document.getElementById(turn1).setAttribute("onClick","");
  document.getElementById(turn2).setAttribute("onClick","");
  if(matched==8){
    setTimeout(gewonnen, 500);
  }
}

function gewonnen() {
  if ((confirm("Du hast alle Memory-Teile erraten! Willst du noch eine Runde spielen?")) == true) {
      location.reload();
  }
}