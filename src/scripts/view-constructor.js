var buildPage = function(contentHolder , viewTemplate){
   // console.log(this)

   var domEl = contentHolder


   var buildHTMLTemplate = viewTemplate

   this.render = function(data){
      var tgtEl = document.querySelector(domEl)
      var pageConts = buildHTMLTemplate(data)
      tgtEl.appendChild(pageConts)
      console.log(pageConts)
   }
}

module.exports = buildPage
