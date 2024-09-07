function solve() {

    const selectedEl = document
        .querySelector('#selectMenuTo option');
    selectedEl.value=['Binary', 'Hexadecimal'];
    console.log(selectedEl.value);
}