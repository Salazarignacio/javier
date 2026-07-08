/* ==========================================================================
   JAVASCRIPT INTERACTIVE LOGIC - JAVIER ALTO RENDIMIENTO
   ========================================================================== */

// ==========================================================================
// CONFIGURACIÓN DE CONTACTO CENTRALIZADA
// ==========================================================================
const WHATSAPP_PHONE = "5493410000000"; // Cambiar por el número real (sin símbolos, ej: 5493410000000)
const WHATSAPP_DISPLAY = "+54 9 341 000-0000"; // Número en formato legible para la UI
const WHATSAPP_DEFAULT_MESSAGE = "Hola, quiero consultar por sus productos";

// 1. DATA STORE: PRODUCTS DATA
const PRODUCTS_DATA = [
    {
        id: 1,
        title: "Línea Esmaltada 290",
        type: "sierra",
        subtitle: "Sierra Sin Fin Industrial",
        image: "./imagenes-productos/producto-01-esmaltada-290.png",
        tags: ["1 HP", "Esmaltada", "Monofásica/Trifásica"],
        specsPreview: {
            "Motor": "1 HP",
            "Medida de Hoja": "290",
            "Dimensiones": "1800 x 680 x 600 mm"
        },
        specs: {
            "Modelo": "Línea Esmaltada 290",
            "Dimensiones (Alto x Ancho x Profundidad)": "1800 x 680 x 600 mm",
            "Medida de Hoja": "290",
            "Tipo de Hoja": "16mm - 19mm",
            "Motor": "1 HP",
            "Velocidad de la Hoja": "10 mts/seg",
            "Transmisión": "Correa",
            "Tensión disponible": "380V Trifásica / 220V Monofásica"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 2,
        title: "Línea Esmaltada 330",
        type: "sierra",
        subtitle: "Sierra Sin Fin Industrial",
        image: "./imagenes-productos/producto-02-esmaltada-330.png",
        tags: ["1.5 HP", "Esmaltada", "Alto Rendimiento"],
        specsPreview: {
            "Motor": "1.5 HP",
            "Medida de Hoja": "330",
            "Dimensiones": "1850 x 800 x 600 mm"
        },
        specs: {
            "Modelo": "Línea Esmaltada 330",
            "Dimensiones (Alto x Ancho x Profundidad)": "1850 x 800 x 600 mm",
            "Medida de Hoja": "330",
            "Tipo de Hoja": "16mm - 19mm",
            "Motor": "1.5 HP",
            "Velocidad de la Hoja": "10 mts/seg",
            "Transmisión": "Correa",
            "Tensión disponible": "380V Trifásica / 220V Monofásica"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 3,
        title: "Línea Esmaltada 350",
        type: "sierra",
        subtitle: "Sierra Sin Fin Industrial",
        image: "./imagenes-productos/producto-03-esmaltada-350.png",
        tags: ["1.5 / 2 HP", "Esmaltada", "Capacidad Extra"],
        specsPreview: {
            "Motor": "1.5 HP o 2 HP",
            "Medida de Hoja": "350",
            "Dimensiones": "2000 x 600 x 850 mm"
        },
        specs: {
            "Modelo": "Línea Esmaltada 350",
            "Dimensiones (Alto x Ancho x Profundidad)": "2000 x 600 x 850 mm",
            "Medida de Hoja": "350",
            "Tipo de Hoja": "16mm - 19mm",
            "Motor": "1.5 HP o 2 HP",
            "Velocidad de la Hoja": "10 mts/seg",
            "Transmisión": "Correa",
            "Tensión disponible": "380V Trifásica / 220V Monofásica"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 4,
        title: "Línea Acero Inoxidable 350",
        type: "sierra",
        subtitle: "Sierra Sin Fin Acero AISI 304",
        image: "./imagenes-productos/producto-04-acero-inox-350.png",
        tags: ["1.5 / 2 HP", "Acero Inox", "Higiene Premium"],
        specsPreview: {
            "Motor": "1.5 HP o 2 HP",
            "Medida de Hoja": "350",
            "Material": "Acero Inoxidable"
        },
        specs: {
            "Modelo": "Línea Acero Inoxidable 350",
            "Estructura": "Acero Inoxidable AISI 304",
            "Dimensiones (Alto x Ancho x Profundidad)": "2000 x 600 x 850 mm",
            "Medida de Hoja": "350",
            "Tipo de Hoja": "16mm - 19mm",
            "Motor": "1.5 HP o 2 HP",
            "Velocidad de la Hoja": "10 mts/seg",
            "Transmisión": "Correa",
            "Tensión disponible": "380V Trifásica / 220V Monofásica"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 5,
        title: "Línea Frigorífico 350",
        type: "sierra",
        subtitle: "Sierra Cinta Frigorífico Premium",
        image: "./imagenes-productos/producto-05-frigorifico-350.png",
        tags: ["2 HP", "Acero Inox 304", "Seguridad Homologada"],
        specsPreview: {
            "Motor": "2 HP Blindado",
            "Medida de Hoja": "350",
            "Seguridad": "Parada de Emergencia"
        },
        specs: {
            "Modelo": "Línea Frigorífico 350",
            "Estructura": "Acero Inoxidable AISI 304",
            "Dimensiones (Alto x Ancho x Profundidad)": "2000 x 950 x 800 mm",
            "Medida de Hoja": "350",
            "Tipo de Hoja": "16mm",
            "Motor": "2 HP Blindado Czerweny",
            "Velocidad de la Hoja": "10 mts/seg",
            "Transmisión": "Correa",
            "Tensión disponible": "380V Trifásica / 220V Monofásica",
            "Sistemas de Seguridad": "Seguridad Eléctrica / Parada de Emergencia / Cableado Ignífugo"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 6,
        title: "Picadora Calibre 42 (Monofásica)",
        type: "picadora",
        subtitle: "Picadora de Carne Industrial",
        image: "./imagenes-productos/producto-06-picadora-42-monofasica.png",
        tags: ["2 HP", "220 V", "Producción 450 KG"],
        specsPreview: {
            "Producción": "450 KG/h",
            "Motor": "2 HP Czerweny",
            "Tensión": "220 V"
        },
        specs: {
            "Modelo": "Picadora Calibre 42 Monofásica",
            "Producción estimada": "450 KG/hora",
            "Disco y Cuchilla": "Nº 42",
            "Potencia": "2 HP",
            "Motorreductor": "Fabricación Propia",
            "Motor": "Czerweny Blindado",
            "Tensión": "220 V (Monofásica)",
            "Peso de la Máquina": "100 KG",
            "Medidas (Alto x Ancho x Profundidad)": "1.050mm x 58cm x 70cm"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 7,
        title: "Picadora Calibre 42 (Trifásica)",
        type: "picadora",
        subtitle: "Picadora de Carne Industrial",
        image: "./imagenes-productos/producto-07-picadora-42-trifasica.png",
        tags: ["2 HP", "380 V", "Producción 450 KG"],
        specsPreview: {
            "Producción": "450 KG/h",
            "Motor": "2 HP Czerweny",
            "Tensión": "380 V"
        },
        specs: {
            "Modelo": "Picadora Calibre 42 Trifásica",
            "Producción estimada": "450 KG/hora",
            "Disco y Cuchilla": "Nº 42",
            "Potencia": "2 HP",
            "Motorreductor": "Fabricación Propia",
            "Motor": "Czerweny Blindado",
            "Tensión": "380 V (Trifásica)",
            "Peso de la Máquina": "100 KG",
            "Medidas (Alto x Ancho x Profundidad)": "1.050mm x 58cm x 70cm"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    },
    {
        id: 8,
        title: "Picadora Calibre 42 (Alto Rendimiento)",
        type: "picadora",
        subtitle: "Picadora Frigorífica Premium",
        image: "./imagenes-productos/producto-08-picadora-42-altorendimiento.png",
        tags: ["4 HP", "380 V", "Producción 850 KG"],
        specsPreview: {
            "Producción": "850 KG/h",
            "Motor": "4 HP Czerweny",
            "Tensión": "380 V"
        },
        specs: {
            "Modelo": "Picadora Calibre 42 - 850KG",
            "Producción estimada": "850 KG/hora",
            "Disco y Cuchilla": "Nº 42",
            "Potencia": "4 HP",
            "Motorreductor": "Fabricación Propia",
            "Motor": "Czerweny Blindado",
            "Tensión": "380 V (Trifásica)",
            "Peso de la Máquina": "120 KG",
            "Medidas (Alto x Ancho x Profundidad)": "1.050mm x 58cm x 70cm"
        },
        mlLink: "https://www.mercadolibre.com.ar"
    }
];

// 2. DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalTitle = document.getElementById("modal-title");
    const modalSpecsTable = document.getElementById("modal-specs-table");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const contactForm = document.getElementById("whatsapp-contact-form");
    const productSelect = document.getElementById("interested-product");

    // Populate contact form selector dynamically
    PRODUCTS_DATA.forEach(product => {
        const option = document.createElement("option");
        option.value = product.title;
        option.textContent = product.title;
        productSelect.appendChild(option);
    });

    // 3. RENDER PRODUCTS
    const renderProducts = (filter = "all") => {
        productGrid.innerHTML = "";
        
        const filteredProducts = filter === "all" 
            ? PRODUCTS_DATA 
            : PRODUCTS_DATA.filter(p => p.type === filter);

        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-type", product.type);
            
            // Build specs preview HTML
            let specsPreviewHtml = "";
            for (const [key, val] of Object.entries(product.specsPreview)) {
                specsPreviewHtml += `
                    <div class="spec-preview-item">
                        <span class="spec-preview-label">${key}</span>
                        <span class="spec-preview-val">${val}</span>
                    </div>
                `;
            }

            // Build tags HTML
            const tagsHtml = product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join("");

            card.innerHTML = `
                <div class="product-img-box">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="tags-container">
                        ${tagsHtml}
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-subtitle">${product.subtitle}</p>
                    <div class="product-specs-preview">
                        ${specsPreviewHtml}
                    </div>
                    <div class="product-actions">
                        <button class="btn-card-primary view-specs-btn" data-id="${product.id}">Ficha Técnica</button>
                        <a href="${product.mlLink}" target="_blank" class="btn-card-ml">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            Ver en Mercado Libre
                        </a>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });

        // Add event listeners to the new buttons
        const viewSpecsButtons = document.querySelectorAll(".view-specs-btn");
        viewSpecsButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                openModal(id);
            });
        });
    };

    // 4. FILTER BUTTONS CLICK HANDLERS
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove active class from all
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to clicked
            button.classList.add("active");
            
            const filterValue = button.getAttribute("data-filter");
            renderProducts(filterValue);
        });
    });

    // 5. MODAL LOGIC (OPEN & CLOSE)
    const openModal = (productId) => {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        modalTitle.textContent = product.title;
        modalSpecsTable.innerHTML = "";

        for (const [key, value] of Object.entries(product.specs)) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="spec-name">${key}</td>
                <td class="spec-val">${value}</td>
            `;
            modalSpecsTable.appendChild(tr);
        }

        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    const closeModal = () => {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    };

    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // 6. WHATSAPP CONTACT INTEGRATION
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("client-name").value.trim();
        const product = document.getElementById("interested-product").value;
        const comment = document.getElementById("client-comment").value.trim();

        // Target factory WhatsApp phone number (usamos la variable global centralizada)
        const phoneNumber = WHATSAPP_PHONE; 

        // Formulate WhatsApp message text
        const messageText = `Hola, me contacto desde el Sitio Oficial de Javier Alto Rendimiento.
        
*Mi nombre:* ${name}
*Interés:* ${product}
*Mensaje:* ${comment}`;

        // URL encode the message text
        const encodedText = encodeURIComponent(messageText);
        
        // Open WhatsApp web/app
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
    });

    // 7. INITIALIZE DYNAMIC CONTACT LINKS
    // Configurar enlace del botón flotante de WhatsApp
    const whatsappFloatBtn = document.getElementById("whatsapp-btn-float");
    if (whatsappFloatBtn) {
        const encodedMsg = encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE);
        whatsappFloatBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;
    }

    // Configurar enlace y texto del teléfono/WhatsApp en contacto
    const contactWhatsappLink = document.getElementById("contact-whatsapp-link");
    if (contactWhatsappLink) {
        contactWhatsappLink.href = `https://wa.me/${WHATSAPP_PHONE}`;
        contactWhatsappLink.textContent = WHATSAPP_DISPLAY;
    }

    // Initial render of all products
    renderProducts();

    // 8. HEADER SCROLL EFFECT (SHRINK)
    const header = document.querySelector(".site-header");
    let ticking = false;

    const updateHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
    
    updateHeader(); // Check initial state

    // 9. SCROLLSPY (ACTIVE LINK DETECTION)
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -55% 0px", // Detect section in reading area
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                // Update desktop links
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });

                // Update mobile links
                mobileNavLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // 10. MOBILE MENU NAVIGATION
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileNavPanel = document.getElementById("mobile-nav-panel");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-btn");

    const openMobileMenu = () => {
        mobileMenuToggle.classList.add("active");
        mobileNavPanel.classList.add("active");
        mobileNavOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Lock scroll
    };

    const closeMobileMenu = () => {
        mobileMenuToggle.classList.remove("active");
        mobileNavPanel.classList.remove("active");
        mobileNavOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Unlock scroll
    };

    if (mobileMenuToggle && mobileNavPanel && mobileNavOverlay) {
        mobileMenuToggle.addEventListener("click", () => {
            if (mobileNavPanel.classList.contains("active")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileNavOverlay.addEventListener("click", closeMobileMenu);

        mobileLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }
});
