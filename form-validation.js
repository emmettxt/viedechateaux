// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    document.getElementById("date").onchange = checkDate
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  function checkDate(){
      var dateField = document.getElementById("date")
      var day = dateField.valueAsDate.getDay()
      
      if(day == 1 || day == 2){
        dateField.setCustomValidity("We do not open Monday or Tuesday")
      }
      else{
        dateField.setCustomValidity("")
      }
  }