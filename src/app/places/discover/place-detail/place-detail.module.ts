import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PlaceDetailPage } from "./place-detail.page";
import { CreateBookingComponent } from "../../../bookings/create-booking/create-booking.component";

const routes: Routes = [
  {
    path: "",
    component: PlaceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],

  // If component is not declared in a route, or used in a template,
  // but only used programmatically, we need to add entryComponents property
  entryComponents: [CreateBookingComponent]
})
export class PlaceDetailPageModule {}
