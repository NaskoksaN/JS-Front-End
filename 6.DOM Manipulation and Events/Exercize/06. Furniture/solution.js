function solve() {
  const inputEl = document
    .querySelector('div > textarea');
  const buttonGenerate = document
    .querySelector('div > button');
  const products = [];
  

  const tBodyEl = document.querySelectorAll('.table tbody');

  buttonGenerate.addEventListener('click', (element) => {
    const productInput = JSON.parse(inputEl.value);
    for (const element of productInput) {
      const img = element.img;
      const name = element.name;
      const price = Number(element.price);
      const decFactor = parseFloat(element.decFactor);
      const productObj = {
        img,
        name,
        price,
        decFactor,
      }
      products.push(productObj);
    };

    for (const element of products) {

      const trEl = document.createElement('tr');

      const td1 = document.createElement('td');
      const imgEl = document.createElement('img');

      const td2 = document.createElement('td');
      const pName = document.createElement('p');

      const td3 = document.createElement('td');
      const pPrice = document.createElement('p');

      const td4 = document.createElement('td');
      const pDecFactor = document.createElement('p');

      const td5 = document.createElement('td');
      const checkEl = document.createElement('input');

      imgEl.src = element.img;
      pName.textContent = element.name;
      pPrice.textContent = element.price;
      pDecFactor.textContent = element.decFactor;
      checkEl.type = 'checkbox';
      checkEl.disabled = false;

      td1.append(imgEl);
      td2.append(pName);
      td3.append(pPrice);
      td4.append(pDecFactor);
      td5.append(checkEl);

      trEl.append(td1);
      trEl.append(td2);
      trEl.append(td3);
      trEl.append(td4);
      trEl.append(td5);

      tBodyEl.forEach(element => {
        element.append(trEl);
      });
    }
  });

  const div = document.querySelector('#exercise');
  const buttonBuyEl = div.querySelector('button:last-of-type');
  const textAreaEl = div.querySelector('textarea:last-of-type');
  const shopList = [];
  buttonBuyEl.addEventListener('click', (e) => {
    const bodyEl = document.querySelectorAll('.table tbody > tr');
    //console.log(bodyEl);
    bodyEl.forEach(el => {
      const checkBox = el.querySelector('input[type="checkbox"]');
      if (checkBox.checked) {
        const name = el.children[1].querySelector('p').textContent;
        const price = Number(el.children[2].querySelector('p').textContent);
        const decFactor = Number(el.children[3].querySelector('p').textContent);
        const boughtObj = {
          name: name, price: price, decFactor: decFactor,
        }

        shopList.push(boughtObj);

      };
    });
    const productNames = [];
    let totalPrice=0;
    let decFactorSum=0;
    shopList.forEach(pr =>{
      productNames.push(pr.name)
      totalPrice+=pr.price;
      decFactorSum+=pr.decFactor;
    });
    const totalItems = productNames.length; 
    const outputString = `Bought furniture: ${productNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(decFactorSum / totalItems)}`;
    textAreaEl.value=outputString;
    console.log(outputString);
    
  });
}