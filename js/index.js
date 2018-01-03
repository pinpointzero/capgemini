/**
 * Functions
 **/

/**
* Add the listener on DOM loading completion
**/
document.addEventListener('DOMContentLoaded', function() {
  // The HMRC would rather not use JS (as stated in the test conditions)
  console.log("Ready");

  // set up the national insurance number - nin
  nin = document.getElementById('ni_number');
  // and the listener
  console.log('Setting up NIn listener');
  nin.addEventListener('blur', function(){
    if (checkNin(nin.value)) {
      // do stuff here
    }
  });

  // set up the tax credits renewal number - tcrn
  tcrn = document.getElementById('tcr_number');
  // and the listener
  console.log('Setting up TCRn listener');
  tcrn.addEventListener('blur', function(){
    if (checkTcrn(tcrn.value)) {
      // do stuff here
    }
  });

  // set up the button listener
  btn = document.getElementById('btn-submit');
  // and the listener
  btn.addEventListener('click', function(e){
    e.preventDefault();
    if (checkNin(nin.value) && checkTcrn(tcrn.value)) {
      // do what we need to and submit
    } // if
  });

}, false);

function checkNin(nin) {
  console.log('Checking the National Insurance number: '+ nin);
  // this would most likely go further than simply verifying
  //  the format of the NI number, possibly using AJAX to validate
  //  the actual NI number itself exists and is valid
  return true;
}

function checkTcrn(tcrn) {
  console.log('Checking the Tax Credits renewal number: '+ tcrn);
  // this would most likely go further than simply verifying
  //  the format of the TCR number, possibly using AJAX to validate
  //  the actual TCR number itself exists and is valid
  return true;
}
