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
const protractor_2 = require("protractor");
describe('My First Angular Application Project', function () {
    function calcApp(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.element(protractor_2.by.model('first')).sendKeys(a);
            yield protractor_2.element(protractor_2.by.model('second')).sendKeys(b);
            //First way through position
            protractor_2.element(protractor_2.by.model('operator')).element(protractor_2.by.css('option:nth-child(3)')).getText().then(function (text) {
                //c=text;
                protractor_2.element(protractor_2.by.model('operator')).element(protractor_2.by.css('option:nth-child(3)')).click();
            });
            yield protractor_2.element(protractor_2.by.id('gobutton')).click();
        });
    }
    xit('Open browser', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, identical tags  
        var a = 5;
        var b = 6;
        var c;
        protractor_2.element(protractor_2.by.model('first')).sendKeys(a);
        protractor_2.element(protractor_2.by.model('second')).sendKeys(b);
        //First way through position
        protractor_2.element(protractor_2.by.model('operator')).element(protractor_2.by.css('option:nth-child(5)')).getText().then(function (text) {
            c = text;
            protractor_2.element(protractor_2.by.model('operator')).element(protractor_2.by.css('option:nth-child(5)')).click();
        });
        // Second way through value
        /*element(by.model('operator')).element(by.css("option[value = 'DIVISION']")).getText().then(function(text)
        {
        c=text;
        element(by.model('operator')).element(by.css("option[value = 'DIVISION']")).click();
         })*/
        protractor_2.element(protractor_2.by.id('gobutton')).click();
        protractor_2.element(protractor_2.by.repeater('result in memory')).element(protractor_2.by.css('td:nth-child(3)')).getText().then(function (text1) {
            console.log('Value of : ' + a + ' ' + c + ' ' + b + ' equals to ' + text1);
        });
    });
    it('AllElements', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, identical tags  
        var c;
        yield calcApp(8, 9);
        yield calcApp(4, 2);
        yield calcApp(8, 6);
        /*element.all(by.repeater('result in memory')).count().then(function(cnt){
                console.log(cnt);

      
        })*/
        //var cnt;
        var cnt = yield protractor_2.element.all(protractor_2.by.repeater('result in memory')).count();
        yield console.log("count is " + cnt);
        expect(cnt).toBe(3);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5sb2NhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NoYWlubG9jYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQywyQ0FBeUM7QUFFekMsUUFBUSxDQUFDLHNDQUFzQyxFQUFFO0lBRTdDLFNBQWUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUN2QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5Qyw0QkFBNEI7WUFDNUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQzlGLFNBQVM7Z0JBQ1Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFFRCxHQUFHLENBQUMsY0FBYyxFQUFFO1FBRWhCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDeEQsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDO1FBQ04sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4Qyw0QkFBNEI7UUFDNUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDOUYsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNULG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQTtRQUVGLDJCQUEyQjtRQUMzQjs7OzthQUlLO1FBRUwsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUN0RyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFTLEVBQUU7UUFFekIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO1FBQzlELDRDQUE0QztRQUM1QyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBCOzs7O1lBSUk7UUFDSixVQUFVO1FBQ1YsSUFBSSxHQUFHLEdBQUcsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=