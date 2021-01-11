$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('#enviarCorreo').click(function () {
  alert("El correo fue enviado correctamente...")
});

$("#ingredientes").on("dblclick", function () {
  $(this).css("color", "red")
});

$("#preparacion").on("dblclick", function () {
  $(this).css("color", "red")
});

$('.card-title').click(function () {
  $('.card-text').toggle('hide')
});


$("a").click(function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({
      scrollTop: $(gato).offset().top
    }, 800, function () {
      window.location.hash = gato
    });
  }
});