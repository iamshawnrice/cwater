var cwater = (function(cwater) {
  'use strict';

  // Initialize all modules here
  $(document).ready(function() {
    cwater.modalsInit().init();
    cwater.orderForm().init();
  });

  return cwater;
}(cwater || {}, jQuery));
