
/* efecto de pantalla de carga del contenido*/

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor-carga')
    contenedor.style.visibility = "hidden"
    contenedor.style.opacity = '0'
    contenedor.style.display = 'none'
})

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    