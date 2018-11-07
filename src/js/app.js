App = {
     web3Provider: null,
     contracts: {},

     init: function() {

            var articleRow = $('#articlesRow');
            var articleTemplate = $('#articleTemplate');

            articleTemplate.find('.panel-title').text('Order No. 1');
            articleTemplate.find('.article-description'.text('Description 1'));
            articleTemplate.find('.article-price').text('10.24');
            articleTemplate.find('.article-seller').text('Seller Name');

            articlesRow.append(articleTemplate.html());

          return App.initWeb3();
     },

     initWeb3: function() {
          /*
           * Replace me...
           */

          return App.initContract();
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
