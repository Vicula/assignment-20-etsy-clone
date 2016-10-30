var homeTemplateFn = function(collectionData){
   // console.log(collectionData)

   var contentBoxHolder = document.createElement('div')
      // contentBoxHolder.classList = "container"
      var homeNavBox = document.createElement('nav')
         contentBoxHolder.appendChild(homeNavBox)
      var homeInfoBox = document.createElement('div')
         contentBoxHolder.appendChild(homeInfoBox)
         var infoJumbotron = document.createElement('div')
            homeInfoBox.appendChild(infoJumbotron)
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
                  var crntProduct = crntData.attributes
                  var crntImg = crntProduct.Images[0].url_fullxfull
                  console.log(crntProduct)

                  var crntProductHolder = document.createElement('div')
                     crntProductHolder.classList = "col-sm-4"

                     crntProductHolder.style.backgroundImage = `url("${crntImg}")`
                     contentListingBox.appendChild(crntProductHolder)
                     console.log(crntProductHolder.style)



                     var crntProdInfo = document.createElement('div')
                        crntProductHolder.appendChild(crntProdInfo)
                        var productName = document.createElement('h4')
                           crntProdInfo.appendChild(productName)
                           productName.textContent = crntProduct.title
                        var productCreator = document.createElement('p')
                           crntProdInfo.appendChild(productCreator)
                           // productCreator.textContent =
                        var productPrice = document.createElement('p')
                           crntProdInfo.appendChild(productPrice)



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

module.exports = homeTemplateFn
