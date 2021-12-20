const name = getNameFromUrl() || "Blockfertigung";

const nameEle = document.getElementById("name");
// new_1
var alleZeichen="ABCDEFGHIJKLMNOPQRSTUVWXYZÜ.Ö";
const MA = decode();
const outName = MA;
// end_1
// new_2
var Ausgabe1;
var Ausgabe2;
var Text1="Frohe Weihnachten und bleibt gesund";
var Text2="Frohe Weihnachten";
// end_2


createNameSpans(outName); //name

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles);

lightUpName(1);

function createNameSpans(Name) { 
  let nameArray = outName.split(""); // name.split("");
  let htmlString = "";
  nameArray.forEach((letter, index) => {
    htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;
  });
  nameEle.innerHTML = htmlString;
}

function lightUpName(n) {
  let length = letterEles.length;
  for (let i = 0; i < length; i++) {
    let ele = letterEles[i];
    ele.className = (n + i) % 2 == 0 ? "green" : "red";
    // ternary syntax: bedingung ? true : falsch;
  }

  setTimeout(function () {
    lightUpName(n + 1);
  }, 500);
}

function getNameFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let urlName = urlParams.get("name");
  return urlName;
}
// new_1
function ucFirst(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}
function decode(){
  var Vtext=name;//Vt.value.toUpperCase();
  var Schluessel="GNUAHVOBIPWCJQXDKRYELSZFMTÜ.Ö";//Schl.value;
  var Decodiert="";
  var Stelle;
  for (i=0; i < Vtext.length ; i++ ) {
    Stelle = Schluessel.indexOf(Vtext.charAt(i));
    if (Stelle > -1) {
      Decodiert = Decodiert + alleZeichen.charAt(Stelle);}
  }
    let outMA = ucFirst(Decodiert);
  return outMA;
  }
// new

      var datei = outName;
      var outTXT = datei + ".html";
      const embed = document.getElementById("MAtext");
      embed.src=outTXT;
     
