import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Business } from '../mock-content';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  title: string = "Directory Noir: Businesses"
  content: Business[];
  columnNames: [
    "Business Name",
    "Owner(s)",
    "Business Type",
    "Description",
    "Website",
    "Contact"
  ]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.dataService.getContent().subscribe(content => this.content = content);
  }

}
