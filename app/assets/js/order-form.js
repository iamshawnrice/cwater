var cwater = (function(cwater) {
  'use strict';

  cwater.orderForm = function() {
    var $input = $('.js-quantity-input'),
        $decoy = $('.js-quantity-count'),
        $plus = $('.js-quantity-plus'),
        $price = $('.js-quantity-price'),
        $minus = $('.js-quantity-minus'),
        quantity = 1,
        price = 1.95;

    function init() {
      // initialize client-side validations

      $('.js-order-form').validetta({
        display: 'inline',
        onValid: function(event) {
          ajaxSubmit(event);
        }
      },
      {
        required: '* required'
      });
      // hide the quantity '-' button
      $minus.addClass('invisible');

      // initialize orderform functions
      initializeQuantityButtons();
      initializeShippingSelect();
    }

    function ajaxSubmit(event) {
      var $form = $('.js-order-form'),
          path = $form.data('path');

      event.preventDefault();

      // hit the server for the contents of the modal
      $.ajax(path).done(function(response) {
        // on success, load the contents of the modal
        $('.js-modal-content').html(response);
        // Trigger a 'content loaded event'
        $('.js-modal-container').trigger('modal-loaded');
      }).fail(function(response) {
        // on failure, notify the user
        $modalContent.html('<p>There seems to have been an error.</p>');
      });
    }

    function initializeShippingSelect() {
      var $shippingAddress = $('.js-shipping-address'),
          $shippingSelect = $('.js-shipping-select');

      $shippingAddress.hide();

      $shippingSelect.off();
      $shippingSelect.on('change', function() {
        if ($(this).val() === 'shipping_address') {
          // Show the shipping address inputs
          $shippingAddress.velocity(
            'slideDown', {
              duration: 500
            }
          );
        } else {
          // hide the shipping address inputs
          $shippingAddress.velocity(
            'slideUp', {
              duration: 500
            }
          );
          // and clear out their values
          $shippingAddress.find('.form-control').val('');
        }
      });
    }

    function initializeQuantityButtons() {
      $plus.off('click');
      $plus.on('click', function() {
        increaseQuantity();
      });

      $minus.off('click');
      $minus.on('click', function() {
        decreaseQuantity();
      });
    }

    function decreaseQuantity() {
      // we want to ensure that there is at least 1 'item' in the cart at all times
      if (quantity === 1) {
        return false
      }

      quantity--;
      $decoy.text(quantity);
      $input.val(quantity);
      adjustPrice(quantity);

      if (quantity === 1) {
        $minus.addClass('invisible');
      }
    }

    function increaseQuantity() {
      quantity++;
      $decoy.text(quantity);
      $input.val(quantity);
      adjustPrice(quantity);
      $minus.removeClass('invisible');
    }

    function adjustPrice(quantity) {
      var adjustedPrice = numeral(quantity * price).format('0,0.00');

      $price.text('$' + adjustedPrice);
    }

    return {
      init: init
    }
  }

  return cwater;
}(cwater || {}, jQuery));
