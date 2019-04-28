"use strict";
//import { ExpectedConditions } from "protractor";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe('Angular App2 Demo', function () {
    //Reusable functions
    //Select Gender
    function selectGender(sex) {
        if (sex === 'Male' || sex === 'Female') {
            /*element.all(by.tagName('option')).each(function(elem)
            {
                elem.getAttribute('value').then(function(val)
                {
                    if(val.toLowerCase().trim() === sex.toLowerCase().trim())
                    {
                        elem.click().then(function(){
                            browser.sleep(2000);
                        });
                    }
                })
                
            })*/
            protractor_1.element(protractor_1.by.cssContainingText("[id='exampleFormControlSelect1'] option", sex)).click().then(function () {
                protractor_2.browser.sleep(2000);
            });
        }
    }
    //Select Employee status
    function selectEmploymentStatus(sts) {
        /*element.all(by.css("div[class='form-check form-check-inline']")).each(function(elem)
        {
            elem.element(by.css("label[class='form-check-label']")).getText().then(function(txt)
            {
                if(sts.toLowerCase().trim===txt.toLowerCase().trim()){
                    elem.element(by.css("label[class='form-check-label']")).click();
                    browser.sleep(10000);
                }
            })
           
        })*/
        protractor_1.element.all(protractor_1.by.name('inlineRadioOptions')).get(sts).click().then(function () {
            protractor_2.browser.sleep(2000);
        });
    }
    it('Protocommerce', function () {
        protractor_2.browser.driver.manage().window().maximize();
        protractor_2.browser.get('http://qaclickacademy.github.io/protocommerce');
        protractor_2.browser.getTitle().then(function (text) {
            console.log('Page navigated to Angular Demo app : ' + text);
        });
        protractor_1.element(protractor_1.by.css("input[name = 'name']")).sendKeys('Tester');
        protractor_1.element(protractor_1.by.css("input[name = 'email']")).sendKeys('Tester@gmail.com');
        protractor_1.element(protractor_1.by.id('exampleInputPassword1')).sendKeys('password');
        protractor_1.element(protractor_1.by.id('exampleCheck1')).click();
        selectGender('Female');
        selectEmploymentStatus(0);
        protractor_1.element(protractor_1.by.buttonText('Submit')).click().then(function () {
            protractor_2.browser.sleep(2000);
            protractor_1.element(protractor_1.by.css("div[class*='success']")).getText().then(function (txt) {
                //console.log('text --> ' + txt);
                //var str = "Success! The Form has been submitted successfully!.";
                console.log(expect(txt).toContain('Success!'));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtEQUFrRDs7QUFFbEQsMkNBQXlDO0FBRXpDLDJDQUFxQztBQUVyQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTLFlBQVksQ0FBQyxHQUFHO1FBRXJCLElBQUcsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssUUFBUSxFQUNyQztZQUNBOzs7Ozs7Ozs7Ozs7Z0JBWUk7WUFDSixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDdkYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUE7U0FDRDtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHO1FBRTNCOzs7Ozs7Ozs7O1lBVUk7UUFDSixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLEVBQUUsQ0FBQyxlQUFlLEVBQUM7UUFHZixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQzdELG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUU3QixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFBO1FBRU4sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBRTFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRztnQkFFaEUsaUNBQWlDO2dCQUNqQyxrRUFBa0U7Z0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFBO1FBRU4sQ0FBQyxDQUFDLENBQUE7SUFHTCxDQUFDLENBQUMsQ0FBQTtBQUVQLENBQUMsQ0FBQyxDQUFBIn0=