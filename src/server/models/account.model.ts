export class AccountModel {
	public id: string;
	public name: string;
	public bankName: string;

	constructor(account: AccountModel) {
		this.id = account.id;
		this.name = account.name;
		this.bankName = account.bankName;
	}
}