function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type=button]');

    function setValues(days, hours, minutes, seconds) {
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
    for (const button of buttons) {
        button.addEventListener('click',(e)=>{
            const parent = e.currentTarget.parentElement;
            const input = parent.querySelector('input[type=text]');
            const numbers = Number(input.value);
            
            switch(button.id){
                case 'daysBtn':
                    setValues(numbers, numbers*24, numbers*24*60, numbers*24*60*60);
                    break;
                case 'hoursBtn':
                    setValues(numbers/24, numbers, numbers*60, numbers*60*60);
                    break;
                case 'minutesBtn':
                    setValues(numbers / (24 * 60), numbers / 60, numbers, numbers * 60);
                    break;
                case 'secondsBtn':
                    setValues(numbers / (24 * 60 * 60), numbers / 3600, numbers / 60, numbers);
                    break;
            }
            
        })
    }
}