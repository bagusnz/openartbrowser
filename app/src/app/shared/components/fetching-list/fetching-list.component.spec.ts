import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingListComponent } from './fetching-list.component';
import { DataService } from '../../../core/services/elasticsearch/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InViewportDirective } from 'ng-in-viewport';
import { PaginatorComponent } from './paginator/paginator.component';

describe('FetchingListComponent', () => {
  let component: FetchingListComponent;
  let fixture: ComponentFixture<FetchingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([]), ],
      declarations: [FetchingListComponent, PaginatorComponent, InViewportDirective],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});