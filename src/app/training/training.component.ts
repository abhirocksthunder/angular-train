import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

justField="It's just a field";
  name = 'Angular ' + VERSION.major;
  showTxt= false;
  txtText="Show Text Box";
  imgSrc="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  imgWidth="500"

  

  constructor() { }

  ngOnInit() {
  }

  day1(){
    this.showTxt = !this.showTxt;
    if(this.showTxt)
    this.txtText="Hide Text Box";
    else
    this.txtText="Show Text Box";
  }

}