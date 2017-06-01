
//need to input the image URLs to the image variables
var imgAthena = "images/Athena.jpg";
var imgKronos = "images/ChronosStaff.jpg";
var imgArtemis = "images/Artemis.jpg";
var imgHephaestus = "images/Hephestas.jpg";
var imgHades = "images/hades.jpg";
var imgAphrodite = "images/Aphrodite.jpg";
var imgZeus = "";
var imgPoseidon = "images/Poseidon.jpg";
var imgHermes = "images/HermesShoes.jpg";



//variables to fill in descriptions separate from object creation:
var descripAthena = "";
var descripKronos = "";
var descripArtemis = "";
var descripHephaestus = "";
var descripHades = "";
var descripAphrodite = "";
var descripZeus = "";
var descripPoseidon = "";
var descripHermes = "";



function makeSummaryObject(id, url, name, description, price) {
	var summary = {};
	summary.id = id;
	summary.url = url;
	summary.name = name;
	summary.description = description;
	summary.price = price;
	

	return summary;
}


//create each object below:


var athena = makeSummaryObject("athena", imgAthena, "Athena Helmet", descripAthena, '$12,000')
var kronos = makeSummaryObject("kronos", imgKronos, "Kronos Watch", descripKronos, '$16,500')
var artemis = makeSummaryObject("artemis", imgArtemis, "Artemis Bow", descripArtemis, '$1,600')
var hephaestus = makeSummaryObject("hephaestus", imgHephaestus, "Hephaestus chains", descripHephaestus, '$900')
var hermes = makeSummaryObject("hermes", imgHermes, "Hermes Shoes", descripHermes, '$1,000')
var aphrodite = makeSummaryObject("aphrodite", imgAphrodite, "Aphrodite Potion", descripAphrodite, '$1,100')
var hades = makeSummaryObject("hades", imgHades, "Hades and Persephone Excuse Note", descripHades, '$12,000,000')
var zeus = makeSummaryObject("zeus", imgZeus, "Zeus Bolt", descripZeus, '$2,200')
var poseidon = makeSummaryObject("poseidon", imgPoseidon, "Poseidon Conch", descripPoseidon, '$1,100')


//To print to HTML div:
function printHTMLToDiv(productCard) {

	var cardDiv = document.getElementById("cardIterations");

	cardDiv.innerHTML = productCard;
 

}
//Calling the makeSummaryObject function will create the objects
//Card array below holds all these functions

var cardArrayProducts = [artemis, athena, aphrodite, hades, hephaestus, hermes, kronos, poseidon, zeus];

var stringHTML= "";

function iterateAllArray(arr) {
	for (var i=0; i < cardArrayProducts.length; i+= 1) {

		var productCard = `<div class="card" id="${cardArrayProducts[i].id}">

								<img src=""









							</div>`

	

	stringHTML += productCard;

	}

	printHTMLToDiv(stringHTML);
}

iterateAllArray(cardArrayProducts);