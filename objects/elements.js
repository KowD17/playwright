const log_in_button = (text) => `span.btn--text:has-text("${text}")`;
const check = 'span.red--text';

export default class elements {
    constructor(page){
        this.page = page
        this.getFreeQuoteButton = (text) => page.locator(log_in_button(text));
        this.getErrorCheck = page.locator(check);
    }
}