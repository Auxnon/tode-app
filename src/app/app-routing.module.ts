import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesGridComponent } from './notes-grid/notes-grid.component';

const routes: Routes = [{path:'',component: NotesGridComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
