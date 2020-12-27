function snackMain() {
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Snack Option 1: <br> <br> • Classic Burger <br> • Fries <br> • Water";
    
  
    document.getElementById("snack1").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Snack Option 2: <br> <br> • Hot Dog <br> • Onion Rings <br> • Fruit Punch";
  
    document.getElementById("snack2").appendChild(div);
  
    var div = document.createElement("div");
    div.style.width = "225px";
    div.style.height = "300px";
    div.style.border = "4px solid black";
    div.style.background = "#234b88c0";
    div.style.color = "black";
    div.innerHTML = "Snack Option 3: <br> <br> • Nachos <br> • Garlic Bread <br> • Fountain Drink";
  
    document.getElementById("snack3").appendChild(div);

    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Details");
    x.onclick = snackDetails;
    x.classList.add("btn", "btn-dark")
    x.appendChild(t);
    x.style.marginTop = "20.5%";
    document.body.appendChild(x);
  }
  