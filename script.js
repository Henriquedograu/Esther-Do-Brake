document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const memories = document.querySelectorAll(".memory img");

    members.forEach(member => {
        member.addEventListener("mouseover", () => {
            member.style.boxShadow = "0px 10px 15px rgba(0,0,0,0.2)";
        });

        member.addEventListener("mouseout", () => {
            member.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
        });
    });

    // Efeito para as imagens dos membros
    const memberImages = document.querySelectorAll(".member img");
    memberImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.innerHTML = `<img src="${img.src}" class="zoomed-image">`;
            document.body.appendChild(overlay);

            createGlitterEffect(img); // Cria o glitter
            createFireworksEffect(); // Cria os fogos de artifício no centro da tela

            // Fechar a imagem ampliada quando clicar fora dela
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {  // Verifica se clicou fora da imagem
                    overlay.remove();
                }
            });
        });
    });

    // Função para criar o efeito de glitter
    function createGlitterEffect(img) {
        const glitterContainer = document.createElement("div");
        glitterContainer.classList.add("glitter-container");
        document.body.appendChild(glitterContainer);

        let glitterInterval;

        glitterInterval = setInterval(() => {
            createGlitter(); // Gerar glitter a cada 50ms
        }, 50);

        setTimeout(() => {
            clearInterval(glitterInterval); // Para de gerar glitter após 2 segundos
        }, 2000);

        function createGlitter() {
            const glitter = document.createElement("div");
            glitter.classList.add("glitter");
            glitter.style.left = Math.random() * 100 + "vw";
            glitter.style.animationDuration = (Math.random() * 2 + 2) + "s";
            glitterContainer.appendChild(glitter);
        }

        setTimeout(() => {
            glitterContainer.remove();
        }, 3000); // O glitter desaparece após 3 segundos
    }

    // Função para criar os fogos de artifício rosa no centro da tela
    function createFireworksEffect() {
        const fireworksContainer = document.createElement("div");
        fireworksContainer.classList.add("fireworks-container");
        document.body.appendChild(fireworksContainer);

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const particles = 50;

        for (let i = 0; i < particles; i++) {
            const firework = document.createElement("div");
            firework.classList.add("firework");

            firework.style.backgroundColor = "pink";

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 100 + 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            firework.style.left = centerX + x + "px";
            firework.style.top = centerY + y + "px";

            firework.style.setProperty('--x', `${x}px`);
            firework.style.setProperty('--y', `${y}px`);
            firework.style.setProperty('--x2', `${x * 2}px`);
            firework.style.setProperty('--y2', `${y * 2}px`);

            firework.style.animationDuration = `${Math.random() * 1 + 1}s`;

            fireworksContainer.appendChild(firework);
        }

        setTimeout(() => {
            fireworksContainer.remove();
        }, 2000); // Remover fogos após 2 segundos
    }

    // Não adiciona efeito de glitter ou fogos nas imagens de "Lembranças"
    memories.forEach(memory => {
        memory.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.innerHTML = `<img src="${memory.src}" class="zoomed-image">`;
            document.body.appendChild(overlay);

            // Fechar a imagem ampliada quando clicar fora dela
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {  // Verifica se clicou fora da imagem
                    overlay.remove();
                }
            });
        });
    });
});
