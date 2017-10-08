import { AccountModel } from '../models/account.model';
import { CurrencyModel } from '../models/currency.model';
import { BANKS } from '../enums/banks.enum';

export class AccountsConverter {
    public account: AccountModel;
    public currency: CurrencyModel;

	constructor(data: any) {
		switch(data.bank) {
			case BANKS.BANK_1:
				this.account = new AccountModel({
					id: data.account.number,
					name: data.account.name,
					bankName: data.bank
				});
				this.currency = new CurrencyModel({
					isoName: data.currency,
					name: null
				});
				break;
			case BANKS.BANK_2:
				this.account = new AccountModel({
					id: data.account.id,
					name: data.account.name,
					bankName: data.bank
				});
				this.currency = new CurrencyModel({
					isoName: data.currency.name,
					name: data.currency.label
				});
				break;
			case BANKS.BANK_3:
				this.account = new AccountModel({
					id: data.account.id,
					name: data.account.name,
					bankName: data.account.bankName
				});
				this.currency = new CurrencyModel({
					isoName: data.ccy.isoName,
					name: data.ccy.name
				});
				break;
		}
		
	}
}