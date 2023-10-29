import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
// import { AdminAuthCheckService } from 'src/Service/admin-auth-check.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

 

  
    sidemenu1class:string="collapse"
    sidemenu2class:string="collapse"
    sidemenu3class:string="collapse"
    sidemenu4class:string="collapse"
    sidemenu5class:string="collapse"
    sidemenu6class:string="collapse"
    sidemenu7class:string="collapse"
    sidemenu8class:string="collapse"
  
    bodyclass:string='sidebar-light-theme'
  
    hoveropeneffectmember:string='nav-item'
    hoveropeneffectdashboard:string='nav-item'
    hoveropeneffectservice:string='nav-item'
    hoveropeneffectpackage:string='nav-item'
    hoveropeneffectdepartment:string='nav-item'
    hoveropeneffectuserrole:string='nav-item'
    hoveropeneffectreport:string='nav-item'
    hoveropeneffectfeedback:string='nav-item'  
    hoveropeneffectterminal:string='nav-item'
    pagepermission: any
    pages:any;

 

  
  
  
    
  service:boolean=false;
    usertype: any;
    User:any
    constructor(private loadingController:LoadingController,private router: Router,
      // private rolecheckservice:AdminAuthCheckService
      ) 
    {
  
  
      
      
     }
  
  
    ngOnInit() {
     
 
    }
  
   
 
  
  
  
  NavigateToPage(pagename:string){
    this.router.navigate([pagename]);
  }
  
  
  
  GroupRights(groupname:string):boolean{
    // console.log(this.pagepermission,"per")
    if(!!this.pagepermission && this.pagepermission.length>0){
  if(this.pagepermission.filter((x:any)=>x.GroupName==groupname).length>0){
    // if(this.pagepermission.filter((x:any)=>x.PageName)=='service'){
    //   this.service=true;
    // }
    return true;
  }else{return false}
    }
    else{
      return false;
    }
    
  }
  PageRights(pagename:string):boolean{
    if(!!this.pagepermission && this.pagepermission.length>0){
      if(this.pagepermission.filter((x:any)=>x.PageName==pagename).length>0){
        // if(this.pagepermission.filter((x:any)=>x.PageName)=='service'){
        //   this.service=true;
        // }
        return true;
      }else{return false}
        }
        else{
          return false;
        }
    
  
  }
  
  // 1
    mouseoutmember(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectmember='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseovermember(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectmember='nav-item hover-open'
      // this.sidemenu1class="collapse"
      // this.sidemenu2class="collapse"
      // this.sidemenu3class="collapse"
      // this.sidemenu4class="collapse"
      // this.sidemenu5class="collapse"
      // this.sidemenu6class="collapse"
      // this.sidemenu7class="collapse"
      // this.sidemenu8class="collapse"
     
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    // 2
  
    mouseoutdashboard(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectdashboard='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverdashboard(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectdashboard='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    //3
  
    mouseoutpackage(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectpackage='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverpackage(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectpackage='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    //4
  
    mouseoutservice(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectservice='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverservice(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectservice='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    //5
  
    mouseoutuserrole(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectuserrole='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoveruserrole(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectuserrole='nav-item hover-open'
  
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    //6
  
    mouseoutfeedback(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectfeedback='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverfeedback(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectfeedback='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
    //7
  
    mouseoutreport(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectreport='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverreport(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectreport='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
  
    //8
  
    mouseoutdepartment(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectdepartment='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverdepartment(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectdepartment='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
  
    //9
    mouseoutterminal(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectterminal='nav-item'
      }
      else
      {
        return 
      }
     
  
    }
  
    mouseoverterminal(){
      // console.log(this.bodyclass)
      if(this.bodyclass!='sidebar-light-theme')
      {
        // console.log("item")
      this.hoveropeneffectterminal='nav-item hover-open'
      }
      else
      {
        return 
      }
      // console.log("fihgfiu")
      
    }
  
  
    sidebarfn(){
      if(this.bodyclass=='sidebar-light-theme')
      {
        this.bodyclass='sidebar-icon-only '
       this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      this.sidemenu4class="collapse"
      this.sidemenu5class="collapse"
      this.sidemenu6class="collapse"
      this.sidemenu7class="collapse"
      this.sidemenu8class="collapse"
      }
      else 
      {
        this.bodyclass='sidebar-light-theme'
      }
    }
    showDetailedReports = false;
    showConsolidatedReports = false;
    
    // Function to toggle the visibility of the Detailed Reports submenu
    toggleDetailedReports() {
      this.showDetailedReports = !this.showDetailedReports;
    }
    
    // Function to toggle the visibility of the Consolidated Reports submenu
    toggleConsolidatedReports() {
      this.showConsolidatedReports = !this.showConsolidatedReports;
    }
    
    // Function to execute the selected report
    executeReport(reportName: string) {
      // Implement the logic to execute the selected report here
      // You can use `reportName` to determine which report to execute
    }
  
    grouppurchasereport(){
      
      this.router.navigate(['/admin-home/group-purchase-report'])
  
    }
  
    itemwisehsnreport(){
      
      this.router.navigate(['/admin-home/itemwise-hsn-report'])
  
    }
  
    storegeneralreport(){
      
      this.router.navigate(['/admin-home/store-general-report'])
  
    }
  
    OnlineSettings(){
      
      this.router.navigate(['/admin-home/online-settings'])
    }
  
    userwisecollectionreport(){
      
      this.router.navigate(['/admin-home/user-wise-collection-report'])
    }
    packagesalesreport(){
      
      this.router.navigate(['/admin-home/package-sales-report'])
    }
    servicereport(){
      
      this.router.navigate(['/admin-home/service-report'])
    }
    userwiserechargereport(){
      
      this.router.navigate(['/admin-home/user-wise-recharge-report'])
    }
    userwiserefundreport(){
      
      this.router.navigate(['/admin-home/user-wise-refund-report'])
    }
    refundabledeposits(){
      
      this.router.navigate(['/admin-home/refundable-deposits-consolidated'])
    }
    refundabledepositsmember(){
      
      this.router.navigate(['/admin-home/refundable-deposits-member-wise'])
    }
  
    consolidateduserreport(){
      
      this.router.navigate(['/admin-home/consolidated-user-report'])
    }
    consolidatedinvoicereport(){
      this.router.navigate(['/admin-home/consolidated-collection-invoice-report']) 
    }
    gstinvoicereport(){
      this.router.navigate(['/admin-home/gst-invoice-detailed-report']) 
    }
    bookingdetailedreport(){
      
      this.router.navigate(['/admin-home/booking-detailed-report'])
    }
  
    consolidatedcollectionreport(){
      
      this.router.navigate(['/admin-home/consolidated-collection-report'])
    }
  
    packageentryexpiryreport(){
      
      this.router.navigate(['/admin-home/package-entry-expiry-report'])
    }
    gateentryreportdetailed(){
      this.router.navigate(['/admin-home/gate-entry-report-detailed'])
  
    }
    parkentryreportconsolidated(){
      this.router.navigate(['/admin-home/park-entry-report-consolidated'])
  
    }
    boombarrierreportconsolidated(){
      this.router.navigate(['/admin-home/boom-barrier-consolidated-report'])
  
    }
    boombarrierreportdetailed(){
      this.router.navigate(['/admin-home/boom-barrier-detailed-report'])
  
    }
  
    parkentryreportdetailed(){
      this.router.navigate(['/admin-home/park-entry-report-detailed'])
  
    }
  
    gateandparkentrydifferencereportconsolidated(){
      
      this.router.navigate(['/admin-home/gate-and-park-entry-difference-report-consolidated'])
  
    }
    gateandparkentrydifferncereportdetailed(){
      this.router.navigate(['/admin-home/gate-and-park-entry-difference-report-detailed'])
    }
  
    servicewiseentryreportconsolidated(){
      this.router.navigate(['/admin-home/service-wise-entry-report-consolidated'])
    }
  
  servicewiseentryreportdetailed(){
  
  this.router.navigate(['/admin-home/service-wise-entry-report-detailed'])
  }
  
    gateentryreportconsolidated(){
      this.router.navigate(['/admin-home/gate-entry-report-consolidated'])
    }
  
    rechargecollectionreportconsolidated(){
      this.router.navigate(['/admin-home/recharge-collection-report-consolidated'])
    }
  
  
    rechargecollectionreportdetailed(){
      this.router.navigate(['/admin-home/recharge-collection-report-detailed'])
    }
  
  
    dailyrechargecollectionreportpaymentmodewiseconsolidated(){
      this.router.navigate(['/admin-home/daily-recharge-collection-report-payment-mode-wise-consolidated'])
    }
  
    expiredexpiringpackegaewisememberreport(){
      this.router.navigate(['/admin-home/expiring-package-wise-member-report'])
    }
  
    billingcollectionreportuserwiseconsolidated(){
      this.router.navigate(['/admin-home/billing-collection-reportuser-wise'])
    }
  
    billingcollectionreportdetailed(){
      this.router.navigate(['/admin-home/billing-collection-report-detailed'])
    }
  
    packagewisememberreportconsolidated(){
      this.router.navigate(['/admin-home/package-wise-member-report-consolidated'])
    }
  
    packagewisememberreport(){
      this.router.navigate(['/admin-home/package-wise-member-report'])
    }
  
  
    packageupgradereport(){
      this.router.navigate(['/admin-home/package-upgrade-member-report'])
      
    }
  
    holiday(){
      this.router.navigate(['/admin-home/holiday'])
    }
    Terminal(){
      this.router.navigate(['/admin-home/terminal'])
    }
  
    Session(){
      this.router.navigate(['/admin-home/session'])
    }
    FeedBack(){
      this.router.navigate(['/admin-home/feedback'])
    }
  
    cashverificationreport(){
      this.router.navigate(['/admin-home/cash-verification-report'])
    }
  dashboardview(){
    this.router.navigate(['/admin-home/dashboard'])
  }
  serviceview(){
    this.router.navigate(['/admin-home/service'])
  }
  servicereportview(){
    this.router.navigate(['/admin-home/service-reports'])
  }
  servicetypeview(){
    this.router.navigate(['/admin-home/service-type'])
  }
  servicesettingsview(){
    this.router.navigate(['/admin-home/service-settings'])
  }
  servicerateview(){
    this.router.navigate(['/admin-home/service-rate'])
  }
  servicebookingslotsview(){
    this.router.navigate(['/admin-home/service-booking-slots'])
  }
  memberview(){
    this.router.navigate(['/admin-home/member'])
  }
  membershiptypeview(){
    this.router.navigate(['/admin-home/membership-type'])
  }
  memberpackmappingview(){
    this.router.navigate(['/admin-home/member-package-mapping'])
  }
  memberaccessview(){
    this.router.navigate(['/admin-home/member-access'])
  }
  unauthorisedmemberView(){
    this.router.navigate(['/admin-home/unauthorised-member'])
   
  }
  packageview(){
    this.router.navigate(['/admin-home/package'])
  }
  packageservicemappingview()
  {
    this.router.navigate(['/admin-home/package-service-mapping'])
  }
  userdateailsview(){
    this.router.navigate(['/admin-home/user-details'])
  }
  usersview(){
    this.router.navigate(['/admin-home/users'])
  }
  rolepagemappingview(){
    this.router.navigate(['/admin-home/role-page-mapping'])
  }
  rolesview(){
    this.router.navigate(['/admin-home/role'])
  }
  departmentsview(){
    this.router.navigate(['/admin-home/department'])
  }
  changepassword(){
    this.router.navigate(['/admin-home/change-password'])
  
  }
  
  logout(){
    localStorage.removeItem('userdata');
    this.router.navigate(['/login'])
  }
  
  
  rightmenu(){
    
  }
  
  
  
  sidemenu1(){
    this.router.navigate(['/admin-home/branch'])
  }
  sidemenu2(){
    this.router.navigate(['/admin-home/brand'])
  }
  sidemenu3(){
    this.router.navigate(['/admin-home/product-type'])
  }
  
    // sidemenu1(){
    //   if(this.sidemenu1class=="collapse" && this.bodyclass=='sidebar-light-theme')
    //   {
    //   this.sidemenu1class = ""
    //   // this.sidemenu2class=""
    //   // this.sidemenu1class="collapse"
    //   this.sidemenu2class="collapse"
    //   this.sidemenu3class="collapse"
    //   this.sidemenu4class="collapse"
    //   this.sidemenu5class="collapse"
    //   this.sidemenu6class="collapse"
    //   this.sidemenu7class="collapse"
    //   this.sidemenu8class="collapse"
    //   }
    //   else
    //   {
    //     this.sidemenu1class="collapse"
    //   }
     
    // }
    // sidemenu2(){
    //   if(this.sidemenu2class=="collapse"&& this.bodyclass=='sidebar-light-theme')
    //   {
    //     this.sidemenu2class=""
    //     this.sidemenu1class="collapse"
    //     // sidemenu2class:string="collapse"
    //     this.sidemenu3class="collapse"
    //     this.sidemenu4class="collapse"
    //     this.sidemenu5class="collapse"
    //     this.sidemenu6class="collapse"
    //     this.sidemenu7class="collapse"
    //     this.sidemenu8class="collapse"
  
    //   }
    //   else
    //   {
    //     this.sidemenu2class="collapse"
    //   }
    // }
    // sidemenu3(){
    //   if(this.sidemenu3class=="collapse"&& this.bodyclass=='sidebar-light-theme')
    //   {
    //     this.sidemenu3class=""
    //   this.sidemenu1class="collapse"
    //   this.sidemenu2class="collapse"
    //   // this.sidemenu3class="collapse"
    //   this.sidemenu4class="collapse"
    //   this.sidemenu5class="collapse"
    //   this.sidemenu6class="collapse"
    //   this.sidemenu7class="collapse"
    //   this.sidemenu8class="collapse"
  
    //   }
    //   else
    //   {
    //     this.sidemenu3class="collapse"
    //   }
  
    // }
    sidemenu4(){
      if(this.sidemenu4class=="collapse"&& this.bodyclass=='sidebar-light-theme')
      {
        this.sidemenu4class=""
           this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      // this.sidemenu4class="collapse"
      this.sidemenu5class="collapse"
      this.sidemenu6class="collapse"
      this.sidemenu7class="collapse"
      this.sidemenu8class="collapse"
  
      }
      else
      {
        this.sidemenu4class="collapse"
      }
  
    }
    sidemenu5(){
      if(this.sidemenu5class=="collapse"&& this.bodyclass=='sidebar-light-theme')
      {
        this.sidemenu5class=""
           this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      this.sidemenu4class="collapse"
      // this.sidemenu5class="collapse"
      this.sidemenu6class="collapse"
      this.sidemenu7class="collapse"
      this.sidemenu8class="collapse"
  
      }
      else
      {
        this.sidemenu5class="collapse"
      }
  
    }
    sidemenu6(){
      if(this.sidemenu6class=="collapse"&& this.bodyclass=='sidebar-light-theme')
      {
        this.sidemenu6class=""
           this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      this.sidemenu4class="collapse"
      this.sidemenu5class="collapse"
      // this.sidemenu6class="collapse"
      this.sidemenu7class="collapse"
      this.sidemenu8class="collapse"
  
      }
      else
      {
        this.sidemenu6class="collapse"
      }
  
    }
    sidemenu7(){
      if(this.sidemenu7class=="collapse"&& this.bodyclass=='sidebar-light-theme')
      {
        this.sidemenu7class=""
           this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      this.sidemenu4class="collapse"
      this.sidemenu5class="collapse"
      this.sidemenu6class="collapse"
      // this.sidemenu7class="collapse"
      this.sidemenu8class="collapse"
  
      }
      else
      {
        this.sidemenu7class="collapse"
      }
  
    }
    sidemenu8(){
      if(this.sidemenu8class=="collapse"&& this.bodyclass=='sidebar-light-theme')
      {
        this.sidemenu8class=""
           this.sidemenu1class="collapse"
      this.sidemenu2class="collapse"
      this.sidemenu3class="collapse"
      this.sidemenu4class="collapse"
      this.sidemenu5class="collapse"
      this.sidemenu6class="collapse"
      this.sidemenu7class="collapse"
      // this.sidemenu8class="collapse"
  
      }
      else
      {
        this.sidemenu8class="collapse"
      }
  
    }
  
  
  
  
  }
  
