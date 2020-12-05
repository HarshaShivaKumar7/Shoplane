var productData;
var cartData;
var item_count=0;


var cartCount = document.getElementById("cart-item-count");
var locData = localStorage.getItem("cartData");
if(locData !== null && locData.length > 0){
    var cart_data = JSON.parse(locData);
    for(var i=0; i<cart_data.length; i++){
        item_count += cart_data[i].count;
    }
    cartCount.innerText = item_count;
}




function createProductPreview(){
    var product_wrapper = document.getElementById("product-wrapper");
    var left_section = document.createElement("div");
    left_section.className = "left-section";
    var previewImg = document.createElement("img");
    previewImg.id = "product-img";
    previewImg.src = productData.preview;
    left_section.appendChild(previewImg);
    product_wrapper.appendChild(left_section);
    var right_section = document.createElement("div");
    right_section.className = "right-section";
    var product_details = document.createElement("div");
    product_details.className = "product-details";
    var h1 = document.createElement("h1");
    h1.id = "name";
    h1.innerText = productData.name;
    product_details.appendChild(h1);
    var h4 = document.createElement("h4");
    h4.id = "brand";
    h4.innerText = productData.brand;
    product_details.appendChild(h4);
    var h3 = document.createElement("h3");
    h3.innerText="Price: Rs "
    var span = document.createElement("span");
    span.id = "price";
    span.innerText = productData.price;
    h3.appendChild(span);
    product_details.appendChild(h3);
    var description = document.createElement("div");
    description.className = "description";
    var desc = document.createElement("h3");
    desc.innerText = "Description";
    description.appendChild(desc);
    var desc_para = document.createElement("p");
    desc_para.id = "description";
    desc_para.innerText = productData.description;
    description.appendChild(desc);
    description.appendChild(desc_para);
    product_details.appendChild(description)
    var product_preview = document.createElement("div");
    product_preview.className = "product-preview";
    var preview_title = document.createElement("h3");
    preview_title.innerText = "Product Preview";
    product_preview.appendChild(preview_title);
    var preview_images = document.createElement("div");
    preview_images.className = "previewImg";
    for(var i=0; i<productData.photos.length; i++){
        var preview_image = document.createElement("img");
        preview_image.id= i;
        preview_image.src= productData.photos[i];
        preview_images.appendChild(preview_image);
        preview_image.onclick = function(e){
            previewImg.src = productData.photos[e.target.id];
            for(var j = 0; j<productData.photos.length; j++){
                var act = document.getElementById(j);
                if(j == e.target.id){
                    act.className = "active";
                }
                else{
                    act.className = ""
                }
            } 
            
        }
    }
    product_preview.appendChild(preview_images);
    product_details.appendChild(product_preview);
    right_section.appendChild(product_details);
    var button_wrapper = document.createElement("div");
    button_wrapper.className = "btn";
    var btn = document.createElement("button");
    btn.id = "add_to_cart";
    btn.innerText = "Add to Cart";
    button_wrapper.appendChild(btn);
    right_section.appendChild(button_wrapper);
    button_wrapper.onclick = function() {
        var localData = localStorage.getItem("cartData");
        if(localData === null || localData === undefined || localData === " " || localData.length === 0){
            localData = [productData];
            localData[0].count = 1;
            localStorage.setItem("cartData", JSON.stringify(localData))
            item_count += 1;
            cartCount.innerText = item_count;
        }
        else{
            var local_data = JSON.parse(localData);
            idx = productData.id;
            if(local_data.some(local_data => local_data.id === productData.id)){
                var pos = local_data.map(function(x) {return x.id; }).indexOf(idx);
                local_data[pos].count = local_data[pos].count+1;
                local_data[pos].price = local_data[pos].price + local_data[pos].price;
                localStorage.setItem("cartData", JSON.stringify(local_data));
                item_count += 1;
                cartCount.innerText = item_count;
            }
            else{
                productData.count = 1;
                local_data.push(productData);
                localStorage.setItem("cartData", JSON.stringify(local_data));
                item_count += 1;
                cartCount.innerText = item_count;
            }
        }
    }
    product_wrapper.appendChild(right_section);
    var active_class = document.getElementById("0");
    active_class.className = "active";
}

var productDetailsRequest = new XMLHttpRequest();
productDetailsRequest.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+window.location.search.split("=")[1], true);
productDetailsRequest.onreadystatechange = function() {
    if(this.readyState === 3){
        console.log("loading...")
    }
    if(this.readyState === 4){
        productData = JSON.parse(this.responseText);
        createProductPreview();
    }
}
productDetailsRequest.send();


var dropdownWrapper = document.getElementById("menu-dropdown");
var hamburgerIcon = document.getElementById("hamburger-icon");
var menuDropDown = document.getElementById("dropdown-list"); 
var closeIcon = document.getElementById("dropdown-close-icon");
var clothRedirect = document.getElementById("clothing-redirection");
var accessoryRedirect = document.getElementById("accessory-redirection");
var cartRedirect = document.getElementById("cart-redirection");

dropdownWrapper.addEventListener('mouseover', function(){
    menuDropDown.style.display = "block";
})

dropdownWrapper.addEventListener('mouseout', function(){
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

