import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Seat } from 'src/app/model/Seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  seatId: number;
  available: boolean;
  seat: number;
  row: number;

  seats: Seat[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {

    this.service.getSeats()
      .subscribe(arg => {
        this.seats = arg;
        console.log(this.seats);
      });
  }

}
