// Initial Data
// Initialize the options of currency
fill('from')
fill('to')

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
