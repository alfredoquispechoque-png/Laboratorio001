const productosJSON = [
      {
        id: 1,
        nombre: "Café Moca",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema",
        imagen: "../p2/imagenes/tazadeCafe.PNG"
      },
      {
        id: 2,
        nombre: "Té verde",
        precio: 50.00,
        descripcion: "Hoja de té verde",
        imagen: "../P2/imagenes/tazadete.PNG"
      },
      {
        id: 3,
        nombre: "Smoothie de frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas naturales",
        imagen: "../p2/imagenes/smotiedefrutas.PNG"
      }
    ];

    // Función principal
    function mostrarProductos() {
      const contenedor = document.querySelector('#contenedor-productos');

      productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');
        
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <p>${producto.descripcion}</p>
          <p><strong>Precio:</strong> Bs${producto.precio.toFixed(2)}</p>
          <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        //insertar el nuevo elemento
        contenedor.appendChild(card);
      });
    }

    // Llamar a la función al cargar la página
    mostrarProductos();