import CartObject from "../../Page_Objects/Cart_Object/CartObjects.js"
describe('Test Sign form with valid and invalid data', () =>{

    beforeEach (async function (){
     browser.url('/');
    //await helpers.waitforPageload();
    
        
  })
     it('Test 1: Validate Product',  async() => {
        
        await CartObject.ShopLink.waitForDisplayed();
        await CartObject.ShopLink.click();
        await CartObject.StuffedFrogBuy.click();
        await CartObject.FluffyBunnyBuy.click();
        await CartObject.ValentineBearBuy.click();
        await CartObject.CartLink.click();
      
        await CartObject.StuffedFrogQuantity.waitForDisplayed();

        await CartObject.StuffedFrogQuantity.setValue('2');
        await CartObject.FluffyBunnyQuantity.setValue('5');
        await CartObject.ValentineBearQuantity.setValue('3');

        await CartObject.StuffedFrog.toHaveText('Stuffed Frog $10.99 $21.98')

        

            
    });

    

    
});