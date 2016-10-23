import creditCardType from 'credit-card-type';

$(document).on('input change', '#input--cc input', function() {
  const ccNum = $(this).val();
  const ccType = creditCardType(ccNum);

  if (!ccNum.length || typeof ccType === "undefined" || !ccType.length){
    $('#input--cc').removeClass().addClass('creditcard-icon');
    return;
  }

  const creditcardType = ccType[0].type;

  let ccTypes = {
    'american-express': 'AE',
    'master-card': 'MC',
    'visa': 'VI',
    'discover': 'DI'
  }

  $('#input--cc').removeClass().addClass('creditcard-icon').addClass('creditcard-icon--' + creditcardType); //set creditcard icon

  // select creditcard type
  $(".creditcard-type > select").val(ccTypes[creditcardType]);
  // set the creditcard type <select> to the value entered
});
