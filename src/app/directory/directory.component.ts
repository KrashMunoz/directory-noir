import { Component, OnInit } from '@angular/core';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { FireBusiness } from '../business';
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
  filteredContent: Business[] = [];
  _contentFilter: string = '';
  // Content filter getter and setter
  get contentFilter(): string {
    return this._contentFilter;
  }
  set contentFilter(value: string) {
    this._contentFilter = value;
    this.filteredContent = this.contentFilter ? this.doFilter(this.contentFilter) : this.content;
  }

  businesses: QueryDocumentSnapshot<FireBusiness>[];
  sub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getContent();
    this.filteredContent = this.content;
    this.contentFilter = '';

    this.sub = this.dataService
      .getBusinesses()
      .subscribe(businesses => (this.businesses = businesses.docs))
  }

  getContent(): void {
    this.dataService.getContent().subscribe(content => this.content = content);
  }

  // Filter logic
  doFilter(filterBy: string): Business[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.content.filter((business: Business) =>
      business.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

}
