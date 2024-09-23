import ptBr from './messages/pt-br.json';

type Messages = typeof ptBr;

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
