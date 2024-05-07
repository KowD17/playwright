import elements from "./elements";
import {expect} from '@playwright/test'

export default class TestPlaywright {
    constructor(page){
        this.element = new elements(page);
    }

    async clickFreeQuoteButton(text) {
        await this.element.getFreeQuoteButton(text).click();
        await expect(this.element.getErrorCheck).toBeVisible();
    }
}