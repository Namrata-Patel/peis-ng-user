export class User{
    public name:string;
    public id:number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}