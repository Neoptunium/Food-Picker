function dinnerMain() {
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Dinner Option 1: <br> <br> • Steak <br> • Beef Stew <br> • Mashed Potatoes <br> • Water";
  
    document.getElementById("dinner1").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Dinner Option 2: <br> <br> • Salmon <br> • Pasta Salad <br> • Rice <br> • Coca Cola";
  
    document.getElementById("dinner2").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Dinner Option 3: <br> <br> • Meatballs <br> • Ravioli <br> • Brussel Sprouts <br> • Dr. Pepper";
  
    document.getElementById("dinner3").appendChild(div);

    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Details");
    x.onclick = dinnerDetails;
    x.classList.add("btn", "btn-dark")
    x.appendChild(t);
    x.style.marginTop = "19.5%";
    document.body.appendChild(x);
  }
  