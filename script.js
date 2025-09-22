document.addEventListener('DOMContentLoaded', () => {

    // --- EFECTO "GLASSMORPHISM" EN HEADER AL HACER SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { // Aumentado el umbral para que el hero section tenga más impacto
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- DATOS Y GENERACIÓN DINÁMICA DEL ACORDEÓN FAQ ---
    const faqData = [
        {
            question: "¿Qué es el diseño responsivo?",
            answer: "Es la capacidad de una web para adaptarse visualmente a cualquier tamaño de pantalla, desde un gran monitor de PC hasta un smartphone, garantizando siempre una experiencia de usuario perfecta."
        },
        {
            question: "¿El paquete de LUISTek realmente incluye todo?",
            answer: "Sí, nuestro servicio integral cubre el diseño, la compra de tu dominio, el hosting por un año y la configuración inicial para que no te preocupes por nada técnico. Todo listo para tu éxito online."
        },
        {
            question: "¿En cuánto tiempo estará lista mi página?",
            answer: "El tiempo de entrega estándar es de 3 a 7 días hábiles. Este plazo puede variar ligeramente dependiendo de la complejidad específica de tu proyecto y la agilidad en la entrega de tu contenido."
        },
        {
            question: "¿Qué necesitan de mi parte para empezar el diseño?",
            answer: "Para iniciar, necesitamos tu logo (si tienes), los textos que deseas incluir en tu web (sobre tu negocio, servicios, etc.), información de contacto y cualquier imagen clave que quieras mostrar. ¡Te guiaremos en cada paso!"
        },
        {
            question: "¿Puedo pedir una página tipo e-commerce o para pedidos por WhatsApp?",
            answer: "¡Absolutamente! Ofrecemos soluciones para e-commerce completos o páginas informativas con fuerte integración para pedidos y contacto directo vía WhatsApp, adaptándonos a tus necesidades de venta."
        }
    ];

    const faqContainer = document.querySelector('.faq-accordion');
    faqContainer.innerHTML = ''; // Limpiar el contenido estático para generar dinámicamente

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item', 'animate-on-scroll');
        faqItem.innerHTML = `
            <button class="faq-question">
                <span>${item.question}</span>
                <i class="ph ph-plus"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });

    // --- FUNCIONALIDAD DEL ACORDEÓN FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                answer.style.maxHeight = null; // Cierra el acordeón
            } else {
                // Opcional: Cerrar otros acordeones abiertos
                // document.querySelectorAll('.faq-item.active').forEach(openItem => {
                //     openItem.classList.remove('active');
                //     openItem.querySelector('.faq-answer').style.maxHeight = null;
                // });
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px"; // Abre el acordeón dinámicamente
            }
        });
    });

    // --- ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER) ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Opcional: para que la animación solo ocurra una vez
            }
        });
    }, {
        threshold: 0.15 // El elemento se activa cuando el 15% es visible
    });

    scrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- SMOOTH SCROLL PARA ENLACES DE NAVEGACIÓN ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item', 'animate-on-scroll');
        faqItem.innerHTML = `
            <button class="faq-question">
                <span>${item.question}</span>
                <i class="ph ph-plus"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });

    // --- FUNCIONALIDAD DEL ACORDEÓN FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Opcional: Cerrar otros items al abrir uno
            // faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // --- ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER) ---
    // (Mucho más eficiente que escuchar el evento 'scroll')
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez que es visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // El elemento se activa cuando el 10% es visible
    });

    scrollElements.forEach(el => {
        observer.observe(el);
    });

});

