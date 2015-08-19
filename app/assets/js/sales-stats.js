var cwater = (function(cwater) {
  'use strict';

  // Initialize all modules here
  cwater.salesStats = function() {

    function getSalesStats() {
      var url = 'http://beta.json-generator.com/api/json/get/N1DNHlao';

      $.ajax(url).done(function(response) {
        var salesStats = {
          items: response
        };

        var ractive = new Ractive({
          el: '.js-stats',
          template: '#js-stats-template',
          data: salesStats
        })

      }).fail(function(response) {
        console.error('there seems to be an issue with the mock data. Please check ' + url + 'for more info');
      });
    }

    return {
      getSalesStats: getSalesStats
    }
  }

  return cwater;
}(cwater || {}, jQuery));
