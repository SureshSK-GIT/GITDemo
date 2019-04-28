import { browser, element, by } from "protractor";
import { async } from "q";

describe('Login Collaborate app', async ()=>{

    it('Enter UserName', async()=>{
        await browser.get("https://vmhkazscswbqa1.lfdigital.net/dpd/#/login");
        await browser.driver.manage().window().maximize();
        await element(by.id('username')).sendKeys('sumitkapoor');
        await element(by.id('password')).sendKeys('M#rcury7123');
        await element(by.id('login-button')).click();

        //click project
        await element(by.css("mat-icon[class*='add_circle mat-icon material-icons']")).click();

        //Enter project details
        await element(by.id('adf-folder-name-input')).sendKeys('TestDemo1');
       //await element(by.id('mat-input-3')).sendKeys('Kohl\'s');
        //await browser.sleep(5000);
        //await element(by.id('mat-input-4')).sendKeys('Apt 9');
        
        //Division
        await element(by.css("input[placeholder='Customer Name']")).click();
            element.all(by.css("span[class='mat-option-text']")).each(function(elem){
                     elem.getText().then(function(text){
                         console.log(text);
                        if(text === 'Kohl\'s')
                        {
                            elem.click();
                            browser.sleep(5000);
                        }
                    })
    
                
            })
        });

    });
        