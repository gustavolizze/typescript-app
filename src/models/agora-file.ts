import { Agora } from './agora';

export class AgoraFile {
    private _date!: Date;

    get version () : string {
        return '1.0';
    }

    get date() : Date {
        return this._date;
    }

    private set date(value: Date) {
        this._date = value;
    }

    get fields() : string {
        return 'provider http-method status-code uri-path time-taken response-size cache-status';
    }

    rows!: Agora[];

    constructor({ rows }: {
        rows: Agora[]
    }) {
        this.rows = rows;
        this.date = new Date();
    }

    toString() {
        let str = `#Version: ${this.version}\n#Date: ${this.date.toString()}\nFields: ${this.fields}`;

        str = str.concat(...this.rows.map(row => `\n${row.toString()}`));

        return str;
    }

}