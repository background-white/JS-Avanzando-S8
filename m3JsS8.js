let correo=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\.\-]+\.[a-zA-Z0-9_\.\-]+$/;
let phone=/^9[0-9]{9}/;


  $("#formulario").submit(function(event){
    event.preventDefault();
    let nombre=$("#nombre").val();
    let email=$("#email").val();
    let phone=$("#phone").val();
    let genero=$("#genero").val();
    let nacimiento=$("#nacimiento").val();

    alert(
      `Los datos ingresados son los siguientes: 
      nombre: ${nombre}, 
      email: ${email},
      phone: ${phone},
      genero: ${genero},
      fecha de nacimiento: ${nacimiento}.     
    `);
  });




































