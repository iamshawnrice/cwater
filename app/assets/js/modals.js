(function() {
  'use-strict';

  var $modalTrigger = $('.js-modal-link');

  $modalTrigger.off('click');
  $modalTrigger.on('click', function(event) {
    var $trigger = $(this),
        path = $trigger.attr('href'),
        $modal = $('.js-modal-container'),
        $modalContent = $modal.find('.js-modal-content');

    $trigger.prop('disabled', true);

    // hit the server for the contents of the modal
    $.ajax(path).done(function(response) {
      // on success, load the contents of the modal
      $modalContent.html(response);
      // and show the modal
      $modal.modal({
        backdrop: 'static',
        show: true
      });
    }).fail(function(response) {
      $modalContent.html('well...this is really awkward');
    }).always(function() {
        $trigger.prop('disabled', false);
    });

    event.preventDefault();
  });
})();
