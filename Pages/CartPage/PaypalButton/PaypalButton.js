import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {

        generateNewId=()=>{
        
                let char1 = "G";
                let char2 = "j";
                let char3 = "k";
                let char4 = "M";
                let char5 = "N";
                let char6 = "Z";
                var charRandom =()=>{
                return Math.floor((Math.random() *6 )+1);
                }
                for(let i = 0; i<5 ; i++){
                charRandom();//calls the "charRandom" function repeatedly 6 time, each time a new character will be created.
                switch (charRandom()){ //determines which new char will be created for each variable
                    case 1:
                    char1 = "A";
                    break;
                    case 2:
                    char2 = "B"
                    break;
                    case 3:
                    char3 = "C"
                    break;
                    case 4:
                    char4 = "D"
                    break;
                    case 5:
                    char5 = "E"
                    break;
                    default:
                    char6 = "F"
                }
                };
    
                const numRandom=()=>{
                return char1 + char2 + char3 + Math.random() *9999 +1 + char4 + char5 + char6 ;
                }
                
                return numRandom();
            }
    render() {
        const {total, history, addToOrders, cartCount, clearCart} = this.props;
         //adds date
     let todaysDate;
      const dayInTheMonth = new Date().getDate();
      const month = new Date().getMonth()+1;
      const year = new Date().getFullYear();
              
        todaysDate = dayInTheMonth+"/"+month+"/"+year;
        console.log(todaysDate);

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            		console.log("The payment was succeeded!", payment);
                    history.push("/");
                    const orderObj={
                        cartElCount: cartCount,
                        orderDate: todaysDate,
                        id: this.generateNewId(),
                        total: total,
                        paid: false,
                        delivered: false
                    }
                    addToOrders(orderObj);
                    console.log(orderObj);
                    clearCart("cartItems");
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
        
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        // let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'AdW-OaPg_zJ9UV52VTkgKeh09LdXrJwit3EQEs7hoHvWpUnMf7GIdfV3nUQ7wZunqEAvC6VMcE9ID-c6',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={Math.floor(total)} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}