import helper from "../../resource/helpers.js";
class ContactPage {

	///##Login
	    get ContactLink() { return $("//a[@href='#/contact']");}
	    get ContactSubmit() { return $("//a[text()='Submit']");} 
	    get ForenameError() { return $("//span[@id='forename-err']");}
		get EmailError() { return $("//span[@id='email-err']");}
		get MessageError() {return $("//span[@id='message-err']");}


		get forenameTextBox() {return $("//input[@id='forename']");}
		get EmailTextBox() {return $("//input[@id='email']");}
		get MessageTextBox() {return $("//textarea[@id='message']")}

		get SucessMessagePopup() {return $("//div[@class='modal-header']/h1")}
        get feedbackSubmitMessage() {return $("//div[@class='alert alert-success']")}
        get BackButton() {return $("//a[@class='btn']")}
		
    		
		async FillFeedbackForm(){ 
		  
		    await this.ContactLink.waitForDisplayed();
            await this.ContactLink.click();
            await helper.setValue(this.forenameTextBox,"Test User");
		    await helper.setValue(this.EmailTextBox,"test@yopmail.com");
		    await helper.setValue(this.MessageTextBox,"Test Message");
		   		 
		 }	
	}

export default new ContactPage()