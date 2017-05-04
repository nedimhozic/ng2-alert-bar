export class AlertBarOptions {
    public placement: Placement = Placement.bottom;
    public duration: number = 5000;
    public successColor: string = "#449d44";
    public errorColor: string = "#d9534f";
    public warningColor: string = "#f0ad4e";
    public infoColor: string = "#5bc0de";
    public showClose: boolean = true;
    public closeOnTap: boolean = false;
    public noTimeout: boolean = false;
    public textPlacement: TextPlacement = TextPlacement.right;
    public innerColor: string = "#ffffff";
    
    public constructor(
        fields?: {
            placement?: Placement,
            duration?: number,
            successColor?: string,
            errorColor?: string,
            warningColor?: string,
            infoColor?: string,
            showClose?: boolean,
            closeOnTap?: boolean,
            noTimeout?: boolean,
            textPlacement?: TextPlacement,
            innerColor?: string
        }) {
        if (fields) Object.assign(this, fields);
    }
}

export const enum Placement {
    bottom = 0,
    top = 1
}

export const enum TextPlacement {
    left = 0,
    right = 1
}