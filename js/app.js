//JSON to store food list
var foodList = [
	{
		"name":"Dahi Puri",
		"recipy":"Get puri, add some goodness, pour lots of dahi! Enjoy the meal",
		"ingridients":["dahi","puri","chutny","lots of sev","hell lot of goodness"],
		"imageUrl":"../img/dahi-puri.jpg"
	},
	{
		"name":"food2",
		"recipy":"do this then what so ever",
		"ingridients":["ok","somethingElse"]
	}
];

//This is to document the code
/**
 * Gets the new food.
 *
 * @param      {Array of Objects}  foodList  The food list.
 * @return     {Object}            The random food object.
 */
function getNewFood(foodList) {
	return foodList[parseInt(foodList.length*Math.random())];
}
/**
 * Shows the food details
 *
 * @param      {Object}  foodObject          The food object
 * @param      {DOM}  foodNameDOM         The food name dom
 * @param      {DOM}  foodRecipyDOM       The food recipy dom
 * @param      {DOM}  foodIngridientsDOM  The food ingridients dom
 */
function updateFoodView(foodObject,foodNameDOM,foodRecipyDOM,foodIngridientsDOM) {
	foodNameDOM.textContent = foodObject["name"];
	foodRecipyDOM.textContent = foodObject["recipy"];
	if(foodObject["imageUrl"] !== undefined){
		var foodImg = document.createElement("img");
		foodImg.id = "img";
		foodImg.src = foodObject["imageUrl"];
		foodImg.alt = foodObject["name"];
		$(foodImg).insertAfter(foodNameDOM);
	}
	var foodIngridientsUl = document.createElement("ul");
	for(var i in foodObject["ingridients"]){
		var a = document.createElement("li");
		a.textContent = foodObject["ingridients"][i];
		foodIngridientsUl.appendChild(a);
	}
	foodIngridientsDOM.appendChild(foodIngridientsUl);
}

window.onload = function(){
	var foodNameDiv = document.querySelector('#food>#name');
	var foodRecipyDiv = document.querySelector('#food>#recipy');
	var foodIngridientsDiv = document.querySelector('#food>#ingridients');

	updateFoodView(getNewFood(foodList),foodNameDiv,foodRecipyDiv,foodIngridientsDiv);
	
	//Just for a little show...
	foodNameDiv.onclick = function() {
		$(foodRecipyDiv).slideToggle("slow",function(){
			$(foodIngridientsDiv).slideToggle("slow",function(){
				$("#food>#img").slideToggle("fast");
			});
		});
	}

}
