const $ = require('jquery')
const Backbone = require('Backbone')

var etsyModel = Backbone.Model.extend({
   url: '',

   // parse: function(rawJSON){
   //    return rawJSON.results
   //
   // },

   sync : function(method, collection, options) {

    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  },

   initialize: function(productId){
      this.url = "https://openapi.etsy.com/v2/listings/" + productId + ".js?api_key=a4rxc0l54zj63ku2c0of02ic"

   }

})

var etsyCollection = Backbone.Collection.extend({
   model: etsyModel,
   url: '',
   parse: function(rawJSON){
      return rawJSON.results

   },
   sync : function(method, collection, options) {

    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  },

   initialize: function(qryStr){
      this.url = 	"https://openapi.etsy.com/v2/listings/active.js?includes=Images,Shop&limit=32&api_key=a4rxc0l54zj63ku2c0of02ic"
   }
})


function getData(data) {
      if (data.ok) {
            // do something with the data here
        } else {
            alert(data.error);
      }
}

module.exports = {
   etsyCollection: etsyCollection,
   etsyModel: etsyModel
}
