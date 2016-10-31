const $ = require('jquery')
const Backbone = require('Backbone')

const view = require('./model-coll.js')
const buildPage = require('./view-constructor.js')
const templates = require('./view-templates.js')


var appHolder = document.querySelector('#app-container')


const appRouter = Backbone.Router.extend({
   routes: {
      "moreInfo/:id" : "showMorePage",
      "" : "showHomePage"
   },

   showMorePage: function(id){
      var modl = new view.etsyModel(id)
      var closerView = new buildPage('#app-container', templates.detailsTemplateFn, modl)
      modl.fetch()
   },

   showHomePage: function(){
      var coll = new view.etsyCollection()
      var views = new buildPage('#app-container', templates.homeTemplateFn, coll)

      coll.fetch()
   },

   initialize: function(){
      Backbone.history.start()
   }
})


const app = new appRouter();
