import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  myChart: any;
  chartOptions: any;
  initData: any;
  weeklyData: any;
  monthlyData: any;
  yearlyData: any;
  constructor() {
   


    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#A1A5B7'
          }
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: '#A1A5B7'
          },
          grid: {
            color: '#ffffff',
            borderColor: '#F5F8FA',
            drawBorder: true
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#A1A5B7',
          },
          grid: {
            color: '#F5F8FA',
            borderColor: '#ffffff',
            borderDash: [5],
            drawBorder: true
          }
        }
      },
      elements: {
        point: {
          backgroundColor: '#ffffff',
          hoverRadius: 4
        }
      }
    };
    this.initData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#ffffff',
          backgroundColor: '#FFC700',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };

    this.weeklyData =
    {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#ffffff',
          backgroundColor: '#FFC700',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };
    this.monthlyData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 25, 59, 80, 81, 56, 55, 40, 81, 56, 59, 80, 55, 40, 81, 56, 55, 40, 25, 59, 80,],
          borderColor: '#ffffff',
          backgroundColor: '#FFC700',
          barThickness: 8,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 48, 40, 19, 86, 27, 90, 80, 81,],
          barThickness: 8,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };
    this.yearlyData = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 25],
          borderColor: '#ffffff',
          backgroundColor: '#FFC700',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };
  }

  getChart() {
    if(this.myChart!=null){
      this.destroyChart();
    }
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.initData,
      options: this.chartOptions,
    })
    return this.myChart;
  }

  destroyChart() {
    this.myChart.destroy();
  }

  getWeeklyData() {
    this.destroyChart();
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.weeklyData,
      options: this.chartOptions,
    })
    return this.myChart;
  }

  getYearlyData() {
    this.destroyChart();
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.yearlyData,
      options: this.chartOptions,
    })
    return this.myChart;
  }

  getMonthlyData() {
    this.destroyChart();
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: this.monthlyData,
      options: this.chartOptions,
    })
    return this.myChart;
  }
}