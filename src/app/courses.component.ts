import { CoursesService } from './course/courses.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'courses',  // <courses>
  template: `
  <div>
    <button class="btn btn-primary" [style.background]="isActive ? 'blue' : 'red'" (click)="onSave()">Save</button>
  </div>
  <div>
    <input [(ngModel)]="code" (keydown.enter)="onKeyDown()"/>
  </div>
  `
})
export class CoursesComponent {
  isActive = true;
  code = "example code";

  onSave() {
    console.log("button saved");
  }

  onKeyDown() {
    console.log(this.code);
  }
}
