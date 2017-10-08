import { HTTPHandler } from './httpHandler';
import { AccountsConverter } from './converters/accounts.converter';


export class Request {
	private httpHandler: HTTPHandler = new HTTPHandler();

	getAccounts(url: string) {
		return new Promise((resolve) => {
			this.httpHandler.execute(url).then((data: any) => {
				const response = JSON.parse(data.response);
				const accounts = new AccountsConverter(response);

				resolve(accounts);
			});
		});
	}

	
}