import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../music-services/artist.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private searchService: ArtistService) { }

  inputField: FormControl = new FormControl();
  searchResult: any[] = [];
  ngOnInit() {
    this.inputField.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

}
