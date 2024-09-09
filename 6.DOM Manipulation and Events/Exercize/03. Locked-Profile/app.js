function lockedProfile() {
    const profileEls = document
        .querySelectorAll('.profile');
    for (const profile of profileEls) {
        const buttonEl = profile.querySelector('button');
        const lock = profile.querySelector('input[value="lock"]');
        const unlock = profile.querySelector('input[value="unlock"]');
        buttonEl.addEventListener('click', (e)=> {
            if(lock.checked){
                return;
            }

            const hiddenEl = profile.querySelector('div div');
            if(buttonEl.textContent==='Show more'){
                console.log(hiddenEl);
                hiddenEl.style.display = 'block';
                buttonEl.textContent='Hide it';
            } else if(buttonEl.textContent==='Hide it'){
                hiddenEl.style.display='none';
                buttonEl.textContent='Show more';
            }
            console.log(buttonEl.textContent);
        })
    }
}

