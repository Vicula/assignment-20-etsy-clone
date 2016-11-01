var thisHolder = document.querySelector('#app-container')

var homeTemplateFn = function(collectionData){
   // console.log(collectionData)

   var contentBoxHolder = document.createElement('div')
      // contentBoxHolder.classList = "container"
      var homeNavBox = document.createElement('nav')
         contentBoxHolder.appendChild(homeNavBox)
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
            infoBlocksBox.classList = "homeInfoBlocksbox"
            homeInfoBox.appendChild(infoBlocksBox)
            infoBlocksBox.innerHTML = `
               <div class="col-sm-4">
                  <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/how_etsy_works_1.20160609191624.png">
                  <h3>Get something you love</h3>
                  <p>Our marketplace is a world of vintage and handmade goods</p>
               </div>
               <div class="col-sm-4">
                  <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/how_etsy_works_2.20160609191624.png">
                  <h3>Find your new favorite shop</h3>
                  <p>More than a million independent sellers from everywhere are right here</p>
               </div>
               <div class="col-sm-4">
                  <img src="https://www.etsy.com/assets/dist/images/homepage/vesta/how_etsy_works_3.20160609191624.png">
                  <h3>Buy safely and securely</h3>
                  <p>Etsy protects every transaction, so shop with confidence</p>
               </div>
            `

      var homePageTitle = document.createElement('h1')
         homePageTitle.classList = "homePageTitle"
         homePageTitle.textContent = "Browse our selection.."
         contentBoxHolder.appendChild(homePageTitle)
      var homeContentBox = document.createElement('div')
         homeContentBox.classList = "container-fluid"
         contentBoxHolder.appendChild(homeContentBox)
         var contentNavBox = document.createElement('div')
            contentNavBox.classList = "col-sm-3 contentNavBox"
            homeContentBox.appendChild(contentNavBox)
            var catTitle = document.createElement('h4')
               catTitle.textContent = "Show results for :"
               contentNavBox.appendChild(catTitle)
            var catBox = document.createElement('div')
               contentNavBox.appendChild(catBox)
               catBox.innerHTML = `
                  <h5>All Categories</h5>
                  <ul>
                     <a href="#"><li>Accessories</li></a>
                     <a href="#"><li>Toys & Games</li></a>
                     <a href="#"><li>Shoes</li></a>
                     <a href="#"><li>Jewelry</li></a>
                     <a href="#"><li>Clothing</li></a>
                     <a href="#"><li>Pet Supplies</li></a>
                     <a href="#"><li>Bath & Beauty</li></a>
                     <a href="#"><li>Home & Living</li></a>
                     <a href="#"><li>Bags & Purses</li></a>
                  <a href="#"><li>Books, Movies & Music</li></a>
                  </ul>
               `
            var searchTitle = document.createElement('h4')
               searchTitle.textContent = "Refine your search :"
               contentNavBox.appendChild(searchTitle)
            var searchBox = document.createElement('div')
               contentNavBox.appendChild(searchBox)
               searchBox.innerHTML = `
               <h5>Item type</h5>
               <input type="checkbox">All items<br>
               <input type="checkbox">Handmade<br>
               <input type="checkbox">Vintage<br>
               <hr>
               <h5>Price ($)</h5>
               <input type="checkbox">Any Price<br>
               <input type="checkbox">Under 25$<br>
               <input type="checkbox">$25 to $50<br>
               <input type="checkbox">$50 to $100<br>
               <input type="checkbox">Over $100<br>

               `
         var contentListingBox = document.createElement('div')
            contentListingBox.classList = "col-sm-9 contentListingBox"
            homeContentBox.appendChild(contentListingBox)
            var contentTileHolder = document.createElement('div')
               contentListingBox.appendChild(contentTileHolder)
               collectionData.forEach(function(crntData){

                  // console.log(crntData)
                  var crntProduct = crntData.attributes
                  var crntImg = crntProduct.Images[0].url_170x135
                  // console.log(crntProduct)
                  var crntProductLink = document.createElement('a')
                     crntProductLink.href = '#moreInfo/' + crntProduct.listing_id
                     contentTileHolder.appendChild(crntProductLink)
                  var crntProductHolder = document.createElement('div')
                     crntProductHolder.classList = "col-sm-4 crntProduct"

                     crntProductHolder.style.backgroundImage = `url("${crntImg}")`
                     // console.log(crntProductHolder.style)
                     crntProductLink.appendChild(crntProductHolder)
                     var crntProdInfo = document.createElement('div')
                        crntProdInfo.classList = "crntProdInfo"
                        crntProductHolder.appendChild(crntProdInfo)
                        var productName = document.createElement('h1')
                           crntProdInfo.appendChild(productName)

                           productName.textContent = crntProduct.title.slice(0, 25) + '...'
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

               <nav class="productPagination" aria-label="Page navigation">
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
            var homePageFooter = document.createElement('div')
               homePageFooter.classList = "container-fluid homePageFooter"
               contentBoxHolder.appendChild(homePageFooter)

   return contentBoxHolder
}

var detailsTemplateFn = function(jsonData){

   var clsrCrntProduct = jsonData.attributes.results[0]

   // if (thisHolder.innerHTML === ''){
   //
   //    var fillContent = homeTemplateFn(collectionData)
   //    thisHolder.appendChild(fillContent)
   // }

   console.log(clsrCrntProduct)


   var closerLookHolder = document.createElement('div')
      closerLookHolder.classList = "moreInfoBox"
      var infoContentBox = document.createElement('div')
         infoContentBox.classList = "infoInnerBox"
         closerLookHolder.appendChild(infoContentBox)
         var infoBoxNav = document.createElement('nav')
            var closeButton = document.createElement('span')
               closeButton.classList = "glyphicon glyphicon-remove-circle closerLookClose"
               infoBoxNav.appendChild(closeButton)
            // infoBoxNav.innerHTML = `
            //    <span class="glyphicon glyphicon-remove-circle closerLookClose"></span>
            // `

            // var closeButton = document.querySelector('.closerLookClose')
            // closeButton.addEventListener('click', function(){
            //    thisHolder.removeChild(closerLookHolder)
            //
            // })

            closeButton.addEventListener('click', function(){
               let crntPagePosition = document.body.scrollTop
               thisHolder.removeChild(closerLookHolder)
               // thisHolder.innerHTML = ''
               window.location.hash = ''

               document.body.scrollTop = crntPagePosition


            })

            infoContentBox.appendChild(infoBoxNav)
         var infoBoxContent = document.createElement('div')
            infoContentBox.appendChild(infoBoxContent)
            var productPic = document.createElement('div')
               productPic.classList = "col-sm-7 closerProductPic"
               // productPic.style.backgroundImage = `url('${clsrCrntProduct.Images[0].url_570xN}')center, center, no-repeat`
               productPic.style.backgroundImage = `url(${clsrCrntProduct.Images[0].url_570xN})`
               productPic.style.backgroundSize = 'cover'
               productPic.style.height = '65vh'
               productPic.style.width = '100%'




               // productPic.style.backgroundImage = `url('${clsrCrntProduct.Images[0].url_570xN}')center, center, no-repeat`
               infoBoxContent.appendChild(productPic)
            var productInfo = document.createElement('div')
               productInfo.classList = "col-sm-5 closerProductInfo"
               productInfo.innerHTML = `
                  <h4>${clsrCrntProduct.title}</h4>
                  <h5>${clsrCrntProduct.price}</h5>
                  <p>${clsrCrntProduct.description}</p>
               `
               infoBoxContent.appendChild(productInfo)




   return closerLookHolder


}

module.exports = {
   homeTemplateFn: homeTemplateFn,
   detailsTemplateFn: detailsTemplateFn
}
