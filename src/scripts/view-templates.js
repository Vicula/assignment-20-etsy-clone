var homeTemplateFn = function(collectionData){
   // console.log(collectionData)

   var contentBoxHolder = document.createElement('div')
      // contentBoxHolder.classList = "container"
      var homeNavBox = document.createElement('nav')
         contentBoxHolder.appendChild(homeNavBox)
         // var navLogo = document.createElement('img')
         //    navLogo.src = "../../Images/etsy-logo.png"
         //    navLogo.width = '60px'
         //    homeNavBox.appendChild('navLogo')
         homeNavBox.innerHTML = `
            <img src="../images/etsy-logo.png" class="navLogo">
            <div class="navIcons">
               <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
               <span class="glyphicon glyphicon-bell" aria-hidden="true"></span>
               <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
            </div>

         `
      var homeInfoBox = document.createElement('div')
         contentBoxHolder.appendChild(homeInfoBox)
         var infoJumbotron = document.createElement('div')
            infoJumbotron.classList = "jumbotron"
            homeInfoBox.appendChild(infoJumbotron)
            var jumboTitle = document.createElement('h1')
               jumboTitle.classList = "jumboTitle"
               infoJumbotron.appendChild(jumboTitle)
               jumboTitle.textContent = "Whoever you are, find whatever you're into"
            var jumboSearch = document.createElement('div')
               jumboSearch.classList = "input-group jumboSearch"
               jumboSearch.innerHTML = `
               <input type="text" class="form-control jumboSearchBar">
               <div class="input-group-btn">
                  <button type="button" class="btn btn-default jumboSearchBut">Search</button>
               </div>
               `
               infoJumbotron.appendChild(jumboSearch)
         var infoBlocksBox = document.createElement('div')
            homeInfoBox.appendChild(infoBlocksBox)

      var homeContentBox = document.createElement('div')
         homeContentBox.classList = "container-fluid"
         contentBoxHolder.appendChild(homeContentBox)
         var contentNavBox = document.createElement('div')
            contentNavBox.classList = "col-sm-3"
            homeContentBox.appendChild(contentNavBox)
         var contentListingBox = document.createElement('div')
            contentListingBox.classList = "col-sm-9"
            homeContentBox.appendChild(contentListingBox)
            var contentTileHolder = document.createElement('div')
               contentListingBox.appendChild(contentTileHolder)
               collectionData.forEach(function(crntData){

                  // console.log(crntData)
                  var crntProduct = crntData.attributes
                  var crntImg = crntProduct.Images[0].url_170x135
                  console.log(crntProduct)
                  var crntProductLink = document.createElement('a')
                     crntProductLink.href = '#moreInfo/' + crntProduct.listing_id
                     contentTileHolder.appendChild(crntProductLink)
                  var crntProductHolder = document.createElement('div')
                     crntProductHolder.classList = "col-sm-4 crntProduct"

                     crntProductHolder.style.backgroundImage = `url("${crntImg}")`
                     console.log(crntProductHolder.style)
                     crntProductLink.appendChild(crntProductHolder)
                     var crntProdInfo = document.createElement('div')
                        crntProdInfo.classList = "crntProdInfo"
                        crntProductHolder.appendChild(crntProdInfo)
                        var productName = document.createElement('h1')
                           crntProdInfo.appendChild(productName)

                           productName.textContent = crntProduct.title.slice(0, 27) + '...'
                        var productCreator = document.createElement('p')
                           productCreator.classList = "crntCreator"
                           crntProdInfo.appendChild(productCreator)
                           productCreator.textContent = crntProduct.Shop.shop_name
                        var productPrice = document.createElement('p')
                           productPrice.classList = "crntPrice"
                           crntProdInfo.appendChild(productPrice)
                           productPrice.textContent = crntProduct.price

               })
            contentListingBox.innerHTML += `

               <nav aria-label="Page navigation">
                  <ul class="pagination">
                     <li>
                        <a href="#" aria-label="Previous">
                           <span aria-hidden="true">&laquo;</span>
                        </a>
                     </li>
                     <li><a href="#">1</a></li>
                     <li><a href="#">2</a></li>
                     <li><a href="#">3</a></li>
                     <li><a href="#">4</a></li>
                     <li><a href="#">5</a></li>
                     <li>
                        <a href="#" aria-label="Next">
                           <span aria-hidden="true">&raquo;</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            `


   return contentBoxHolder
}

var detailsTemplateFn = function(jsonData){



}

module.exports = homeTemplateFn
