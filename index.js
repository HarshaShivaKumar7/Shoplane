var carouselData = [
    {
      id: 1,
      url: "https://i.imgur.com/96OnkX7.png",
    },
    {
      id: 2,
      url: "https://i.imgur.com/KtGxwnN.png",
    },
    {
      id: 3,
      url: "https://i.imgur.com/sfjg9R8.png",
    },
    {
      id: 4,
      url: "https://i.imgur.com/p0wdadG.png",
    }
  ]
  
  var itemsData = [];
  var item_count=0;
  
  
  $(document).ready(function(){
      var main = document.getElementById("main");
      var carouselSection = document.createElement("section");
      main.appendChild(carouselSection);
      var carouselWrapper = document.createElement("div");
      carouselWrapper.className = "carousel";
      carouselSection.appendChild(carouselWrapper);
      var clothingSection = document.createElement("section");
      clothingSection.id = "clothing-section";
      clothingSection.className = "product-Section";
      main.appendChild(clothingSection);
      var clothingSectionTitle = document.createElement("h3");
      clothingSectionTitle.className = "section-title";
      clothingSectionTitle.innerText = "Clothing for Men and Women";
      clothingSection.appendChild(clothingSectionTitle);
      var clothingWrapper = document.createElement("div");
      clothingWrapper.className = "products-wrapper";
      clothingWrapper.id = "clothing-wrapper";
      clothingSection.appendChild(clothingWrapper);
      var accessoriesSection = document.createElement("section");
      accessoriesSection.className = "product-Section";
      accessoriesSection.id = "accessory-section";
      main.appendChild(accessoriesSection);
      var accessoriesSectionTitle = document.createElement("h3");
      accessoriesSectionTitle.className = "section-title";
      accessoriesSectionTitle.innerText = "Accessories for Men and Women";
      accessoriesSection.appendChild(accessoriesSectionTitle);
      var accessoriesWrapper = document.createElement("div");
      accessoriesWrapper.className = "products-wrapper";
      accessoriesWrapper.id = "accessories-wrapper";
      accessoriesSection.appendChild(accessoriesWrapper);
  
  
  
  
      var cartCount = document.getElementById("cart-item-count");
      var locData = localStorage.getItem("cartData");
      if(locData !== null && locData.length > 0){
          var cart_data = JSON.parse(locData);
          for(var i=0; i<cart_data.length; i++){
              item_count += cart_data[i].count;
          }
          cartCount.innerText = item_count;
      }
  
  
      function createCarousel(data) {
        var carouselImage = document.createElement("img");
        carouselImage.src = data.url;
        carouselWrapper.appendChild(carouselImage);
      }
  
  
      function createItemCards(data){
        var cardWrapper = document.createElement("a");
        cardWrapper.href = "./productDetails.html?ProductID="+data.id;
        cardWrapper.className = "each-product-wrapper";
        var cardImage = document.createElement("img");
        cardImage.src = data.preview;
        cardWrapper.appendChild(cardImage);
        var cardDetailsWrapper = document.createElement("div");
        cardDetailsWrapper.className = "product-data-wrapper";
        cardWrapper.appendChild(cardDetailsWrapper);
        var cardTitle = document.createElement("h4");
        cardTitle.innerText = data.name;
        cardDetailsWrapper.appendChild(cardTitle);
        var cardBrand = document.createElement("h5");
        cardBrand.innerText = data.brand;
        cardDetailsWrapper.appendChild(cardBrand);
        var cardPrice = document.createElement("p");
        cardPrice.innerText = "RS "+data.price;
        cardDetailsWrapper.appendChild(cardPrice);
  
        if(data.isAccessory){
          accessoriesWrapper.appendChild(cardWrapper);
        }
        else{
          clothingWrapper.appendChild(cardWrapper);
        }
      }
  
    
  
      for(var i=0; i<carouselData.length; i++){
        createCarousel(carouselData[i])
      }
  
      var prodData = new XMLHttpRequest();
      prodData.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
      prodData.onreadystatechange = function() {
        if(this.readyState === 4){
          itemsData = JSON.parse(this.responseText);
          for(var k=0; k<itemsData.length; k++){
            createItemCards(itemsData[k]);
          }
        }  
      }
      prodData.send();
  
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
  
      $('.carousel').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          }
        ]
    });
  
  })

