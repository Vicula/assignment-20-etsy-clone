const $ = require('jquery')
const Backbone = require('Backbone')


var appHolder = document.querySelector('#app-container')
console.log(appHolder)

var etsyModel = Backbone.Model.extend({

})

var etsyCollection = Backbone.Collection.extend({
   model: etsyModel,
   url: '',
   parse: function(rawJSON){
      console.log(rawJSON.results)
      return rawJSON.results

   },
   sync : function(method, collection, options) {

    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  },

   initialize: function(qryStr){
      this.url = 	"https://openapi.etsy.com/v2/listings/active.js?api_key=a4rxc0l54zj63ku2c0of02ic"
   }
})

const appRouter = Backbone.Router.extend({
   routes: {
      "moreInfo/:id" : "showMorePage",
      "" : "showHomePage"
   },

   showHomePage: function(){
      var coll = new etsyCollection()
      coll.fetch().then(function(){
         console.log(coll.models)

      })
   },

   initialize: function(){
      Backbone.history.start()
   }
})


const app = new appRouter();

function getData(data) {
      if (data.ok) {
            // do something with the data here
        } else {
            alert(data.error);
      }
}


console.log('hey')
