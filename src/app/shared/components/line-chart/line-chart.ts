export interface Data{
        labels:any;
        datasets:[
            {
                label: any;
                data: any[];
                fill?: boolean;
                borderColor: any;
                borderWidth:number;
                tension: number;
                backgroundColor:any;
            }
        ]
    }

    export interface Options{
        interaction:{
            mode:string;
        },
        title?: {
            display: boolean;
            text: string;
            fontSize: number;
        },
        plugins: {
          legend?: {
            labels: {
              boxWidth:number;
              color: any;
            }
          },
          tooltip: {
            mode:string;
            intersect: boolean;
            events:any[];
            backgroundColor:any;
            bodyColor:any;
            titleColor:any;
            caretSize:number;
          xAlign:string;
          yAlign:string;
          position:string;
            usePointStyle:boolean;
            borderColor:any;
            boxPadding:number;
            padding:number;
          }
        },
        scales: {
          x: {
            display: boolean;
            beginAtZero: boolean;
            ticks: {
              display: boolean;
            },
            grid: {
              display:boolean;
            }
          },
          y: {
            type: string;
            display: boolean,
            position: string;
            beginAtZero: boolean;
            ticks: {
              display: boolean;
              min: number;
              max: number;
            },
            grid: {
              display:boolean;
            }
          },
        },
        elements: {
          point: {
            hoverRadius: number;
            radius:number;
            hitRadius?:number;
            hoverBorderWidth:number;
            events?:any[];
            borderWidth:number;
          }
        },
        layout:{
          padding:number;
        }
    }
