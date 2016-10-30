const $ = require('jquery')
const Backbone = require('Backbone')

const etsyCollection = require('./model-coll.js')
const buildPage = require('./view-constructor.js')
const homeTemplateFn = require('./view-templates.js')


var appHolder = document.querySelector('#app-container')


const appRouter = Backbone.Router.extend({
   routes: {
      "moreInfo/:id" : "showMorePage",
      "" : "showHomePage"
   },

   showHomePage: function(){
      var coll = new etsyCollection()
      coll.fetch().then(function(){
         console.log(coll.models)
         var view = new buildPage('#app-container', homeTemplateFn)
         view.render(coll.models)

      })
   },

   initialize: function(){
      Backbone.history.start()
   }
})


const app = new appRouter();
