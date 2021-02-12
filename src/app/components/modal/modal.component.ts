import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public showModal:boolean = false;
  public data: any;
  public isLoading = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  }

}
