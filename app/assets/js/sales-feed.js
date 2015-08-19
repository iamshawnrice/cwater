var cwater = (function(cwater) {
  'use strict';

  cwater.salesFeed = function() {
    var salesData;

    function init() {
      getSalesData();
    }

    function getSalesData() {
      var url = 'http://beta.json-generator.com/api/json/get/EkDfzR3o'

      $.ajax(url).done(function(response) {
        salesData = {
          items: response
        };

        var ractive = new Ractive({
          el: '.js-feed',
          template: '#js-template',
          data: salesData
        })

      }).fail(function(response) {
        console.error('there seems to be an issue with the mock data. Please check ' + url + 'for more info');
      });
    }

    return {
      init: init
    }
  }

  return cwater;
}(cwater || {}, jQuery));
