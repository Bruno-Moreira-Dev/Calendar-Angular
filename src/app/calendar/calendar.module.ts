import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '../header/header.module';
import { PickDateDialogModule } from './pick-date-dialog/pick-date-dialog.module';
import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    PickDateDialogModule,
    TaskListModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
  ],
  exports: [
    CalendarComponent,
  ]
})
export class CalendarModule { }
