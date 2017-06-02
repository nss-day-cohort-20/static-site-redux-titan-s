
//need to input the image URLs to the image variables
var imgAthena = "images/Athena.jpg";
var imgKronos = "images/ChronosStaff.jpg";
var imgArtemis = "images/Artemis.jpg";
var imgHephaestus = "images/Hephestas.jpg";
var imgHades = "images/hades.jpg";
var imgAphrodite = "images/Aphrodite.jpg";
var imgZeus = "images/zeus_bolt.jpg";
var imgPoseidon = "images/Poseidon.jpg";
var imgHermes = "images/HermesShoes.jpg";



//variables to fill in descriptions separate from object creation:
var descripAthena = "Athena's helmet bestows its wearer with wisdom of ages. Wish that you knew what you knew now when you were younger? Save time and steep yourself in Athena's!";
var descripKronos = "Time IS on your side if you have the Kronos Watch! Bored? Turn things up to 2x. Stressed? Slow it all down. Need a nap? Stop time and do what needs to be done. The power of Kronos makes all things possible!";
var descripArtemis = "The Artemis Bow comes equipped with ever-returning arrows, so you never run out of ammo. It's also self-aiming!";
var descripHephaestus = "Finding that your regular old human-made chains don't cut it when it comes to restraining the monsters you encounter in your adventures? Only chains forged by Hephaestus can do that.";
var descripHades = "Life is essentially priceless, but we've found a way to put an arbitrary number on it. Think of this as a get-out-of-death-free card, courtesy of Persephone.";
var descripAphrodite = "You know that attractive person would be yours if only they had time to get to know you and weren't distracted by all those other good looking people. Slip them a little of the Aphrodite Potion and they'll give you that time of day!";
var descripZeus = "Are you a farmer? Is there an unprecedented drought? Make it rain with the Zeus Bolt! This summons a powerful thunderstorm complete with downpour.";
var descripPoseidon = "Beached? Fighting on a beach and need to drown your enemies with a tidal wave? One blast on the Poseidon Conch will summon a huge tidal wave. Hope you can swim!";
var descripHermes = "Need some speed? The Hermes Shoes give you that extra burst with their winged goodness. These are way better than any athletic shoe you've ever worn.";



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

								<img src="${cardArrayProducts[i].url}" alt="$cardArray[i].name}">

								<div class="nameContainer">
								<h3>${cardArrayProducts[i].name}</h3>
								</div>

								<div class="descriptionContainer">
								<p>${cardArrayProducts[i].description}</p>
								</div>
								<div class="price">
								<h5>${cardArrayProducts[i].price}
								</h5>
								</div>
								<div class="buybtn">

								<a href="contact.html" target="_blank">
								<button>Buy Now</button> </a></div>

								</div><!---end of card with id ${cardArrayProducts[i].id}-->`

	

	stringHTML += productCard;

	}

	printHTMLToDiv(stringHTML);
}

iterateAllArray(cardArrayProducts);