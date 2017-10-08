export class CurrencyModel {
	public isoName: string;
    public name: string;
    
    constructor(currency: CurrencyModel) {
        this.isoName = currency.isoName;
        this.name = currency.name;
    }
}