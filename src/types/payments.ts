import { CurrencyCode } from './currencyCode';

export type PaymentRequestItem = {
	destination: string;
	currencyCode: CurrencyCode;
	sendAmount: number;
	tags?: [];
};

export type Attachment = {
	value: string | object;
	format: 'base64' | 'hex' | 'json';
};

export type TransactionParticipant = {
	type: string;
	alias: string;
	displayName: number;
	profilePictureUrl: string;
	tags: string[];
};

export type PaymentResult = {
	transactionId: string;
	note: string;
	appAction: string;
	time: number;
	type: string;
	satoshiFees: number;
	satoshiAmount: number;
	fiatExchangeRate: number;
	fiatCurrencyCode: CurrencyCode;
	participants: TransactionParticipant[];
	attachments: Attachment[];
	rawTransactionHex: string;
};

export type PaymentParameters = {
	description?: string;
	appAction?: string;
	payments: PaymentRequestItem[];
	attachment?: Attachment;
};
