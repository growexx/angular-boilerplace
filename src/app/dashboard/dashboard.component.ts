
import { CommonService } from 'src/app/core/services/common/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { registerables, Chart } from 'chart.js';
import { UsersService } from '../users/users.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users = {
    count: 69,
    skip: 10,
    config:{
      innerWidth: 72,
      innerClass: 'bg-light',
    }
  }

  departments = [{
    title: "Red",
    count: 20,
    config: {
      innerWidth: 50,
      // innerClass: 'bg-success',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 99, 132, 1)',
    }
  },
  {
    title: "Blue",
    count: 19,
    config: {
      innerWidth: 40,
      // innerClass: 'bg-warning',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(54, 162, 235, 1)',
    }
  }, {
    title: "Yellow",
    count: 3,
    config: {
      innerWidth: 50,
      // innerClass: 'bg-success',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 206, 86, 1)',
    }
  },
  {
    title: "Green",
    count: 5,
    config: {
      innerWidth: 40,
      // innerClass: 'bg-warning',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(75, 192, 192, 1)',
    }
  }, {
    title: "Purple",
    count: 2,
    config: {
      innerWidth: 50,
      // innerClass: 'bg-success',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(153, 102, 255, 1)',
    }
  },
  {
    title: "Orange",
    count: 3,
    config: {
      innerWidth: 40,
      // innerClass: 'bg-warning',
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 159, 64, 1)',
    }
  }]

  myChart: any;
  ctx: any;
  totalSum:any;

  constructor(public commonService: CommonService, public usersService: UsersService) { }
  ngOnInit(): void {

    this.usersService.limitAndSkipUser(5,10,'firstName,age').subscribe((res: any) => {
      this.users.count = res.total;
      this.users.skip = res.skip;
      this.users.config.innerWidth = Math.round(((res.total - res.skip) / res.total) * 100)
    });

    let chartData = this.departments.map((department: any) => { return department.count; });
    let chartLables = this.departments.map((department: any) => { return department.title; });
    let chartColors = this.departments.map((department: any) => { return department.config.color; });
    this.totalSum = chartData.reduce((a, b) => a + b);
    this.departments.forEach((department: any) => {
      department.config.innerWidth = Math.round((department.count / this.totalSum) * 100);
    });

    this.ctx = document.getElementById('myChart');

    this.myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: chartLables,
        datasets: [{
          label: 'Departments And Employees',
          data: chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
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
        aspectRatio: 2,
        plugins: {
          legend: {
            display:false
          }
        },
      },
    });

  }
}
