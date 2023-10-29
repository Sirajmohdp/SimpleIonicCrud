import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/Class/Users';
import { UserService } from 'src/Service/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  ser = new Users()
  alluserdata: any;
  viewtype:string='view'

  constructor(private loadingController:LoadingController,private userservice:UserService,
    private router:Router,)
   {
    
    //to  view the data of table on loading of the page
    this.getallusers()

  }

  ngOnInit() {
  }

  addauser(){ //on button click the ngif will cahnge and show new form
    this.viewtype='form'
  }

 

  cancelrefreshpage(){
    this.ser = new Users()
    this.viewtype='view'
  }

 
// x:any;
//inorder to edit the given ngfor data
  edituserdata(item:any){
    this.ser=item
    //changing the view type to form to show the text fields
    this.viewtype='form'
    //assigning the values to each fields
    this.ser.Id=item.Id
    this.ser.Email=item.Email
    this.ser.Mobile=item.Mobile
    this.ser.Name=item.Name
    this.ser.UserName=item.UserName
    this.ser.Password=item.PassWord

  }

// to delete the selected data from the table
  deleteuserdata(Id:any){
    // console.log(Id)
    if(confirm("Do you want to delete the record?"))
    {
      //setting status to 1 to insert into db and mark as deleted
      let Status=1
      this.userservice.DeleteUsersWithId(Id,Status).subscribe((data:any)=>{
        // console.log(data)
        if(data[0].Error==0)
        {
          // alert(
          //   "Deleted Successfully"
          // )
          
            alert("Deleted Successfully")
            //to reflect the changes in table
            this.getallusers()
          }
          else
          {
            alert("Error While Deleting")
          }
        
        // this.getallusers/()
        

      })
    }
    else{
      // alert ("Cannot delete the record")
      
      alert("Cancelled Deletion")
    }

  }

  getallusers(){ //fn for fetchng data from the table
    this.userservice.GetAllUsers().subscribe(data=>{
      //assigning values to the array for table view
      this.alluserdata=data
      
     
      // console.log(this.alluserdata)
    })
  }
 
 


  submit()
 
    {
      
      // checkingEmail exist
          if(this.ser.Email!="" && this.ser.Email!=null)
          {        
            
          //checking name field added
              if(this.ser.Name!=""&& this.ser.Name!=null)
              {
              
                //calling th service to insert the class
                  this.userservice.InsertUsers(this.ser).subscribe(data=> {
                    
                    if(data){
                      //if return Id>0 and erro =0 tehn teh db says its a succesfully entry
                      if(data[0].Id>0 && data[0].Error==0)
                      {  
                        // if the id from the class =0 then it os new insertion
                        if(this.ser.Id==0)
                        {                             
                        alert("Added Successfully")
                        this.getallusers()
                        //clearing the existing class 
                        this.ser = new Users()
                        //changing the viewtype  to table view
                        this.viewtype='view'
                        }
                        else 
                        {
                          alert("Updated Successfully")
                          this.getallusers()
                          this.ser = new Users
                          this.viewtype='view'
                        }
                        
                      }
                      else {

                        alert("Error while inserting service1223"+data[0].Error)
                      }
                    }
                    else 
                    {
                      //  alert('Error while inserting service');
                    alert("Error while inserting service")
                    }
                  
                  })
              } 
                else
                {
                 alert("Enter the Name")
                }

            }     
       else
       {
        alert("Enter the Email")
       }
   
  
}

  
}
