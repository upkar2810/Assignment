import helper from "../../resource/helpers.js";
class CartObjects {

	///##Login
	    get ShopLink() { return $("//a[@href='#/shop' and text()='Shop']");}
	    get StuffedFrogBuy() { return $("//li[@id='product-2']//a");} 
	    get FluffyBunnyBuy() { return $("//li[@id='product-4']//a");}
		get ValentineBearBuy() { return $("//li[@id='product-7']//a");}
		get CartLink() {return $("//a[@href='#/cart']");}


		get StuffedFrog() {return $("//tbody/tr[@class='cart-item ng-scope'][1]/td[@class='ng-binding']");}
		get FluffyBunny() {return $("//tbody/tr[@class='cart-item ng-scope'][2]/td[@class='ng-binding']");}
		get ValentineBear() {return $("//tbody/tr[@class='cart-item ng-scope'][3]/td[@class='ng-binding']")}

		get StuffedFrogQuantity() {return $("//tbody/tr[@class='cart-item ng-scope'][1]/td[3]/input[@class='input-mini ng-pristine ng-valid ng-valid-number ng-valid-min']")}
		get FluffyBunnyQuantity() {return $("//tbody/tr[@class='cart-item ng-scope'][2]/td[3]/input[@class='input-mini ng-pristine ng-valid ng-valid-number ng-valid-min']")}
		get ValentineBearQuantity() {return $("//tbody/tr[@class='cart-item ng-scope'][3]/td[3]/input[@class='input-mini ng-pristine ng-valid ng-valid-number ng-valid-min']")}

	
		
	}

export default new CartObjects()