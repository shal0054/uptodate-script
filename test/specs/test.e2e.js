import { expect, browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

/**
 * [
    'Select Month', 'Nov 2023',
    'Oct 2023',     'Sep 2023',
    'Aug 2023',     'Jul 2023',
    ...
    'Feb 2022',     'Jan 2022',
    'Dec 2021',     'Nov 2021'
    ]
 */

const startMonth = 'Jan 2023';
const endMonth = 'Dec 2023';

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await LoginPage.open();

		await LoginPage.login('islameissa', 'islam11');
		await expect(SecurePage.CMEbtn).toBeExisting();
		await SecurePage.CMEbtn.click();
		await expect(SecurePage.selectCreditBtn).toBeExisting();
		await SecurePage.selectCreditBtn.click();
		await expect(SecurePage.table).toBeExisting();
		await SecurePage.table.click();
		await expect(SecurePage.monthRangeBtn).toBeExisting();
		await SecurePage.monthRangeBtn.click();
		await SecurePage.monthRangeBtn.click();

		const listOfStartMonths = await SecurePage.startMonthRange
			.$$('option')
			.map(option => option.getText());

		const indexOfStartMonth = listOfStartMonths.indexOf(startMonth);

		await SecurePage.startMonthRange.$$('option')[indexOfStartMonth].click();

		const listOfEndMonths = await SecurePage.endMonthRange
			.$$('option')
			.map(option => option.getText());

		const indexOfEndMonth = listOfEndMonths.indexOf(endMonth);

		await SecurePage.endMonthRange.$$('option')[indexOfEndMonth].click();

		(await SecurePage.loadMoreBtn).waitForClickable();

		await expect(SecurePage.loadMoreBtn).toBeExisting();

		while (await SecurePage.loadMoreBtn.isDisplayed()) {
			await (await SecurePage.loadMoreBtn).scrollIntoView();
			await SecurePage.loadMoreBtn.click();
			await browser.pause(1000);
		}

		await (await SecurePage.checkAllBox).waitForClickable();
		await SecurePage.checkAllBox.click();

		await SecurePage.continueBtn.click();

		// Checks off the 1st box in each group
		for await (const elm of SecurePage.refCheckBoxes) {
			(await elm.$('input')).click();
		}

		await browser.debug();
	});
});
