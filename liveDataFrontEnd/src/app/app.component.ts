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
        console.log(res);
       
        
        this.chart= res[0];
        console.log(this.chart);    
        // this.chart.update();
        // console.log(this.chart);
        
    })

    // this.chart=new Chart('canvas', {
    //     type :"bar",
    //     options:{
    //         responsive :true,
    //         title:{
    //             display:true,
    //             text :'Real Time Chart'
    //         }
    //     },
    //     data: {
    //         labels: ["January", "February", "March", "April", "May","June","July","August"],
    //         datasets: [
    //             {
    //                 type:"bar",
    //                 label: "Sales Performed",
    //                 backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#8e5ea2","#3e95cd"],
    //                 fill:false
    //             }
    //         ]
    //     }

    // });

}

}