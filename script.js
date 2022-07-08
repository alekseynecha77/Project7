
let trafficData = document.getElementById('traffic-chart').getContext('2d');
let massPopChart = new Chart(trafficData,{
   
    // labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    // "4-10", "11-17", "18-24", "25-31"],
    //     datasets: [{
    //       data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    // 2500],
    //       backgroundColor: 'rgba(245, 40, 145, 0.8)',
    //       borderWidth: 1,
    //     }]


        type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
