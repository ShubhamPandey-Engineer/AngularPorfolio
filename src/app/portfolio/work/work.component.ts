import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {


  projectArray=[{
    name:"",
    desc:"",
    skills:[""],
    features:[""],
    url:""

  }];

  constructor() { }

  ngOnInit(): void {
   
    this.projectArray=[
    {
      name:'Blog App',
      desc:"A web application using which a users could crete a blog.",
      skills:["HTML5" ,"CSS3","JavaScript","Bootstrap 4" ,"Express JS" ,"Node JS","MongoDB atlas"],
      features:['Like functunality' , 'CRUD operation' , 'JWT authorization'],
      url:"https://myblog-mongo.herokuapp.com/"
    },
    {
      name:'Covid-19 stats',
      desc:"Web application that shows the current statistics of COVID-19 using rest API's",
      skills:["HTML5" ,"CSS3","JavaScript","Bootstrap 4"  ],
      features:['Restful API n\'s','Responsive design'],
      url:"cdc"
    },
    {
      name:'Twitter Light app',
      desc:"This application is a light version of twitter.",
      skills:["HTML5" ,"CSS3","JavaScript","Bootstrap 4" ,"MVC5", "Angular","MVC Web API", "My SQL"],
        features:[],
      url:"cdc"
    },
    {
      name:'Title 1',
      desc:"dcjndjdjdnjcdnj",
      skills:["dcdc","ccd"],
      features:[],

      url:"cdc"
    }
   
    ]

   
  }
  panelOpenState = false;


 
}




