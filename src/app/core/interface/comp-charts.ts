export interface Options{
    
        plugins: {
          legend: {
            labels: {
              color: any;
            }
          },
          tooltip: {
            mode: string;
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
            beginAtZero: boolean;
            ticks: {
              color:any;
            },
            grid: {
              color:any;
              borderColor: any;
              drawBorder:boolean;
            }
          },
          y: {
            type: string;
            display: boolean;
            position: string;
            ticks: {
              color: any;
            },
            grid: {
              color: any;
              borderColor: any;
              borderDash:any[],
              drawBorder:boolean;
            }
          }
        },
        elements: {
          point: {
            backgroundColor: any;
            hoverRadius: number;
          }
        }
      
}

export interface Data{
    labels:any[];
    datasets: [
      {
        label: string;
        data: number[];
        borderColor: any;
        backgroundColor: any;
        barThickness:number;
        barPercentage:number;
        borderRadius: number;
        borderWidth: number;
      },
      {
        label:string;
        data:number[];
        barThickness: number;
        barPercentage: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: any;
      }
    ] 
}