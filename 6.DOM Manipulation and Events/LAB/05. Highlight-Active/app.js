function focused() {
    const fieldEl = document
        .querySelectorAll('input[type=text]');
        
    fieldEl.forEach(element => {
        element.addEventListener('focus', (e)=>{
            e.currentTarget.parentElement.classList.add('focused')
        })
    });
    fieldEl.forEach(element => {
        element.addEventListener('blur', (e)=>{
            e.currentTarget.parentElement.classList.remove('focused')
        })
    });
    
}