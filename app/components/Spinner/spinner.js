import {Chart} from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


// what step of the game we're on
var step = 1;
// var myChart;
export default function wheel(id) {
  const wheel = document.getElementById(id);
  const context = wheel.getContext('2d');
  context.clearRect(0, 0, wheel.width, wheel.height);
    const spinBtn = document.getElementById("spin-btn");
  const finalValue = document.getElementById("final-value");
  // stores values of minimum and maximum angle for a value (if arrow is at 90 degrees)
  const rotationValues = [
    { minDegree: 0, maxDegree: 45, value: "Kahoot" },
    { minDegree: 46, maxDegree: 90, value:  "2 Truths 1 Lie" },
    { minDegree: 91, maxDegree: 135, value: "Jack" },
    { minDegree: 136, maxDegree: 180, value: "Pega" },
    { minDegree: 181, maxDegree: 225, value: "Contentful" },
    { minDegree: 226, maxDegree: 270, value: "PIE" },
    { minDegree: 271, maxDegree: 315, value: "Guess Who" },
    { minDegree: 316, maxDegree: 360, value: "Spot It" },
  ];

  // size of each slice
  const data = [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5];
  var pieColors = [
    "#FDB6B6",
    "#FFBC69",
    "#FDB6B6",
    "#FFBC69",
    "#FDB6B6",
    "#FFBC69",
    "#FDB6B6",
    "#FFBC69",
  ];


  if (Chart.getChart(id)) {
    Chart.getChart(id).destroy();
  }
  
  const myChart = new Chart(wheel, {
  
    id: 2,
    //Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
      labels: ["2T1L", "Kahoot", "Spot It", "GuessWho", "PIE", "Contentful", "Pega", "Jack"],
      datasets: [
        {
          backgroundColor: pieColors,
          data: data,
        },
      ],
    },
    options: {
      //Responsive chart
      responsive: true,
      animation: { duration: 0 },
      plugins: {
        //hide tooltip and legend
        tooltip: false,
        legend: {
          display: false,
        },
        //display labels inside pie chart
        datalabels: {
          color: "#ffffff",
          formatter: (_, context) => context.chart.data.labels[context.dataIndex],
          font: { size: 14 },
        },
      },
    },
  });

  //display value based on the angle it ends up at
  const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
      //if the angleValue is between min and max then display it
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
        spinBtn.disabled = false;
        break;
      }
    }
  };
  
  //Spinner count
  let count = 0;
  //100 rotations for animation and last rotation for result
  let resultValue = 101;
  //Start spinning
  spinBtn.addEventListener("click", () => {
    console.log(step);

    spinBtn.disabled = true;
    //Empty final value
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    //choose degree to stop at
  // 60, 150, 20, 110, 300, 250, 330, 200
  let randomDegree = 100;
    switch (step) {
      case 1:
        randomDegree = 60;
        break;
      case 2: 
        randomDegree = 150;
        break;
      case 3:
        randomDegree = 20;
        break;
      case 4: 
        randomDegree = 110;
        break;
      case 5:
        randomDegree = 300;
        break;
      case 6: 
        randomDegree = 250;
        break;
      case 7:
        randomDegree = 330;
        break;
      default: 
        randomDegree = 200;
        break;
    }
  
    //Interval for rotation animation
    let rotationInterval = window.setInterval(() => {
      //Set rotation for piechart
      /*
      Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
      */
      myChart.options.rotation = myChart.options.rotation + resultValue;
      //Update chart with new value;
      myChart.update();
      //If rotation>360 reset it back to 0
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
        step++;
        // if (myChart) {
        //   myChart.destroy();
        // }
        // myChart.clear();
        // Chart.getChart(1)?.destroy()
        if (window.myFunction) {
          setTimeout(() => {
            window.myFunction();
          }, 100)
        }

      }
    }, 10);
  });
}

