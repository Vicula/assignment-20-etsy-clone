const $ = require('jquery')
const Backbone = require('Backbone')

const view = require('./model-coll.js')
const buildPage = require('./view-constructor.js')
const homeTemplateFn = require('./view-templates.js')


var appHolder = document.querySelector('#app-container')


const appRouter = Backbone.Router.extend({
   routes: {
      "moreInfo/:id" : "showMorePage",
      "" : "showHomePage"
   },

   showMorePage: function(id){
      var modl = new view.etsyModel(id)
      modl.fetch().then(function(){
         console.log(modl.attributes)
      })
   },

   showHomePage: function(){
      var coll = new view.etsyCollection()
      coll.fetch().then(function(){
         console.log(coll.models)
         var views = new buildPage('#app-container', homeTemplateFn)
         views.render(coll.models)

      })
   },

   initialize: function(){
      Backbone.history.start()
   }
})


const app = new appRouter();
