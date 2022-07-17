const btcData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=cbea992f738be5c6531f4a714e4c797eba478090cb99685078804eba2a4c971b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

const ethereumData = async () => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=cbea992f738be5c6531f4a714e4c797eba478090cb99685078804eba2a4c971b');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(obj => obj.time)
    const prices = data.map(obj => obj.high)
    return {
        times,
        prices
    }
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

let createBtcChart
let createEthereumChart

async function printBtcChart() {
    let { times, prices } = await btcData()

    let btcChart = document.getElementById('btcChart').getContext('2d');

    let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(247,147,26,.5)');
    gradient.addColorStop(.425, 'rgba(255,193,119,0)');

    Chart.defaults.global.defaultFontFamily = 'Noto Sans';
    Chart.defaults.global.defaultFontSize = 12;

    createBtcChart = new Chart(btcChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(247,147,26,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: '',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    title: function () { }
                },
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

async function printEthereumChart() {
    let { times, prices } = await ethereumData()

    let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

    let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(78,56,216,.5)');
    gradient.addColorStop(.425, 'rgba(118,106,192,0)');

    Chart.defaults.global.defaultFontFamily = 'Noto Sans';
    Chart.defaults.global.defaultFontSize = 12;

    createEthereumChart = new Chart(ethereumChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: 'rgba(118,106,192,1)',
                borderJoinStyle: 'round',
                borderCapStyle: 'round',
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                lineTension: .2,
            }]
        },

        options: {
            title: {
                display: false,
                text: '',
                fontSize: 35
            },

            legend: {
                display: false
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {}
                }],
                yAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },

            tooltips: {
                callbacks: {
                    title: function () { }
                },
                displayColors: false,
                yPadding: 10,
                xPadding: 10,
                position: 'nearest',
                caretSize: 10,
                backgroundColor: 'rgba(255,255,255,.9)',
                bodyFontSize: 15,
                bodyFontColor: '#303030'
            }
        }
    });
}

async function updateBitcoinPrice() {
    let { times, prices } = await btcData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}

async function updateEthereumPrice() {
    let { times, prices } = await ethereumData()
    let currentPrice = prices[prices.length - 1].toFixed(2);

    document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}


updateBitcoinPrice()
updateEthereumPrice()

printBtcChart()
printEthereumChart()