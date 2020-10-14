import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ApiService } from '../api.service';

const routes: Routes = [{ path: 'main', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ApiService],
})
export class MainModule {}
