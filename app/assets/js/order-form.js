var cwater = (function(cwater) {
  'use strict';

  cwater.orderForm = function() {
    var $input = $('.js-quantity-input'),
        $decoy = $('.js-quantity-count'),
        $plus = $('.js-quantity-plus'),
        $minus = $('.js-quantity-minus'),
        quantity = 1;

    function init() {
      $minus.addClass('invisible');
      initializeQuantityButtons();
      initializeShippingSelect();
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

      if (quantity === 1) {
        $minus.addClass('invisible');
      }
    }

    function increaseQuantity() {
      quantity++;
      $decoy.text(quantity);
      $input.val(quantity);
      $minus.removeClass('invisible');
    }

    return {
      init: init
    }
  }

  return cwater;
}(cwater || {}, jQuery));
