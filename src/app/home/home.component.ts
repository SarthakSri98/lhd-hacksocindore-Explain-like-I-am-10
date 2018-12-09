import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormControl,FormGroup,FormControlName } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    
    trigger('fadeIn',  [
       transition('*=>*',[
          query(':enter',style({opacity:0,transform:'translate(0,-20px)'}),{optional:true}),
          query(':enter',stagger('400ms',[
               animate('.3s ease-in',style({ opacity:1,transform:'translate(0,0)' }))
  
          ]),{optional:true}),
        ])
      ])
    ]
})
export class HomeComponent implements OnInit {

  topicArray = [
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
  ]
  title;
  description;
  height = '500px';
  width= '600px';
  height1 = '600px';
  constructor(private modalService: MatDialog ) { }

  ngOnInit() {
  }


  open(content,i) {

    this.title = this.topicArray[i].title;
    this.description = this.topicArray[i].description;

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });

    
  }
  addNew(content) {

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height1,
      width: this.width,
      panelClass: 'custom-modalbox'
    });

    
  }
  Cross_click(){
      this.modalService.closeAll();
  }

  addForm = new FormGroup({
    title :new FormControl(),
    tags : new FormControl(),
    description :new FormControl()
  })
  
  add()
  {
    this.topicArray.push(this.addForm.value);
    this.Cross_click();
  }
}
