import { Given,Then,When } from 'cypress-cucumber-preprocessor/steps';
import {LIVELO_PAGE_ELEMENTS} from '../pages/liveloPage';
import {CONSTANTS} from '../utils/constants'
import cypressMethods from '../utils/cypressMethods';

Given('the user set the product', () => {
    cypressMethods.access(CONSTANTS.url)
    cypressMethods.setTextElement(LIVELO_PAGE_ELEMENTS.search_product, CONSTANTS.product)
    cypressMethods.enter(LIVELO_PAGE_ELEMENTS.search_product)
    }
);

Then('the product must be selected without discound', () => {
    cypressMethods.haveText(LIVELO_PAGE_ELEMENTS.titleProduct,CONSTANTS.product)
    cypressMethods.clickfirstElementButton(LIVELO_PAGE_ELEMENTS.buttonAddCart)
    cypressMethods.clickfirstElementButton(LIVELO_PAGE_ELEMENTS.buttonNONdiscount)
    }
);

When('must be checked if ther product is selected', () => {
    cypressMethods.haveText(LIVELO_PAGE_ELEMENTS.iconCart,CONSTANTS.cart)
    cypressMethods.haveText(LIVELO_PAGE_ELEMENTS.titleProductCart, CONSTANTS.product)
})