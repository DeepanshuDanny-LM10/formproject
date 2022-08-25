import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formarr';

  Uname=''

myForm:FormGroup;
  // skils=new FormArray([]);
  constructor(private fb:FormBuilder){
    this.myForm=this.fb.group(
      {
        code: [''],
        number:[null],  
        skils:this.fb.array([])
          })    
        
  }
    
  hob():FormGroup{
    return this.fb.group({
      Danny: '',
      
    })
  }

 
  
  
  

  get skils(){
    return this.myForm.get('skils') as FormArray;
  }
  

  loginForm(){
    console.log(this.myForm.value)
    
    // this.myForm.reset()
    

  }
  
	// set() {
  //   console.log("indez",this.skils);
    
	// 	this.skils.setControl(2, new FormControl('Danny_NEW'));
  //   console.log(this.skils.value)
	// }

	reset() {
		this.myForm.reset();
    
	}
	clear() {
		this.skils.clear();
	}
  patchValue() {
    	this.skils.patchValue([{
        Danny:'Dollar'
      },
    {
      Danny:'Dude'
    }]);
      console.log(this.skils.value);
    }
    deleteEm(index: number) {
		this.skils.removeAt(index);
	}
  add() {
		this.skils.push(this.hob());
    console.log()
	}
  RawValue(){
    this.skils.getRawValue()
    console.log(this.myForm.value)
  }
  skilsubmit(){
    console.log(this.myForm.value)
  }
  insert() {
		this.skils.insert(1, new FormControl());
	}


}


// AddSkill(){   
  //  this.skils.push(this.fb.control('').value);
  //  console.log(this.myForm.value)
  // }
 
	
	
	
  	// setEmployeeValue() {
	// 	this.clearEmployeeControls();
	// 	this.addEmployeeControl();
	// 	this.addEmployeeControl();
	// 	this.addEmployeeControl();
	// 	this.skils.setValue(['Mahesh', 'Vishal', 'Krishn']);
	// }
	// 