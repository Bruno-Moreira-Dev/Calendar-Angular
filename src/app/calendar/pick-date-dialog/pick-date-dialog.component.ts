import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CalendarComponent } from '../calendar.component';

export interface DialogData {
  title: string;
  date: string;
}

@Component({
  selector: 'app-pick-date-dialog',
  templateUrl: './pick-date-dialog.component.html',
  styleUrls: ['./pick-date-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PickDateDialogComponent implements OnInit {
  datePickerForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CalendarComponent>
  ) { }

  ngOnInit(): void {
    this.datePickerForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  tasks: string[] = [];
  dateChecked: Date = new Date();

  clearTitleField() {
    this.datePickerForm.controls.title.reset();
  }

  onSetTask(result: FormGroup) {
    if (this.datePickerForm.valid) {
      this.dialogRef.close(result.value);
    }
  }

  onDateChange(event: { value: string; }) {
    this.dateChecked = new Date(event.value);
  }
}
