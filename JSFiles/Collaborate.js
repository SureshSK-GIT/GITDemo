"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Login Collaborate app', () => __awaiter(this, void 0, void 0, function* () {
    it('Enter UserName', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://vmhkazscswbqa1.lfdigital.net/dpd/#/login");
        yield protractor_1.browser.driver.manage().window().maximize();
        yield protractor_1.element(protractor_1.by.id('username')).sendKeys('sumitkapoor');
        yield protractor_1.element(protractor_1.by.id('password')).sendKeys('M#rcury7123');
        yield protractor_1.element(protractor_1.by.id('login-button')).click();
        //click project
        yield protractor_1.element(protractor_1.by.css("mat-icon[class*='add_circle mat-icon material-icons']")).click();
        //Enter project details
        yield protractor_1.element(protractor_1.by.id('adf-folder-name-input')).sendKeys('TestDemo1');
        //await element(by.id('mat-input-3')).sendKeys('Kohl\'s');
        //await browser.sleep(5000);
        //await element(by.id('mat-input-4')).sendKeys('Apt 9');
        //Division
        yield protractor_1.element(protractor_1.by.css("input[placeholder='Customer Name']")).click();
        protractor_1.element.all(protractor_1.by.css("span[class='mat-option-text']")).each(function (elem) {
            elem.getText().then(function (text) {
                console.log(text);
                if (text === 'Kohl\'s') {
                    elem.click();
                    protractor_1.browser.sleep(5000);
                }
            });
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFib3JhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Db2xsYWJvcmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBR2xELFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFRLEVBQUU7SUFFeEMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEdBQU8sRUFBRTtRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDdEUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdDLGVBQWU7UUFDZixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkYsdUJBQXVCO1FBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsMERBQTBEO1FBQ3pELDRCQUE0QjtRQUM1Qix3REFBd0Q7UUFFeEQsVUFBVTtRQUNWLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQzlELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixJQUFHLElBQUksS0FBSyxTQUFTLEVBQ3JCO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUdWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==