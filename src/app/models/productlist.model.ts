import { DatePipe } from '@angular/common';

export class Productlist {

    constructor(private datePipe: DatePipe) { }

    private _id: number;
    private _nSerie: string;
    private _dateprelev: Date;
    private _dateExp: Date;
    private _bloodgroup: string;
    private _volume: number;
    private _serologie: string;
    private _bloodstatus: string;

    public get id(): number {
        return this._id;
    }

    public get getnSerie(): string {
        return this._nSerie;
    }

    public get dateprelev(): Date {
        return this._dateprelev;
    }

    public get dateExp(): Date {
        return this._dateExp;
    }

    public get bloodgroup(): string {
        return this._bloodgroup;
    }

    public get volume(): number {
        return this._volume;
    }

    public get serologie(): string {
        return this._serologie;
    }

    public get bloodstatus(): string {
        return this._serologie;
    }

}
