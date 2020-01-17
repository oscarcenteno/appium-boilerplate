import DynamicPage from '../pageobjects/dynamic.page';

describe('dynamic loading', () => {
    it('should be a button on the page', () => {
        DynamicPage.open();

        expect(DynamicPage.loadedPage.isExisting()).toEqual(false);

        DynamicPage.btnStart.click();
        DynamicPage.loadedPage.waitForExist();

        expect(DynamicPage.loadedPage.isExisting()).toEqual(true);
    });
});
