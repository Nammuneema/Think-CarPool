import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers :[NgbActiveModal]
})
export class ModalComponent implements OnInit {
  @Input() errorType;

  constructor(public activeModal: NgbActiveModal) {}
  
  closeMe()
  {
    this.activeModal.dismiss();
  }
  ngOnInit() {
  }

}





   