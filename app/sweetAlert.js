document.addEventListener("click", (event) => {
  if (event.target.classList.contains("info-button")) {
    const type = event.target.getAttribute("data-type");

    switch (type) {
      case "terms":
        Swal.fire({
          title: "Términos y Condiciones",
          html: `
              <p>Al usar este sitio web, aceptas cumplir con nuestros términos y condiciones. 
              Todos los derechos de las imágenes están reservados y está prohibida su reproducción sin autorización.</p>
            `,
          icon: "info",
        });

        break;

      case "cookies":
        Swal.fire({
          title: "Política de Cookies",
          html: `
              <p>Este sitio utiliza cookies para mejorar tu experiencia. 
              Al continuar navegando, aceptas su uso.</p>
              <p>Puedes gestionar tus preferencias desde la configuración de tu navegador.</p>
            `,
          icon: "info",
        });

        break;

      case "privacy":
        Swal.fire({
          title: "Política de Privacidad",
          html: `
              <p>Tus datos están seguros con nosotros. Solo se utilizan para responder a tus consultas 
              y no se comparten con terceros.</p>
              <p>Puedes solicitar la eliminación de tus datos en cualquier momento.</p>
            `,
          icon: "lock",
        });

        break;

      default:
        console.error("Tipo no reconocido");
    }
  }
});
