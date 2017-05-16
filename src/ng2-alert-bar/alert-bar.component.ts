import { Component, AfterViewInit, OnInit, Input, Renderer, ViewChild, ElementRef } from '@angular/core';
import { AlertBar, Type } from './alert-bar.service';
import { AlertBarOptions, Placement, TextPlacement } from './alert-bar.options';

@Component({
    moduleId: module.id,
    selector: 'alert-bar',
    templateUrl: './alert-bar.component.html',
    styleUrls: ['./alert-bar.component.css']
})
export class AlertBarComponent {
    @ViewChild('container') container: ElementRef;
    @ViewChild('close') close: ElementRef;
    @ViewChild('text') text: ElementRef;

    @Input() options: AlertBarOptions = new AlertBarOptions();

    public title: string;
    public body: string;
    public items: Array<Item> = new Array<Item>();

    constructor(private service: AlertBar, private renderer: Renderer) {
        this.initFunctions();
    }

    initFunctions() {
        this.service.open.subscribe((data: any) => {
            this.title = data.title;
            this.body = data.body;
            var item: Item = new Item();
            item.title = data.title;
            item.body = data.body;
            item.position = this.items.length * 30 + "px";
            if (data.type == Type.success) {
                item.color = this.options.successColor;
            } else if (data.type == Type.error) {
                item.color = this.options.errorColor;
            } else if (data.type == Type.warning) {
                item.color = this.options.warningColor;
            } else if (data.type == Type.info) {
                item.color = this.options.infoColor;
            }
            if (this.options.placement == Placement.bottom) {
                this.items.unshift(item);
            } else {
                this.items.push(item);
            }
            var id = "alert_item_" + this.items.indexOf(item, 0);
            if (!this.options.noTimeout) {
                setTimeout(() => {
                    this.closeWithElement(document.getElementById(id), this.items.indexOf(item, 0));
                }, this.options.duration)
            }
        });
    }

    getContainerStyle() {
        var myStyles = {};
        if (this.options.placement == Placement.bottom) {
            myStyles = {
                'bottom': '0px'
            }
        } else {
            myStyles = {
                'top': '0px'
            }
        }
        return myStyles;
    }

    getItemStyles(item: Item) {
        let myStyles = {
            'bottom': item.position,
            'background': item.color,
            'color': this.options.innerColor,
            'text-align': this.options.textPlacement == TextPlacement.left ? 'left' : 'right'
        }
        return myStyles;
    }

    getTextStyle() {
        let style = {};
        if (this.options.textPlacement == TextPlacement.right) {
            style = {
                'right': '5px'
            }
        } else {
            if (this.options.showClose) {
                style = {
                    'left': '20px'
                }
            } else {
                style = {
                    left: '10px'
                }
            }
        }
        return style;
    }

    closeAlert(event: any, item: Item) {
        this.closeWithElement(event.srcElement.parentNode, this.items.indexOf(item, 0));
    }

    closeWithElement(element: any, index: number) {
        if (index > -1) {
            this.renderer.setElementStyle(element, 'opacity', "0");
            setTimeout(() => {
                if (index > -1) {
                    this.items.splice(index, 1);
                }
            }, 300);
        }
    }

    tapClose(event: any, item: Item) {
        if (this.options.closeOnTap) {
            this.closeWithElement(event.srcElement, this.items.indexOf(item, 0));
        }
    }
}

export class Item {
    public title: string;
    public body: string;
    public color: string;
    public position: string;
}