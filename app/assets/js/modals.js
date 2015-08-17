(function() {
  'use-strict';

  var $modalTrigger = $('.js-modal-link'),
      $modal = $('.js-modal-container'),
      $modalContent = $modal.find('.js-modal-content');

  $modalTrigger.off('click');
  $modalTrigger.on('click', function(event) {
    var $trigger = $(this),
        path = $trigger.attr('href');

    // disable the trigger button to prevent spamming the server
    $trigger.prop('disabled', true);

    // hit the server for the contents of the modal
    $.ajax(path).done(function(response) {
      // on success, load the contents of the modal
      $modalContent.html(response);
      processModalContent();

      // and show the modal
      $modal.modal({
        backdrop: 'static',
        show: true
      });
    }).fail(function(response) {
      // on failure, notify the user
      $modalContent.html('<p>There seems to have been an error.</p>');
    }).always(function() {
      //reenable the trigger
      $trigger.prop('disabled', false);
    });

    event.preventDefault();
  });

  // Clear out modal body
  $modal.on('hidden.bs.modal', function() {

  });
})();
