import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
	get CMEbtn() {
		return $('//*[@id="cmeTickerDesktopHeader"]/div/span[1]/span[1]');
	}
	get selectCreditBtn() {
		return $('//*[@id="cmeRedeemDesktopButton"]/div/div[2]/button');
	}
	get table() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]'
		);
	}
	get monthRangeBtn() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]/button[2]'
		);
	}
	get startMonthRange() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]/div[1]/span[1]/select'
		);
	}
	get endMonthRange() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]/div[1]/span[3]/select'
		);
	}
	get loadMoreBtn() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]/div[3]/button[2]'
		);
	}
	get checkAllBox() {
		return $(
			'//*[@id="utd-main"]/ui-view/ui-view/utd-bridge-cme-redeem-select/div/div[1]/div/div/div[2]/div[3]/div[1]/div/div/div[1]/input'
		);
	}
	get continueBtn() {
		return $('#cmeRedeemSelectDesktopContinue');
	}
	get continueReflectionBtn() {
		return $('#cmeRedeemReflectDesktopContinue');
	}
}

export default new SecurePage();
