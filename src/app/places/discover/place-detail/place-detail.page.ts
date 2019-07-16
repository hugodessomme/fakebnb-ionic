import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  constructor(private router: Router, private navController: NavController) {}

  ngOnInit() {}

  onBookPlace() {
    // this.router.navigateByUrl("/places/tabs/discover");
    this.navController.navigateBack("/places/tabs/discover");

    // Will pop previous page from the stack,
    // so we need to be sure we navigated to this page from another one before,
    // otherwise, if we load this page directly, navigating back will not work
    // this.navController.pop();
  }
}
