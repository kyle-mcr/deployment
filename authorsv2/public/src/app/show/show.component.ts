import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  myobj: any;
  id: any;
  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getData();
    this.myobj = { name: '' };
  }
  getAuthor(id) {
    let observable2 = this.http.findOne(id);
    observable2.subscribe(data => {
      this.myobj = data;
      console.log(this.myobj);
    })
  }

  getData() {
    let observable = this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getAuthor(this.id);
    })
  }
}