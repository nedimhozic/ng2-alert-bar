import { Component } from '@angular/core';
import { AlertBar } from '../ng2-alert-bar/alert-bar.service';
import { AlertBarOptions, Placement, TextPlacement } from '../ng2-alert-bar/alert-bar.options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Title";
  public body: string = "Content Body";
  public options: AlertBarOptions = new AlertBarOptions();
  public color: string = "#449d44";
  public availableColors: Array<string>;
  public textColors: Array<string>;

  constructor(private alert: AlertBar) {
    this.availableColors = new Array<string>(
      "#449d44",
      "#d9534f",
      "#f0ad4e",
      "#5bc0de",
      "#977ffa",
      "#4c4034",
      "#eec9a4",
      "#ae030e",
      "#d8be7e",
      "#0a014d"
    );
    this.textColors = new Array<string>(
      "#ffffff",
      "#000000"
    );
    this.options.textPlacement = TextPlacement.left;
  }

  success() {
    this.alert.success(this.title, this.body);
  }

  error() {
    this.alert.error(this.title, this.body);
  }

  warning() {
    this.alert.warning(this.title, this.body);
  }

  info() {
    this.alert.info(this.title, this.body);
  }
}
