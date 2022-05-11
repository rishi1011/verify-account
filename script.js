const inputCodes = document.querySelectorAll('.code');

inputCodes[0].focus();

inputCodes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            if (idx === inputCodes.length - 1) {
                if (code.value !== '')
                    e.preventDefault();
            } else {
                setTimeout(() => inputCodes[idx + 1].focus(), 0);
            }
        } else if (e.key === 'Backspace') {
            if (code.value === '' && idx !== 0) {
                inputCodes[idx - 1].focus();
            }
        }
    });
});