App = {
     web3Provider: null,
     contracts: {},
     account: 0x0,

     init: function() {

      // var articlesRow = $('#articlesRow');
      // var articleTemplate = $('#articleTemplate');

      // articleTemplate.find('.panel-title').text('article 1');
      // articleTemplate.find('.article-description').text('Description for article 1');
      // articleTemplate.find('.article-price').text('10.23');
      // articleTemplate.find('.article-seller').text('0x123456');

      // articlesRow.append(articleTemplate.html());

      return App.initWeb3();
     },

     initWeb3: function() {
           App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
           
           web3 = new Web3(App.web3Provider);
           
           App.displayAccountInfo();
           
           return App.initContract();
     },

     displayAccountInfo: function(){

     },

     initContract: function() {
          /*
           * Replace me...
           */
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
