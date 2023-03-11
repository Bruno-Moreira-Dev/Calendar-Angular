import { Component, DoCheck, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, PickDateDialogComponent } from './pick-date-dialog/pick-date-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, DoCheck {
  selectedDate!: Date | null;
  tasks: DialogData[] = [];
  date!: Date | null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  ngDoCheck() {
    this.tasks.forEach((task) => this.date = new Date(task.date));
    this.selectedDate = this.date || new Date();
  }

  openTaskDialog() {
    const dialogRef = this.dialog.open(PickDateDialogComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      this.tasks.push(result);
    });
  }

  onSelectDateChanged(date: Date | null): void {
    this.selectedDate = date;
  }
}
