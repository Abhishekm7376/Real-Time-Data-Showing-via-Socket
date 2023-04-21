import { Component,OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {SocketService} from './socket.service';

import { from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    title:any = 'livechart';
    chart :any;
    constructor(private srv :SocketService){}

ngOnInit(){
    this.srv.listen('dataUpdate').subscribe((res:any)=>{
        
       let data = res[0];
       console.log(data[0]);
       let finalData = [
                            data[0].january,
                            data[0].february,
                            data[0].march,
                            data[0].april,
                            data[0].may,
                            data[0].june,
                            data[0].july,
                            data[0].august
                       ]
        this.chart.data.datasets[0].data = finalData
        this.chart.update();
    })

    this.chart=new Chart('canvas', {
        type :"bar",
        data: {
            labels: ["January", "February", "March", "April", "May","June","July","August"],
            datasets: [
                {
                    label: "Sales",
                    data: [],
                    backgroundColor: 'blue'
                }
            ]
        }

    });

}

}