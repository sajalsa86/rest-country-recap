const loadCountries = () => {
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // console.log('Data:', data);
            displayCountries(data)
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Example usage
    const apiUrl = 'https://restcountries.com/v3.1/all';
    fetchData(apiUrl);
};
const displayCountries = countries => {
    //console.log(countries[0]);
    const allCountrisHtml = countries.map(countri => getCountrisHtml(countri));
    const container = document.getElementById('countries');
    container.innerHTML = allCountrisHtml.join('');
};
//orginal way-1
/* const getCountrisHtml = (countri) => {
    return `
    <div class="countri">
        <h2>${countri.name.common}</h2>
        <img src="${countri.flags.png}" alt=""/>
    </div>
    `;
}; */
//way-2
/* const getCountrisHtml = (countri) => {
    const { name, flags } = countri;
    return `
    <div class="countri">
        <h2>${name.common}</h2>
        <img src="${flags.png}" alt=""/>
    </div>
    `;
}; */
//way-3
const getCountrisHtml = ({ name, flags }) => {
    return `
    <div class="countri">
        <h2>${name.common}</h2>
        <img src="${flags.png}" alt=""/>
    </div>
    `;
};
loadCountries();