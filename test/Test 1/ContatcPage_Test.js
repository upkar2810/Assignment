import ConatcPage from "../../Page_Objects/ContactPage_Object/ContactPage.js"
describe('Test Sign form with valid and invalid data', () =>{

    beforeEach (async function (){
     browser.url('/');
    //await helpers.waitforPageload();
    
        
  })
     it('Test 1: Validate Mandatory Fields error message',  async() => {
        
        await ConatcPage.ContactLink.waitForDisplayed();
        await ConatcPage.ContactLink.click();
        await ConatcPage.ContactSubmit.click();
        await ConatcPage.ForenameError.waitForDisplayed();
        await ConatcPage.EmailError.waitForDisplayed();
        await ConatcPage.MessageError.waitForDisplayed();

        await ConatcPage.FillFeedbackForm();
        await ConatcPage.ForenameError.waitForDisplayed({ reverse: true });
        await ConatcPage.EmailError.waitForDisplayed({ reverse: true });
        await ConatcPage.MessageError.waitForDisplayed({ reverse: true });

        
       
            
    });

    it('Test 2: Validate Submiting Feedback form',  async() => {
        
        await ConatcPage.ContactLink.waitForDisplayed();
        await ConatcPage.ContactLink.click();
        await ConatcPage.FillFeedbackForm();
        await ConatcPage.ContactSubmit.click();
        await ConatcPage.SucessMessagePopup.waitForDisplayed();
        await ConatcPage.feedbackSubmitMessage.waitForDisplayed({ timeout: 15000 });    
        await ConatcPage.BackButton.waitForDisplayed({ timeout: 15000 });        
    
    });

    
});