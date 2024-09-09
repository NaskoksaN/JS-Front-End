function validate() {
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const mailEl = document
        .querySelector('input[type=text]');
    
    mailEl.addEventListener('change', (e) => {
        let inputText = e.currentTarget.value;
        if (!pattern.test(inputText)) {
            return e.currentTarget.classList.add('error');
        }
        e.currentTarget.classList.remove('error');
    });
}