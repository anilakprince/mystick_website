$(document).ready(function(){
    //searchbox
    $('#sbox').hide();
    $("#search").click(function(){
        $('#sbox').show();
        $('#sbox').blur(function(){
            $('#sbox').hide();
        });
    })
    //swaping product image
   $('.prdimg').click(function(){
    var smallimage=$(this).attr('src');
    $('#prdlgimg').attr('src',smallimage);
   })
   //product increment
   $('.increment-btn').click(function (e) {
    e.preventDefault();
    var incre_value = $(this).parents('.quantity').find('.qty-input').val();
    var value = parseInt(incre_value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
        $(this).parents('.quantity').find('.qty-input').val(value);
    }
});
$('.decrement-btn').click(function (e) {
    e.preventDefault();
    var decre_value = $(this).parents('.quantity').find('.qty-input').val();
    var value = parseInt(decre_value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
        $(this).parents('.quantity').find('.qty-input').val(value);
    }
});
//subscribe
$('#subscribe').submit(function(event) {
    event.preventDefault(); // Prevents the default form submission

    const email = $('#emailInput').val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert('Thankyou Subscribing');

      // Add further actions here, like submitting the form data to a server
      // For demonstration, I'm logging the email and submitting the form
      console.log('Submitted email:', email);
      $(this).unbind('submit').submit(); // Unbind submit event and submit the form
    } 
    else {
      $('#emailInput').after('<span class="error">Please enter a valid email address</span>');
    }
  });

});



//checkout
placeorder=()=> {
    if(document.getElementById("firstname").value==""){
      document.getElementById("error").innerHTML='Please enter your First Name!!!';
    }
    else if (document.getElementById("lastname").value == '') {
        document.getElementById("error").innerHTML = 'Please enter your Last Name!!!';
  
    }
    
  else if (document.getElementById("country").value == '') {
    document.getElementById("error").innerHTML = 'Please select Your Country!!!';

}
    else if (document.getElementById("address").value == '') {
        document.getElementById("error").innerHTML = 'Please enter your Address!!!';
  
    }
    else if (document.getElementById('pincode').value == '') {
        document.getElementById("error").innerHTML = 'Please enter Zipcode!!!';
  
    }
    else if (document.getElementById('town').value == '') {
      document.getElementById("error").innerHTML = 'Please enter Town!!!';
  
  }
  else if (document.getElementById('phone').value == '') {
    document.getElementById("error").innerHTML = 'Please enter Phone number!!!';
  
  }
  else if (document.getElementById('mail').value == '') {
    document.getElementById("error").innerHTML = 'Please enter Email!!!';
  
  }
  else{
    document.getElementById("error").innerHTML = 'Successfully Placed Order';
    
      document.getElementById('checkoutform').submit();
    
  }
  }


  


  
