document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json") // Cambia esto por tu URL real de API
        .then(response => {
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            return response.json();
        })
        .then(data => {
            //let listaBebidas = document.getElementById("listaBebidas");
            let listasCafe = document.getElementById("listaCafe");
            let listaTe = document.getElementById("listaTe");
            let otrosLiquidos = document.getElementById("otrosLiquidos");
            //let container8 = document.getElementById("productos-categoria-8");
            let containerTodoDulce = document.getElementById("todoDulces");
            let containerDulce = document.getElementById("destacadoDulces");
            let listaDulces = document.getElementById("listaDulces");
            let listaSalados = document.getElementById("listaSalados");
            let containerSalados = document.getElementById("destacadoSalados");
            //let containerBebidas = document.getElementById("bebidas");
            let containerDestacadoSimple = document.getElementById("destacados-simple");
            let containerDestacadoDoble = document.getElementById("destacados-dobles");
            //let categories = document.getElementById("categorias");

            //lista café  
            data.products
            .filter(producto => producto.productCategoryId === 7 || producto.productCategoryId === 8)
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(nombre);
                    div.appendChild(precio);
                    listasCafe.appendChild(div);
                });
            
            //lista Té  
            data.products
            .filter(producto => producto.productCategoryId === 11)
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(nombre);
                    div.appendChild(precio);
                    listaTe.appendChild(div);
                });

            //lista otros líquidos 
            data.products
            .filter(producto => producto.productCategoryId === 10)
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(nombre);
                    div.appendChild(precio);
                    otrosLiquidos.appendChild(div);
                });

            //lista dulces
            data.products
            .filter(producto => producto.productCategoryId === 5)
            .forEach(producto => {
                let div = document.createElement("div");
                div.classList.add("product");

                let nombre = document.createElement("p");
                nombre.textContent = `${producto.name}`;

                let precio = document.createElement("p");
                precio.textContent = `$${producto.price}`;

                div.appendChild(nombre);
                div.appendChild(precio);
                listaDulces.appendChild(div);
            });


            //lista salados
            data.products
            .filter(producto => producto.productCategoryId === 6)
            .forEach(producto => {
                let div = document.createElement("div");
                div.classList.add("product");

                let nombre = document.createElement("p");
                nombre.textContent = `${producto.name}`;

                let precio = document.createElement("p");
                precio.textContent = `$${producto.price}`;

                div.appendChild(nombre);
                div.appendChild(precio);
                listaSalados.appendChild(div);
            });
  


            // Mostrar productos de la categoría con type: "destacados-dobles"
            data.products
                .filter(producto => producto.productGroups === "destacadoDoble")
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let img = document.createElement("img");
                    img.src = producto.image ? producto.image : "https://via.placeholder.com/50";
                    img.alt = producto.name;

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(img);
                    div.appendChild(nombre);
                    div.appendChild(precio);
                    containerDestacadoDoble.appendChild(div);
                });

            // Mostrar productos de la categoría con type: "destacados-simple"
            data.products
                .filter(producto => producto.type === "destacadoSimple")
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let img = document.createElement("img");
                    img.src = producto.image ? producto.image : "https://via.placeholder.com/50";
                    img.alt = producto.name;

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(img);
                    div.appendChild(nombre);
                    div.appendChild(precio);
                    containerDestacadoSimple.appendChild(div);
                });

            

            // Mostrar productos de la categoría con type: "destacadoDulces"
            data.products
                .filter(producto => producto.type === "destacadoDulces")
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let img = document.createElement("img");
                    img.src = producto.image ? producto.image : "https://via.placeholder.com/50";
                    img.alt = producto.name;

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(img);
                    div.appendChild(nombre);
                    div.appendChild(precio);
                    containerDulce.appendChild(div);
                });


            // Mostrar productos de la categoría con type: "salados"
            data.products
                .filter(producto => producto.type === "salados")
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let img = document.createElement("img");
                    img.src = producto.image ? producto.image : "https://via.placeholder.com/50";
                    img.alt = producto.name;

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(img);
                    div.appendChild(nombre);
                    div.appendChild(precio);
                    containerSalados.appendChild(div);
                });

            




            // Mostrar productos de la categoría con type: "todoDulces"
            data.products
                .filter(producto => producto.type === "todoDulces")
                .forEach(producto => {
                    let div = document.createElement("div");
                    div.classList.add("product");

                    let nombre = document.createElement("p");
                    nombre.textContent = `${producto.name}`;

                    let precio = document.createElement("p");
                    precio.textContent = `$${producto.price}`;

                    div.appendChild(nombre);
                    div.appendChild(precio);
                    containerTodoDulce.appendChild(div);
                });


       
                

            $('.vitrina').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 5
                    }
                }
            });

            $('#destacadoDulces').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });

            $('#destacadoSalados').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });

            $(function() {
                $('.accordion-content').hide();

                $('.accordion').on('click', '.accordion-trigger', function(e) {
                    e.preventDefault();

                    $('.accordion-content:visible').slideUp(600);

                    $(this)
                        .next('.accordion-content')
                        .not(':animated')
                        .slideToggle(300);
                });
            });

        })
        .catch(error => console.error("Error al cargar API:", error));
});