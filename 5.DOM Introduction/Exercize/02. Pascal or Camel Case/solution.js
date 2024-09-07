function solve() {
  //debugger;
  const textEl = document.querySelector('#text');
  const caseEl = document.querySelector('#naming-convention');
  const resultEl = document.querySelector('#result');
  
  const camelCase = 'Camel Case';
  const pascalCase = 'Pascal Case';
  const errorMsg = 'Error!';
  let result = '';

  const pascalCaseReturn= textEl.value
            .toLowerCase()
            .split(' ')
            .map(x=> x[0].toUpperCase().concat(x.slice(1)))
            .join('');
  
  switch (caseEl.value) {
    case pascalCase:
      result = pascalCaseReturn;
      break;
    case camelCase:
      result = pascalCaseReturn.charAt(0).toLowerCase() + pascalCaseReturn.slice(1);
      break;
    default:
      result = errorMsg;
      break;
  }

  resultEl.textContent = result;
  
}