import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
myName;myEmail;mySubject;myMessage;contactres:boolean=false;errorMsg;res;

onsubmit() {
 

   this.emailService.sendMail(this.myName,this.myEmail,this.mySubject,this.myMessage)
       .subscribe(res => {
      this.res = res, posterror => this.errorMsg=posterror ;});

  this.contactres=true;
}
  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

}
