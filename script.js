// Marka badhanka "Email Me" la riixo
const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('click', () => {
    const email = "asliabdiqadir33@gmail.com";
    
    // Habka email-ka lagu koobiyeeyo (Copy to Clipboard)
    navigator.clipboard.writeText(email).then(() => {
        contactBtn.innerText = "Email Copied!";
        contactBtn.style.background = "#27ae60"; // Wuxuu isku beddelayaa cagaar
        
        // Muddo 2 ilbiriqsi ka dib dib u celi magacii hore
        setTimeout(() => {
            contactBtn.innerText = "Email Me";
            contactBtn.style.background = "#00d2d3";
        }, 2000);
    });
});