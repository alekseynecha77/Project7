const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");



let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]


    };


    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };

     let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
     });

     const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
        };
        const dailyOptions = {
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };

        let dailyChart = new Chart(dailyCanvas, {
            type: 'bar',
            data: dailyData,
            options: dailyOptions
            });



const mobileData = {
   labels: ["Desktop", "Tablet", "Phones"],
   datasets: [{
   label: '# of Users',
   data: [2000, 550, 500],
   borderWidth: 0,
   backgroundColor: [
   '#7477BF',
   '#78CF82',
   '#51B6C8'
   ]
   }]
   };

   const mobileOptions = {
      aspectRatio: 1.9,
      plugins: {
      legend: {
      position: 'right',
      labels: {
      boxWidth: 20,
      fontStyle: 'bold'
      }
      }
      }
      };
      let mobileChart = new Chart(mobileCanvas, {
         type: 'doughnut',
         data: mobileData,
         options: mobileOptions
         });

      //    function chartUpdate(chart) {
      //       let xScale = chart.scales.x;
      //       let yScale = chart.scales.y;
      //       chart.options.scales = {
      //           newId: {
      //               display: true
      //           },
      //           y: {
      //               display: true,
      //               type: 'logarithmic'
      //           }
      //       };
      //       chart.update();
      //       // need to update the reference
      //       xScale = chart.scales.newId;
      //       yScale = chart.scales.y;
      //   }
         


      const hour = document.getElementById('hour');
      const day = document.getElementById('day');
      const week = document.getElementById('week');
      const month = document.getElementById('month');

      hour.addEventListener('click', ()=>{
   /*       hour.className = '';
         day.className = '';
         week.className = '';
         month.className = ''; */

         trafficChart.data.datasets[0].data= [100, 200, 90, 120, 340, 220, 180, 380, 450, 400, 100];
         trafficChart.data.labels = [
            
            "10am",
            "11am",
            "12pm",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm",
            "6pm",
            "7pm",
            "8pm",
         ]
         trafficChart.update();


      })
      day.addEventListener('click', ()=>{
        /*  hour.className = 'active';
         day.className = '';
         week.className = '';
         month.className = ''; */

         trafficChart.data.datasets[0].data= [200, 300, 400, 90, 220, 330, 440];
         trafficChart.data.labels = [
            
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
         ]
         trafficChart.update();


      })
   
      week.addEventListener('click', ()=>{
         // hour.className = 'active';
         // day.className = '';
         // week.className = '';
         // month.className = '';

         trafficChart.data.datasets[0].data= [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
         trafficChart.data.labels = [
            "16-22",
            "23-29",
            "30-5",
            "6-12",
            "13-19",
            "20-26",
            "27-3",
            "4-10",
            "11-17",
            "18-24",
            "25-31",
     
         ]
         trafficChart.update();


      })
      month.addEventListener('click', ()=>{
         // hour.className = 'active';
         // day.className = '';
         // week.className = '';
         // month.className = '';

         trafficChart.data.datasets[0].data= [3000, 2000, 3500, 5000, 7000, 9000, 7500, 7000, 6000, 3000, 1500, 2500];
         trafficChart.data.labels = [
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
     
         ]
         trafficChart.update();


      })
  

      let elements = document.querySelectorAll('.product-list')

elements.forEach(el => {
  el.addEventListener('click', () => {
    elements.forEach(el => el.classList.remove('active'))
    el.classList.add('active')
//     if (document.querySelector('li .product-list').clicked == true){
//       btnMember.style.fill = "black";

//  } else{
//   btnMember.style.fill = "white";

// }

if(document.querySelector('.product-list').clicked == true){
   elements.classList.add('active');
}else if(document.querySelector('#hour').clicked == true
){
   
   elements.classList.remove('active');


}
   })})




