var cwater = (function(cwater) {
  'use strict';

  cwater.orderForm = function() {
    var init = function() {
      $('.js-modal-container').on('show.bs.modal', function() {
        debugger;
      });
    }

    return {
      init: init
    }
  }

  return cwater;
}(cwater || {}, jQuery));
