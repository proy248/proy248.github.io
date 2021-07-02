/* .js files add interaction to your website */

/* Variable that stores "my-list" element */
var fullItemList = document.getElementById("my-list");

/* Event listener that listens for mouseclick and runs checkOff function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOff, false);
}

/* Declaration of checkOff function */
function checkOff(clicked) {
  if (clicked.target.tagName == "LI") {
      clicked.target.classList.toggle("all-done");
    }
}

/* fact generator */
var factList = ["About 30 to 40% of the food supply is wasted in the USA (USDA).", "Americans eat about 274 pounds of meat on average (Sentient Media).", "One cow will belch 220 pounds of methane annually. Methane is a greenhouse gas that is 28 times more potent than CO2 (UC Davis).", "Emissions from plant-based foods are 10 to 50 times than those of animal products (Science Magazine)."]

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

/* takeAction button functionality */
var takeAction = document.getElementById("takeAction");
takeAction.addEventListener("click", linkToPage);

function linkToPage(){
  window.location.href="take-action.html";
}
