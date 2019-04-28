import {element, by, browser} from "protractor";
describe('Next Level Angular',function(){

    it('Handle Dropdown',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element.all(by.tagName('option')).each(function(elem){
            elem.getAttribute('value').then(function(text){
                console.log(text);
            })
        })

        element.all(by.tagName('option')).each(function(elem){
            elem.getText().then(function(text){
                console.log(text);
            })
        })

        element(by.model('operator')).element(by.css('option:nth-child(4)')).getText().then(function(text){
            console.log(text);
        })
    })
})