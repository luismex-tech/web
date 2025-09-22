document.addEventListener('DOMContentLoaded', () => {

    // --- EFECTO "GLASSMORPHISM" EN HEADER AL HACER SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- DATOS Y GENERACIÓN DINÁMICA DEL ACORDEÓN FAQ ---
    // (Esto demuestra un enfoque moderno y escalable)
    const faqData = [
        {
            question: "¿Qué es el diseño responsivo?",
            answer: "Es la capacidad de una web para adaptarse visualmente a cualquier tamaño de pantalla, desde un gran monitor de PC hasta un smartphone, garantizando siempre una experiencia de usuario perfecta."
        },
        {
            question: "¿El paquete realmente incluye todo?",
            answer: "Sí, nuestro servicio integral cubre el diseño, la compra de tu dominio, el hosting por un año y la configuración inicial para que no te preocupes por nada técnico."
        },
        {
            question: "¿En cuánto tiempo estará lista mi página?",
            answer: "El tiempo de entrega estándar es de 3 a 7 días hábiles, dependiendo de la complejidad y los requerimientos específicos de tu proyecto."
        },
        {
            question: "¿Qué necesitan de mi parte para empezar?",
            answer: "Para iniciar, necesitamos tu logo (si tienes), los textos sobre tu negocio, información de contacto y las imágenes que quieras mostrar. Si te falta algo, ¡nosotros te asesoramos!"
        }
    ];

    const faqContainer = document.querySelector('.faq-accordion');
    faqContainer.innerHTML = ''; // Limpiar el contenido estático

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

