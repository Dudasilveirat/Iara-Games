function getQuote() {

    const options = { method: 'GET' };

    const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

    fetch(url, options)
        .then(response => response.json())
        .then(switchPrice)
        .catch(err => console.error(err));

}

function switchPrice(response) {

    const quote = parseFloat(response['USDBRL']['high']);

    const price_elements = document.getElementsByClassName('valor-moeda');

    const text_elements = document.getElementsByClassName('moeda');

    for (let i = 0; i < price_elements.length; i++) {

        let element = price_elements[i];

        let currentValue = parseFloat(element.textContent);

        let newValue = currentValue * quote;

        element.textContent = newValue.toFixed(2);
    }

    for (let i = 0; i < text_elements.length; i++) {

        let element = text_elements[i];

        element.textContent = 'U$ ';
    }
}
