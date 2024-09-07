function solve() {
  const text = document
    .querySelector('#input');
  const result = document
    .getElementById('output');

  const pArr = text.value
    .split('.')
    .filter((l) => l.length >= 1);
  console.log(pArr);
  const chunkSize = 3;
  for (let i = 0; i < pArr.length; i+=chunkSize) {
    const paragraphEl = document.createElement('p');
    const chunk = pArr.slice(i, i + chunkSize).join('.');
    paragraphEl.textContent = chunk.concat('.');
    result.appendChild(paragraphEl);
  }
}