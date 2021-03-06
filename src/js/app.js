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

            web3.eth.getCoinbase(function(err, balance){
                  if(err === null){
                        console.log("No errer");

                        App.account = balance;
                        console.log(balance);
                        $('#account').text(balance);

                        web3.eth.getBalance(balance, function(err, balance){
                              if(err === null){
                                    console.log(balance, " Wei");
                                    var ether = web3.fromWei(balance, "ether");
                                    $("#accountBalance").text(ether + " Eth");
                              }else{
                                    console.log(err);
                              }
                        })
                  }else{
                        console.log(err);
                  }
            })
     },

     initContract: function() {
          
            $.getJSON('ChainList.json',function(chainListArtiface){
                  App.contracts.ChainList = TruffleContract(chainListArtiface);
                  App.contracts.ChainList.setProvider(App.web3Provider);
                  return App.reloadArticles();
            });
     },

     reloadArticles: function(){
           App.displayAccountInfo();

           $('#articleRow').empty();

           App.contracts.ChainList.deployed().then( function(instance){
                  return instance.getArticle();
           }).then(function(article){
                 console.log(article);
           });

     }
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
