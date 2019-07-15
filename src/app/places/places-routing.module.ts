import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlacesPage } from "./places.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/places/tabs/discover",
    pathMatch: "full"
  },
  {
    path: "tabs",
    component: PlacesPage,
    children: [
      {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full"
      },
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: "./discover/discover.module#DiscoverPageModule"
          },
          {
            path: ":placeId",
            loadChildren:
              "./discover/place-detail/place-detail.module#PlaceDetailPageModule"
          }
        ]
      },
      {
        path: "offers",
        children: [
          {
            path: "",
            loadChildren: "./offers/offers.module#OffersPageModule"
          },
          {
            path: "new",
            loadChildren: "./offers/new-offer.module#NewOfferPageModule"
          },
          {
            path: "edit/:placeId",
            loadChildren: "./offers/edit-offer.module#EditOfferPageModule"
          },
          {
            path: ":placeId",
            loadChildren:
              "./offers/offer-bookings.module#OffersBookingPageModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
