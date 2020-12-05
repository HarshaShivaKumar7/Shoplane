var item_count=0;


var checkoutPage = document.getElementById("checkout-section");
var pageTitle = document.createElement("h1");
pageTitle.className = "section-title";
pageTitle.innerText = "Checkout";
checkoutPage.appendChild(pageTitle);
var checkoutContentWrapper = document.createElement("div");
checkoutContentWrapper.className = "checout-countent-wrapper";
checkoutPage.appendChild(checkoutContentWrapper);
var cardList = document.createElement("div");
cardList.className = "card-list";
checkoutContentWrapper.appendChild(cardList);
var totalItem = document.createElement("h3");
totalItem.innerHTML = "Total Items: <span>0</span";
cardList.appendChild(totalItem);
var right_section = document.createElement("div");
right_section.className = "right-section";
checkoutContentWrapper.appendChild(right_section);
var rightTitle = document.createElement("h3");
rightTitle.innerText = "Total Amount";
right_section.appendChild(rightTitle);
var totAmount = document.createElement("p");
totAmount.innerHTML = "Amount: Rs<span id='total-amount'>0</span>"
right_section.appendChild(totAmount);
var placeOrderButton = document.createElement("button");
placeOrderButton.id = "place-order-button";
placeOrderButton.innerText = "Place Order";
right_section.appendChild(placeOrderButton);

function itemCardCreator(data) {
    console.log("mnbv",data);
    var itemCard = document.createElement("div");
    itemCard.className = "checkout-item-card";
    var imgWrapper = document.createElement("div");
    imgWrapper.className = "checkout-card-img";
    itemCard.appendChild(imgWrapper);
    var itemImg = document.createElement("img");
    itemImg.src = data.preview;
    imgWrapper.appendChild(itemImg);
    var itemCardDetails = document.createElement("div");
    itemCardDetails.className = "checkout-card-details";
    itemCard.appendChild(itemCardDetails);
    var itemName = document.createElement("h4");
    itemName.innerText = data.name;
    itemCardDetails.appendChild(itemName);
    var itemCount = document.createElement("p");
    itemCount.innerText = "x"+data.count;
    itemCardDetails.appendChild(itemCount);
    var cardAmount = document.createElement("p");
    cardAmount.innerHTML = "<span>Amount: Rs </span><span>"+data.price+"</span>";
    itemCardDetails.appendChild(cardAmount);
    cardList.appendChild(itemCard);

}


var cartCount = document.getElementById("cart-item-count");
var locData = localStorage.getItem("cartData");
if(locData !== null && locData.length > 0){
    var cart_data = JSON.parse(locData);
    var sumAmt = 0;
    for(var i=0; i<cart_data.length; i++){
        item_count += cart_data[i].count;
        sumAmt += cart_data[i].price;
    }
    cartCount.innerText = item_count;
    totalItem.innerHTML = "Total Items: <span>"+cart_data.length+"</span";
    totAmount.innerHTML = "Amount: Rs<span id='total-amount'>"+sumAmt+"</span>"

    for(var j=0; j<cart_data.length; j++){
        itemCardCreator(cart_data[j]);
    }
}

placeOrderButton.onclick = function(){
    var locD = localStorage.getItem("cartData");
    if(locData !== null && locData.length > 0){
        var orderSuccess = new XMLHttpRequest();
        orderSuccess.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/order", true);
        orderSuccess.onreadystatechange = function(){
            if(this.readyState === 4){
                localStorage.clear();
                window.location.replace("./success.html");
            }
        }
        orderSuccess.send();
    }
    else{
          
        window.location.replace("./index.html");
        alert("Please add to any Items to Cart🛒🛒... Continue with Shopping!!! 😊😊😊");
    }
}



var dropDownWrapper = document.getElementById("menu-dropdown");
var hamburgerIcon = document.getElementById("hamburger-icon");
var menuDropDown = document.getElementById("dropdown-list"); 
var closeIcon = document.getElementById("dropdown-close-icon");
var clothRedirect = document.getElementById("clothing-redirection");
var accessoryRedirect = document.getElementById("accessory-redirection");
var cartRedirect = document.getElementById("cart-redirection");
dropDownWrapper.addEventListener('mouseover', function(){
    menuDropDown.style.display = "block";
})
dropDownWrapper.addEventListener('mouseout', function(){
    menuDropDown.style.display = "none";
})
hamburgerIcon.addEventListener('click', function(){
    menuDropDown.style.display = "block";
})
closeIcon.addEventListener('click', function(){
    menuDropDown.style.display = "none";
})
clothRedirect.addEventListener('click', function(){
    menuDropDown.style.display = "none";
})
accessoryRedirect.addEventListener('click', function(){
    menuDropDown.style.display = "none";
})
cartRedirect.addEventListener('click', function(){
    menuDropDown.style.display = "none";
})