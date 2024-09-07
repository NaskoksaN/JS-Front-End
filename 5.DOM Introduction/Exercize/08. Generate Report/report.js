function generateReport() {
    const checkBoxEl = document
        .querySelectorAll('thead tr th');
    const infoEl = document
        .querySelectorAll("tbody tr");
    console.log(checkBoxEl);
    console.log(infoEl);

    const checkInputs = [...checkBoxEl]
    .map((x, i) => ({ input: x.children[0], index: i }))
    .filter((x) => x.input.checked);

    console.log(checkInputs);

    const outputData = [...infoEl].map((tr) => {
        return checkInputs.reduce((acc, curr) => {
          acc[curr.input.name] = tr.children[curr.index].textContent;
          return acc;
        }, {});
      });
      
      document.querySelector("#output").value = JSON.stringify(outputData);
}