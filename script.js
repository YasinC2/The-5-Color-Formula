const hueSlider = document.getElementById('hue-slider');
const hueValueInput = document.getElementById('hue-value');

function updateHue(hue) {
    hueSlider.value = hue;
    hueValueInput.value = hue;
    document.documentElement.style.setProperty('--hue', hue);
    hue = Number(hue);
    let hue2color = 180;
    let hue3color = 0; // used to be 60
    let hue2 = hue + hue2color;
    let hue3 = hue + hue3color;
    if (hue > hue2color) {
        hue2 = hue + hue2color - 360;
    }
    // if (hue > hue3color) {}
    code.textContent = `:root {
    --color-primary: hsl(${hue3}, 80%, 20%);
    --color-secondary: hsl(${hue2}, 20%, 40%);
    --color-primary-light: hsl(${hue}, 50%, 90%);
    --color-primary-dark: hsl(${hue}, 50%, 10%);
    --color-base: hsl(${hue}, 50%, 95%);
}
.dark {
    --color-primary: hsl(${hue3}, 80%, 80%);
    --color-secondary: hsl(${hue2}, 20%, 60%);
    --color-primary-light: hsl(${hue}, 50%, 10%);
    --color-primary-dark: hsl(${hue}, 50%, 90%);
    --color-base: hsl(${hue}, 50%, 5%);
}`
}
hueSlider.addEventListener('input', function () {
    updateHue(hueSlider.value);
});
hueValueInput.addEventListener('input', function () {
    const hue = hueValueInput.value;
    if (hue >= 0 && hue <= 360) {
        updateHue(hue);
    }
});

function dark() {
    document.body.classList.toggle("dark");
}

// copy button
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.querySelector(".copy-btn");
    copyButton.addEventListener("click", () => {
        const preElement = copyButton.parentElement;
        const code = preElement.textContent.trim().replace("Copy", "").trim();

        navigator.clipboard.writeText(code).then(() => {
            copyButton.textContent = "Copied";
            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 2000);
        });
    });
});