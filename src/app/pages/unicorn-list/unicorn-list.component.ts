import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnicornService } from 'src/app/shared/services/unicorn.service';
import { Unicorn } from 'src/app/shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public unicorns$: Unicorn[] = [];

  constructor(private unicornService: UnicornService) {}

  ngOnInit(): void {
    this.unicornService
      .getUnicorn()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((unicorns) => (this.unicorns$ = unicorns));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
