import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 files :string[]=[];
  constructor() { }

  ngOnInit() {
    this.files.push("assets/img/event/concert.jpg");
    this.files.push("assets/img/event/conference.jpg");
    this.files.push("assets/img/event/debat.jpg");
    this.files.push("assets/img/event/festival.jpg");
  }

}

