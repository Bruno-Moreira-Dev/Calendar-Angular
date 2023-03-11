import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { DialogData } from '../pick-date-dialog/pick-date-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: DialogData[] = [];

  onDeleteTask(taskName: string) {
    this.tasks.forEach((value, index) => {
      if (value.title === taskName) {
        this.tasks.splice(index, 1);
      }
    });
  }

  drop(event: CdkDragDrop<DialogData[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
