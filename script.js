document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json") // Cambia esto por tu URL real de API
        .then(response => {
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            return response.json();
        })
        .then(data => {
            let container7 = document.getElementById("productos-categoria-7");
            let container8 = document.getElementById("productos-categoria-8");
            let container10 = document.getElementById("productos-categoria-10");
            let containerDulce = document.getElementById("dulces");
            let containerDestacadoSimple = document.getElementById("destacados-simple");
            let containerDestacadoDoble = document.getElementById("destacados-dobles");
            //let categories = document.getElementById("categorias");

            
            
            // Mostrar productos de la categoría con type: "destacados-dobles"
            data.products
                .filter(producto => producto.type === "destacado")
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


            // Mostrar productos de la categoría con type: "dulces"
            data.products
                .filter(producto => producto.type === "dulces")
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

            // Mostrar productos de la categoría con productCategoryId: 7
            data.products
            .filter(producto => producto.productCategoryId === 7)
            .forEach(producto => {
                let div = document.createElement("div");
                div.classList.add("product");

                let nombre = document.createElement("p");
                nombre.textContent = `${producto.name}`;

                let precio = document.createElement("p");
                precio.textContent = `$${producto.price}`;

                div.appendChild(nombre);
                div.appendChild(precio);
                container7.appendChild(div);
            });

        // Mostrar productos de la categoría con productCategoryId: 8
        /*
        data.products
            .filter(producto => producto.productCategoryId === 8)
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
                container8.appendChild(div);
            });
        */

        // Mostrar productos de la categoría con productCategoryId: 10
        /*
        data.products
            .filter(producto => producto.productCategoryId === 10)
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
                container10.appendChild(div);
            });
        */

            // Mostrar categorías
            /*
            data.productCategories.forEach(categoria => {
                let div = document.createElement("div");
                div.classList.add("category");

                let anchor = document.createElement("a");
                anchor.href = `#category-${categoria.id}`;
                anchor.textContent = categoria.name;

                div.appendChild(anchor);
                categories.appendChild(div);
            });
            */

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

            $('#dulces').owlCarousel({
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
        })
        .catch(error => console.error("Error al cargar API:", error));
});

