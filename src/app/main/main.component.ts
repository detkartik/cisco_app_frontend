import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  data = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMain().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => console.log(error)
    );
  }
}
