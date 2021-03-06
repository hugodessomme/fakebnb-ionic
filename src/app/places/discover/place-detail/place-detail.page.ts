import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  NavController,
  ModalController,
  ActionSheetController
} from "@ionic/angular";
import { PlacesService } from "../../places.service";
import { Place } from "../../place.model";
import { CreateBookingComponent } from "../../../bookings/create-booking/create-booking.component";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navController: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navController.navigateBack("/places/tabs/discover");
        return;
      }

      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl("/places/tabs/discover");
    // this.navController.navigateBack("/places/tabs/discover");
    // Will pop previous page from the stack,
    // so we need to be sure we navigated to this page from another one before,
    // otherwise, if we load this page directly, navigating back will not work
    // this.navController.pop();

    this.actionSheetController
      .create({
        header: "Choose an Action",
        buttons: [
          {
            text: "Selecte Date",
            handler: () => this.openBookingModal("select")
          },
          {
            text: "Random Date",
            handler: () => this.openBookingModal("random")
          },
          {
            text: "Cancel",
            role: "cancel"
          }
        ]
      })
      .then(actionSheetElement => {
        actionSheetElement.present();
      });
  }

  openBookingModal(mode: "select" | "random") {
    console.log(mode);
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: {
          selectedPlace: this.place
        }
      })
      .then(modalElement => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);

        if (resultData.role === "confirm") {
          console.log("BOOKED!");
        }
      });
  }
}
