// Initial Data
const exchange = document.querySelector('button')
const from = document.querySelector('#from')
const to = document.querySelector('#to')
const money = document.querySelector('input[type="number"]')
const show = document.querySelector('#show-exchange')

// Initialize the options of currency
fill('from')
fill('to')

// Events area ---------------------------------------------------------

// Event of submit currency --------------------------------------------
exchange.addEventListener('click', (event) => {
  event.preventDefault()
  const selectedIndexFrom = from.selectedIndex
  const selectedIndexTo = to.selectedIndex

  // Conditional to check if the currencys where selected
  if (money.value !== '') {
    if (selectedIndexFrom !== 0 && selectedIndexTo !== 0) {
      const fromCurrency = from.value
      const toCurrency = to.value
      exchangeProcess(fromCurrency, toCurrency)
    } else alert('Please insert a currency')
  } else alert('Please insert the correct amout')
})

// Functions area ------------------------------------------------------

// Function to fill the options
function fill (str) {
  currencies.forEach((item) => {
    const option = document.createElement('option')
    option.value = item
    option.innerHTML = item
    document.querySelector(`#${str}`).add(option)
  })
}

// Function to make the currency change
async function exchangeProcess (from, to) {
  try {
    // Adding a loading indicator and clearing the show area
    show.innerHTML = ''
    const loading = document.createElement('p')
    loading.innerHTML = 'Loading...'
    loading.classList.add('animate-bounce')
    show.append(loading)

    // Request for the API the currency
    const response = await fetch(`https://v6.exchangerate-api.com/v6/e4184b4b2ecff940a39fd675/latest/${from}`)
    const json = await response.json()

    // Handling the API request and showing the exchange
    const moneyExchanged = parseFloat(money.value) * json.conversion_rates[to]
    show.innerHTML = `${parseFloat(money.value).toFixed(2)} ${from} = ${moneyExchanged.toFixed(2)} ${to}`
  } catch (Erro) {
    alert('Exchange failed, try again later')
  }
}
