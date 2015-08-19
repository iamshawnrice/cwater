var cwater = (function(cwater) {
  'use strict';

  cwater.modalsInit = function() {
    var $modalTrigger = $('.js-modal-link'),
        $modal = $('.js-modal-container'),
        $modalContent = $modal.find('.js-modal-content');

    function init() {
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

      // Clear out modal body when the modal is dismissedd
      $modal.off('hidden.bs.modal');
      $modal.on('hidden.bs.modal', function() {
        $modalContent.empty();
      });

      $modal.off('show.bs.modal');
      $modal.on('show.bs.modal', function() {
        // initialize orderform js if it exists in the modal
        if ($modalContent.find('.js-order-form')) {
          cwater.orderForm().init();
        }

        // initialize sales stats if it exists in the modal
        if ($modalContent.find('.js-stats')) {
          cwater.salesStats().init();
        }
      });

      $modal.off('modal-loaded');
      $modal.on('modal-loaded', function() {
        dismissModal();
      });
    };

    // If the contents of a modal are replaced by a second AJAX call, add listeners to the new dismiss button
    function dismissModal() {
      $('.js-modal-dismiss').off();
      $('.js-modal-dismiss').on('click', function() {
        $modal.modal('hide');
      });
    }

    return {
      init: init
    }
  };

  return cwater;
}(cwater || {}, jQuery));
