> This repository is for demonstration purposes of how it can be implemented in Angular and is not maintaned.
Please fork and maintain your own version of this repository.

# ng2-alert-bar

Simple alert bar (ribbon/toaster) control for your angular2 applications.
Please star a project if you liked it, or create an issue if you have problems with it.

see [DEMO](https://nedimhozic.github.io/ng2-alert-bar/).

```bash
npm i --save ng2-alert-bar
```

# Usage
* Use it in your HTML elements, for example:
```html
<alert-bar [options]="options"></alert-bar>
```

* Add AlertBarModule in your app.module.ts:
```javascript
import {AlertBarModule} from 'ng2-alert-bar';

@NgModule({
    ...
    imports: [AlertBarModule
})

```
* Add AlertBar in your component:
```javascript
import {AlertBar, AlertBarOptions} from 'ng2-alert-bar';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options: AlertBarOptions = new AlertBarOptions();
  
  constructor(private alert: AlertBar) { }
  ...

```
* For show alert:
```javascript
this.alert.success('title text', 'body text');
this.alert.error('title text', 'body text');
this.alert.warning('title text', 'body text');
this.alert.info('title text', 'body text');
```

#Options
Default options:
```javascript
placement: Placement = Placement.bottom; // Position of alert-bar is bottom
duration: number = 5000; //Duration in ms
successColor: string = "#449d44"; //Hex color for success messages
errorColor: string = "#d9534f"; //Hex color for error messages
warningColor: string = "#f0ad4e"; //Hex color for warning messages
infoColor: string = "#5bc0de"; //Hex color for info messages
showClose: boolean = true; // X (for close) is showed
closeOnTap: boolean = false; // Close alert-bar if user click anywhere on alert-bar
noTimeout: boolean = false; // alert-bar watch on duration property
textPlacement: TextPlacement = TextPlacement.right; //Placement of content is right
innerColor: string = "#ffffff"; //Text color of alert-bar
```

#Override options
If you want to change predefind options, you can override all, or one of them like this:

**Placement**:
First, you need to import Placement enum from ng2-alert-bar:
```javascript
import {AlertBar, AlertBarOptions, Placement} from 'ng2-alert-bar';
```
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    placement: Placement.top
  });
```
or inside component:
```javascript
this.options.placement = Placement.top;
```

**Text placement**:
For text position, you need to import TextPlacement enum from ng2-alert-bar:
```javascript
import {AlertBar, AlertBarOptions, TextPlacement} from 'ng2-alert-bar';
```
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    textPlacement: TextPlacement.left
  });
```
or inside component:
```javascript
this.options.textPlacement = TextPlacement.left;
```

**Colors**:
For colors for ribbon or text position:
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    successColor: "someHexColor",
    errorColor: "someHexColor",
    warningColor: "someHexColor",
    infoColor: "someHexColor",
    innerColor: "someHexColor",
  });
```
or inside component:
```javascript
this.options.successColor: "someHexColor";
this.options.errorColor: "someHexColor";
this.options.warningColor: "someHexColor";
this.options.infoColor: "someHexColor";
this.options.innerColor: "someHexColor";
```

**Duration**:
If you want to change duration in ms:
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    duration: 10000,
  });
```
or inside component:
```javascript
this.options.duration: 10000,
```

**Show or hide close button (x)**:
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    showClose: false, //true for show, false for hide
  });
```
or inside component:
```javascript
this.options.duration: false,
```

**Close on tap** - Close alert-bar if user click on anywhere on ribbon:
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    closeOnTap: true, 
  });
```
or inside component:
```javascript
this.options.closeOnTap: true,
```

**Without timeout** - Ignore 'duration' property and let user to close alert-bar:
```javascript
public options: AlertBarOptions = new AlertBarOptions({
    noTimeout: true, 
  });
```
or inside component:
```javascript
this.options.noTimeout: true,
```
