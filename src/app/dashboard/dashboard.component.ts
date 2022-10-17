
import { CommonService } from 'src/app/core/services/common/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { UsersService } from '../users/users.service';
import { result } from 'lodash';
import { TaskService } from '../task/task.service';
import { taskDetailsType } from '../task/task-modal';
import { accordionType } from '../core/interface/accordion';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  taskDetails !: taskDetailsType;
  loadProgress = 77;
  users = {
    count: 69,
    skip: 10,
    config: {
      innerWidth: 72,
      innerClass: 'bg-light',
    }
  }

  departments = [{
    title: "Red",
    count: 15,
    config: {
      innerWidth: 50,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 99, 132, 1)',
    }
  },
  {
    title: "Blue",
    count: 19,
    config: {
      innerWidth: 40,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(54, 162, 235, 1)',
    }
  }, {
    title: "Yellow",
    count: 3,
    config: {
      innerWidth: 50,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 206, 86, 1)',
    }
  },
  {
    title: "Green",
    count: 5,
    config: {
      innerWidth: 40,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(75, 192, 192, 1)',
    }
  }, {
    title: "Purple",
    count: 2,
    config: {
      innerWidth: 50,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(153, 102, 255, 1)',
    }
  },
  {
    title: "Orange",
    count: 3,
    config: {
      innerWidth: 40,
      outerClass: 'background-neutral-light-v-low',
      color: 'rgba(255, 159, 64, 1)',
    }
  }]

 public accordionDetails: accordionType[] = [
    {
      title: 'Accordion Item #1',
      description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
      active: true
    },
    {
      title: 'Accordion Item #2',
      description: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
      active: false
    }
  ]

  totalSum: any;
  chartConfig: any;
  cols: any;

  constructor(public commonService: CommonService, public usersService: UsersService, private taskService: TaskService) { }
  ngOnInit(): void {

    this.getAllTasks();

    this.usersService.limitAndSkipUser(5, 10, 'company').subscribe((res: any) => {
      res.users.forEach((ele: any) => {
        if (!this.departments.some((user: any) => user.title === ele.company.department)) {
          let department = {
            title: ele.company.department,
            count: 1,
            config: {
              innerWidth: 0,
              outerClass: 'background-neutral-light-v-low',
              color: 'rgba(25, 59, 100, 1)',
            }
          }
          // this.departments.push(department);
        } else {
          this.departments.map((department: any) => {
            if (department.title === ele.company.department) {

            }
          });
        }
      });

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

    this.chartConfig = {
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
            display: false
          }
        },
      },
    };

    this.cols = this.commonService.cols;
    console.log(this.cols)
  }


  getAllTasks() {
    this.taskService.getAllTodos().subscribe((res: any) => {
      this.taskDetails = res
    })
  }
}