function processFormData() {

  let form = document.getElementById('myForm');

  let cardNumber = form.elements.number.value;
  let holder = form.elements.holder.value;
  let method = form.elements.pay.value;


  //Insert data into table with predefined function
  insertdata(cardNumber, holder, method);
    
  // Clear the form fields
  clearFormData();
};