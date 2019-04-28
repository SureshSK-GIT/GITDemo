//import { ExpectedConditions } from "protractor";

import { element, by } from "protractor";

import { browser } from "protractor";

describe('Angular App2 Demo', function(){

    //Reusable functions
    //Select Gender
    function selectGender(sex)
    {
        if(sex === 'Male' || sex === 'Female')
        {
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
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", sex)).click().then(function(){
            browser.sleep(2000);
        })
        }        
    }

    //Select Employee status
    function selectEmploymentStatus(sts)
        {
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
            element.all(by.name('inlineRadioOptions')).get(sts).click().then(function(){
                browser.sleep(2000);
            })
        }          

    it('Protocommerce',function()
    {
        
        browser.driver.manage().window().maximize();
        browser.get('http://qaclickacademy.github.io/protocommerce');
        browser.getTitle().then(function(text)
            {
                console.log('Page navigated to Angular Demo app : '+ text);
            })
        
        element(by.css("input[name = 'name']")).sendKeys('Tester');
        element(by.css("input[name = 'email']")).sendKeys('Tester@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('password');
        element(by.id('exampleCheck1')).click();
        selectGender('Female');
        selectEmploymentStatus(0);

        element(by.buttonText('Submit')).click().then(function()
        {
            browser.sleep(2000);
            element(by.css("div[class*='success']")).getText().then(function(txt)
            {
                //console.log('text --> ' + txt);
                //var str = "Success! The Form has been submitted successfully!.";
                console.log(expect(txt).toContain('Success!'));
            })
            
        })
        
         
     })

})