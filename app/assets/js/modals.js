(function() {
  'use-strict';

  var $modalTrigger = $('.js-modal-link');

  $modalTrigger.off();
  $modalTrigger.on('click', function(event) {
    event.preventDefault();

    console.log('$modalTrigger clicked');
  });
})();
