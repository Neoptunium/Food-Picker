function breakfastMain() {
  var div = document.createElement("div");
  div.style.width = "225px";
  div.style.height = "300px";
  div.style.border = "4px solid black";
  div.style.background = "#234b88c0";
  div.style.color = "black";
  div.innerHTML = `Breakfast Option 1: <br> <br> • Pancakes <br> • Eggs <br> • Granola & Yogurt <br> • Orange Juice`;
  document.getElementById("breakfast1").appendChild(div);
 
  var div = document.createElement("div");
  div.style.width = "225px";
  div.style.height = "300px";
  div.style.border = "4px solid black";
  div.style.background = "#234b88c0";
  div.style.color = "black";
  div.innerHTML = "Breakfast Option 2: <br> <br> • Oatmeal  <br> • Egg & Cheese Sandwich <br> • Fresh Fruit <br> • Apple Juice";

  document.getElementById("breakfast2").appendChild(div);

  var div = document.createElement("div");
  div.style.width = "225px";
  div.style.height = "300px";
  div.style.border = "4px solid black";
  div.style.background = "#234b88c0";
  div.style.color = "black";

  div.innerHTML = "Breakfast Option 3: <br> <br> • Breakfast Burrito <br> • Eggs <br> • Bacon & Toast <br> • Coffee";

  document.getElementById("breakfast3").appendChild(div);

  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Details");
  x.onclick = breakfastDetails;
  x.classList.add("btn", "btn-dark")
  x.appendChild(t);
  x.style.marginTop = "17.5%";
  document.body.appendChild(x);
}

