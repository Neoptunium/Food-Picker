function lunchMain() {
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Lunch Option 1: <br> <br> • Tacos <br> • Cheese Quesadilla <br> • Fries <br> • Water";

    document.getElementById("lunch1").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Lunch Option 2: <br> <br> • Grilled Fish Fillet <br> • Calamari <br> • Potatoes <br> • Fruit Punch";
  
    document.getElementById("lunch2").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Lunch Option 3: <br> <br> • Pizza <br> • Chicken Tenders <br> • Onion Rings <br> • Fountain Drink";
  
    document.getElementById("lunch3").appendChild(div);

    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Details");
    x.onclick = lunchDetails;
    x.classList.add("btn", "btn-dark")
    x.appendChild(t);
    x.style.marginTop = "18.5%";
    document.body.appendChild(x);
  }
  