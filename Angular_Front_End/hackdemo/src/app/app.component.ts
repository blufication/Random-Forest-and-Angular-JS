import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  output='';
 show:boolean = false;
  onShow(ProvMPIN:string,MemberSSN:string,DiagCodes:string,ProcCPTCodes:string) {
    this.show=true;
    if(MemberSSN=="551476390" && ProvMPIN=="000319510" && DiagCodes=="S31105" && ProcCPTCodes=="A6530"){
    // this.output = ProvMPIN + '-----' + MemberSSN + '-----' +DiagCodes+ '-----' +ProcCPTCodes;
      this.output = "PreDetermination is not required. Claim will be paid as per the contracted fee. The patient is not responsible for the difference between the amount charged by the physician and the amount allowed by the contract, except is situations where there is an annual benefit maximum for this service. The patient is also responsible for any copay, deductible and co-insurance amounts.";
    }
    else if(MemberSSN=="230085641" && ProvMPIN=="000319510" && DiagCodes=="E109" && ProcCPTCodes=="A4253,A4225,A4230"){
      // this.output = ProvMPIN + '-----' + MemberSSN + '-----' +DiagCodes+ '-----' +ProcCPTCodes;
        this.output = "PreDetermination is suggested to ensure that the services are covered under the plan and will not deny for Medical necessity.";
      }
     else if(MemberSSN=="526705553" && ProvMPIN=="000319510" && DiagCodes=="Z933" && ProcCPTCodes=="A4409,A4419,A4394"){ //
        // this.output = ProvMPIN + '-----' + MemberSSN + '-----' +DiagCodes+ '-----' +ProcCPTCodes;
          this.output = "PreDetermination is suggested to ensure that the services are covered under the plan and will not deny for Medical necessity.";
        }
       else if(MemberSSN=="771012391" && ProvMPIN=="000008677" && DiagCodes=="E785" && ProcCPTCodes=="83036,80061,36415,84270,84403"){
          // this.output = ProvMPIN + '-----' + MemberSSN + '-----' +DiagCodes+ '-----' +ProcCPTCodes;
            this.output = "PreDetermination is suggested to ensure that the services are covered under the plan and will not deny for Medical necessity.";
          }
          else{this.output ="Invalid data entry."}
  }
}