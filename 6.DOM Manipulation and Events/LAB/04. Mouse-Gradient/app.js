function attachGradientEvents() {
    const gradientEl = document
        .getElementById('gradient');
    const resultEl = document
        .getElementById('result');
    
        gradientEl.addEventListener('mousemove' , (e)=>{
            const currPosition = e.offsetX;
            const defaultWidth = e.currentTarget.clientWidth;
            
            const percent = Math.floor((currPosition/defaultWidth)*100);
            console.log(percent);
            resultEl.textContent=`${percent}%`;
        });

}