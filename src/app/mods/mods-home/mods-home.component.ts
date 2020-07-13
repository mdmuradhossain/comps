import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why us the sky blue',
      content: 'The Sky is blue becuase this the way how its created.',
    },
    {
      title: 'What does an orange taste like?',
      content: 'A orange taste like sweet and bitter',
    },
    {
      title: 'What color is that cat',
      content: 'The cat is an white and black color',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
