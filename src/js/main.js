    function padZero(num) {
        return num.toString().padStart(2, '0');
    }
    function updateCountdown() {
        const targetDate = new Date('2026-01-01T00:00:00');
        const now = new Date();
        let diffTime = targetDate - now;

        if (diffTime < 0) diffTime = 0;

        const hours = Math.floor(diffTime / (1000 * 60 * 60));
        const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
        const seconds = Math.floor((diffTime / 1000) % 60);

        document.getElementById('countdown').textContent =
            `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    // Actualiza cada segundo para mostrar los segundos restantes
    setInterval(updateCountdown, 1000);