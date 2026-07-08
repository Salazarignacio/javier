# Javier Alto Rendimiento - Sitio Web Oficial

Este proyecto contiene el código fuente para el **Sitio Web Oficial de Javier Alto Rendimiento**, una landing page interactiva y optimizada para la venta y cotización de maquinaria industrial premium (sierras sin fin y picadoras de carne de calibre 42).

El sitio web está diseñado con una estética moderna en modo oscuro, acentos de color cherry-red y una alta interactividad orientada a la conversión de leads mediante la integración fluida con WhatsApp.

---

## 🚀 Características Principales

1. **Catálogo Dinámico e Interactivo:**
   * Carga de productos centralizada y dinámica basada en un modelo de datos en JavaScript.
   * Filtros dinámicos por categoría ("Ver Todo", "Sierras Carniceras", "Picadoras de Carne").
   * Fichas técnicas detalladas integradas en ventanas modales individuales para cada producto.

2. **Optimización de Conversiones (Lead Generation):**
   * **Integración con WhatsApp:** Formulario de consulta inteligente que recopila datos básicos (Nombre, Producto de Interés, Consulta) y abre una conversación pre-redactada en WhatsApp Web/App.
   * **CTA Inteligente en Modal:** Las fichas técnicas disponen de un botón *"Preguntar por este Producto"*. Al pulsarlo, cierra la ficha, pre-selecciona automáticamente el producto en el formulario y hace un scroll suave hacia el área de contacto.

3. **Diseño Visual Premium (Dark Mode & Spotlights):**
   * Fondos oscuros profundos con spotlights de luz radial sutil detrás de los productos.
   * **Efecto de sombras tridimensionales reales (`drop-shadow`):** Las imágenes PNG transparentes recortadas de las máquinas proyectan sombras realistas según su contorno de metal sobre el spotlight de fondo, ofreciendo volumen visual.
   * Glassmorphism (efectos de fondo translúcidos con desenfoque) en la cabecera y el hero para mejorar la legibilidad.
   * Micro-animaciones en hover (zoom sutil) y estados `:active` táctiles de contracción (4%) en botones para una experiencia interactiva muy fluida.

4. **Cabecera Inteligente y Navegación:**
   * Menú móvil lateral deslizable (drawer navigation).
   * Efecto de reducción (shrink) de la cabecera al hacer scroll.
   * **ScrollSpy Activo:** Detección automática mediante `IntersectionObserver` de la sección visible para iluminar el enlace correspondiente en el menú de navegación.

---

## 📁 Estructura del Proyecto

```bash
proyecto javier/
├── css/
│   └── style.css          # Estilos CSS, diseño responsive y animaciones
├── js/
│   └── app.js             # Lógica interactiva, datos de productos e integraciones
├── imagenes-productos/    # Imágenes PNG transparentes de los productos y recursos gráficos
├── index.html             # Estructura principal y maquetado semántico del sitio
├── Datos_Requeridos_Javier.pdf # PDF de relevamiento para enviar al cliente
└── README.md              # Documentación del proyecto (este archivo)
```

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Marcado semántico y optimizado para SEO (etiquetas de descripción, meta keywords y títulos jerárquicos).
* **CSS3:** Hoja de estilos basada en variables (`:root`) para la paleta de colores corporativos. Incluye animaciones CSS nativas (`@keyframes`) para el engranaje del taller y el indicador del mouse del hero. No requiere frameworks adicionales (Vanilla CSS).
* **JavaScript (ES6+):** Lógica nativa de interacción, manipulación dinámica del DOM e integración con la API de WhatsApp (`wa.me`).

---

## 📝 Notas de Mantenimiento y Carga de Datos

### Reemplazo de marcadores temporales
* **Foto del Taller:** En la sección "Ingeniería Pensada para Durar" (`#quality`), se encuentra un marcador de posición visual animado con un engranaje giratorio. Cuenta con un comentario HTML para recordar que debe reemplazarse por una foto real del taller/proceso cuando el cliente la envíe:
  ```html
  <!-- PENDIENTE: reemplazar por foto real del proceso de fabricación o taller -->
  ```
* **Enlaces de Mercado Libre y Teléfonos:** Todos los enlaces a publicaciones y números telefónicos se centralizan al inicio del archivo js/app.js para facilitar su edición en un solo paso:
  ```javascript
  const WHATSAPP_PHONE = "5493410000000"; // Número real sin símbolos
  const WHATSAPP_DISPLAY = "+54 9 341 000-0000"; // Formato legible en la UI
  ```

---

## 🌐 Despliegue (Hosting)

Al ser un sitio web estático (HTML, CSS y JS planos), el despliegue es sumamente sencillo. Se puede alojar de manera gratuita y eficiente en plataformas como:
* **Vercel**
* **Netlify**
* **GitHub Pages**

Para su puesta en producción, solo requiere subir la carpeta completa al servidor y delegar el dominio oficial configurando los registros DNS correspondientes.
