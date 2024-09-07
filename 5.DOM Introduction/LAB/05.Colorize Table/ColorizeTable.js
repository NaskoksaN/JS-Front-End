function colorize() {
    const lines = document
        .querySelectorAll('table tr');
    let ind=0;
    //debugger;
    for (const line of lines){
        ind++;
        if(ind%2==0){
            line.style.background='teal';
        }
    }
    //console.log(lines);
}