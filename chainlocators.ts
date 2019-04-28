import { browser } from "protractor";
import { element, by } from "protractor";

describe('My First Angular Application Project', function () {

    async function calcApp(a, b) {
        await element(by.model('first')).sendKeys(a);
        await element(by.model('second')).sendKeys(b);
        //First way through position
        element(by.model('operator')).element(by.css('option:nth-child(3)')).getText().then(function (text) {
            //c=text;
            element(by.model('operator')).element(by.css('option:nth-child(3)')).click();
        })
        await element(by.id('gobutton')).click();
    }

    xit('Open browser', function () {

        browser.get('http://juliemr.github.io/protractor-demo/')
        //repeater, chain locators, identical tags  
        var a = 5;
        var b = 6;
        var c;
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        //First way through position
        element(by.model('operator')).element(by.css('option:nth-child(5)')).getText().then(function (text) {
            c = text;
            element(by.model('operator')).element(by.css('option:nth-child(5)')).click();
        })

        // Second way through value
        /*element(by.model('operator')).element(by.css("option[value = 'DIVISION']")).getText().then(function(text)
        {
        c=text;
        element(by.model('operator')).element(by.css("option[value = 'DIVISION']")).click();
         })*/

        element(by.id('gobutton')).click();
        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function (text1) {
            console.log('Value of : ' + a + ' ' + c + ' ' + b + ' equals to ' + text1);
        })
    });

    it('AllElements', async () => {

        await browser.get('http://juliemr.github.io/protractor-demo/')
        //repeater, chain locators, identical tags  
        var c;
        await calcApp(8, 9);
        await calcApp(4, 2);
        await calcApp(8, 6);

        /*element.all(by.repeater('result in memory')).count().then(function(cnt){
                console.log(cnt);

      
        })*/
        //var cnt;
        var cnt = await element.all(by.repeater('result in memory')).count();
        await console.log("count is " + cnt);
        expect(cnt).toBe(3);
    })
});

