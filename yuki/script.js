const butterflies = document.querySelectorAll('.butterfly');

function releaseButterflies() {
    butterflies.forEach(butterfly => {
        butterfly.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        butterfly.style.animationDuration = `${Math.random() * 10 + 10}s`;
        butterfly.style.top = `${Math.random() * 100}vh`;
        butterfly.style.left = `${Math.random() * 100}vw`;
        butterfly.style.opacity = '1';
    });
}
