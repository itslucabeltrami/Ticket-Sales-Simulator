// Se crea un event listener escuchando cuando el document esta cargado por completo
document.addEventListener("DOMContentLoaded", function (event) {
  // Se crean variables las cuales asignamos a los elementos del formulario
  const form = document.getElementById("dataForm")
  const nameInput = document.getElementById("name_input");
  const dateInput = document.getElementById("date_input");
  const dropdownCity = document.getElementById("dropdown_city");
  const cantidadEntradas = document.getElementById("cantidad_entradas_input");
  const dropdownCategory = document.getElementById("dropdown_category");
  const checkPayment = document.getElementsByName('payment')

  const arrayCity = [
    '',
    'Milan',
    'Barcelona',
    'Madrid'
  ];

  const objectCities = {
    Milan: 1,
    Barcelona: 2,
    Madrid: 3,
  };

  const arrayCategory = [
    '',
    'General',
    'Personas con discapacidad'
  ];

  const objectCategories = {
    General: 1,
    Personas_con_discapacidad: 2,
  };

  // Se Verifica si hay datos del formulario guardados en sessionStorage previamente
  if (sessionStorage.getItem('formData')) {
    // Se convierte la sessionStorage previamente guardada en json
    const formData = JSON.parse(sessionStorage.getItem('formData'));

    // Se rellenan los campos del formulario con los valores recuperados
    nameInput.value = formData.name;
    dateInput.value = formData.date;
    dropdownCity.value = objectCities[formData.city];
    cantidadEntradas.value = formData.quantity;
    dropdownCategory.value = objectCategories[formData.category.replace(' ', '_')];

    // Se busca el radio correspondiente al metodo de pago
    const radioElements = [...checkPayment].filter(e => e.id === formData.payment);
    // Si el array radioElements tiene un elemento lo asignamos a true
    radioElements[0].checked = true;
  }

  // Se escucha con un listener el submit, si el formulario es enviado iniciamos las validaciones
  form.addEventListener("submit", function (event) {
    // Se evita el comportamiento default del formulario
    event.preventDefault();
    // Se valida el formulario con la funcion checkValidator()
    // que se espera siempre true (si todo va bien) o false (si todo va mal)
    if (checkValidator()) {
      // Se cojen los elementos de la variable checkPayment la se mete en un array
      // y se le hace el spread de sus datos para poder filtarlos,
      // se filtran por el que este marcado
      const radioElements = [...checkPayment].filter(e => e.checked);
      const formData = {
        name: nameInput.value,
        date: dateInput.value,
        city: arrayCity[dropdownCity.value],
        quantity: cantidadEntradas.value,
        category: arrayCategory[dropdownCategory.value],
        payment: radioElements[0].id
      }
      sessionStorage.setItem('formData', JSON.stringify(formData));
      window.location.href = "http://localhost:63342/Ticket Sales Simulator/confirmacion.html";
    } else {
      console.log('something wrong')
    }
  });

  // Validador de los datos del formulario, si algun elemento tiene como valor nullish,
  // string vacio, valor null, o etc se marca la flag a false y se alerta con un alert()
  function checkValidator() {
    let flagValidator = true;

    if (nameInput.value === "" || nameInput.value == null) {
      alert("Porfavor, rellena el campo Nombre Completo");
      flagValidator = false;
    }

    if (dateInput.value === "" || dateInput.value == null) {
      alert("Porfavor, Elige una fecha");
      flagValidator = false;
    }

    if (dropdownCity.value === "" || dropdownCity.value == null) {
      alert("Porfavor, Elige una ciudad");
      flagValidator = false;
    }

    if (dropdownCategory.value === "" || dropdownCategory.value == null) {
      alert("Porfavor, Elige una categoria");
      flagValidator = false;
    }

    if (cantidadEntradas.value === "" || cantidadEntradas.value == null) {
      alert("Porfavor, Elige la cantidad de entradas de quieres comprar");
      flagValidator = false;
    }

    // Se cojen los elementos de la variable checkPayment la se mete en un array
    // y se le hace el spread de sus datos para poder filtrarlos,
    // se filtran por el que este marcado
    const radioElements = [...checkPayment].filter(e => e.checked);
    if (!radioElements.length) {
      alert("Porfavor, Selecciona un método de pago");
      flagValidator = false;
    }

    //Validacion adicional: la fecha tiene que corresponder al lugar correcto
    if (
        new Date(dateInput.value).toString() === new Date("2025-03-24").toString()
        && dropdownCity.value !== '1'
        && dropdownCity.value !== ''
    ) {
      alert("La fecha corresponde a la ciudad de Milan");
      flagValidator = false;
    }

    if (
        new Date(dateInput.value).toString() === new Date("2025-03-26").toString()
        && dropdownCity.value !== '2'
        && dropdownCity.value !== ''
    ) {
      alert("La fecha corresponde a la ciudad de Barcelona");
      flagValidator = false;
    }

    if (
        new Date(dateInput.value).toString() === new Date("2025-03-28").toString()
        && dropdownCity.value !== '3'
        && dropdownCity.value !== '') {
      alert("La fecha corresponde a la ciudad de Madrid");
      flagValidator = false;
    }

    return flagValidator;
  }
});

// Se crea un event listener escuchando cuando el document esta cargado por completo
document.addEventListener("DOMContentLoaded", function (event) {
  // Se crean variables las cuales asignamos a los elementos por id
  const nameOutput = document.querySelector("#name_output");
  const dateOutput = document.querySelector("#date_output");
  const cityOutput = document.querySelector("#city_output");
  const quantityOutput = document.querySelector("#quantity_output");
  const categoryOutput = document.querySelector("#category_output");
  const paymentOutput = document.querySelector("#payment_output");
  // Se convierte la sessionStorage previamente guardada en json para poder manipilarla
  const getSessionStorage = JSON.parse(sessionStorage.getItem('formData'));
  // Se meten los valores de getSessionStorage en el html de los elementos
  // previamente asignados a las constantes
  nameOutput.innerHTML = getSessionStorage.name;
  dateOutput.innerHTML = getSessionStorage.date;
  cityOutput.innerHTML = getSessionStorage.city;
  quantityOutput.innerHTML = getSessionStorage.quantity;
  categoryOutput.innerHTML = getSessionStorage.category;
  paymentOutput.innerHTML = getSessionStorage.payment;
})







