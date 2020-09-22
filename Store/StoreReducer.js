import data from "../data";

const initialState ={
    data: data,
    copiedData: data.map(item=>{
        let id = item.sys.id;
        let images = item.fields.images.map(img => img.fields.file.url);
         let  finalData ={
             ...item.fields,
             id: id,
             images:images,
             priceAfterAlteration: item.fields.price
         }
       return finalData
    }),
    handleSideDrawer: false,
    handleBackdrop: false,
    handleCartDrawer: false,
    customersName: "sign in",
    isUserSignedIn: false,
    cartTotal:0,
    cartElCount:0,
    cartItems:[],
    wishList:[],
    orderList:[],
    tech: [],
    videoGames: [],
    kitchen: [],
    watches: [],
    formatNums: formatNums,
    handleBackdropGallery: false
}
// function getItemBySlug(slug){
//     const selectedItem = initialState.copiedData.find(item => item.name === slug);
//         return selectedItem;
// }

// function getItemById(id){
//     const selectedItem = initialState.copiedData.find(item => item.id === id);
//         return selectedItem;
// }
function formatNums(num){
   return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
// initialState.tech.push("test","22");

// const newData = initialState.data;
// var tempData = newData.map(item=>{
//     let id = item.sys.id;
//     let images = item.fields.images.map(img => img.fields.file.url);
//      let  finalData ={
//          ...item.fields,
//          id: id,
//          images:images
//      }
//    return finalData
// });

//Categories
initialState.tech =(initialState.copiedData.filter(item => item.type === "tech" ));
initialState.videoGames =(initialState.copiedData.filter(item => item.type === "video-games" ));
initialState.kitchen =(initialState.copiedData.filter(item => item.type === "kitchen" ));
initialState.watches =(initialState.copiedData.filter(item => item.type === "watches" ));



const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CHANGE_QTY":
                const getItemIndexById = (id, location )=>{
                    let wantedIndex;
                    state[location].find((item,i ) =>{
                        wantedIndex = i;
                        return item.id === id;
                    })
                    return wantedIndex;
                }
            let mirrorData = JSON.parse(JSON.stringify(state.copiedData));
            let mirrorCartItems = JSON.parse(JSON.stringify(state.cartItems));
            let index = getItemIndexById(action.payload.id, "copiedData");
            let cartItemsIndex = getItemIndexById(action.payload.id, "cartItems");
            var isElementExist;
            state.cartItems.find(el => {
                isElementExist = el.id === action.payload.id;
               return el.id === action.payload.id
            });
            console.log(state.cartItems,isElementExist);
            //change main data
            mirrorData[index].quantity = action.payload.val;
            mirrorData[index].priceAfterAlteration = action.payload.currentPrice;
            //change cartItem array
            if(cartItemsIndex !== undefined && isElementExist ){
                mirrorCartItems[cartItemsIndex].priceAfterAlteration = action.payload.currentPrice;
                mirrorCartItems[cartItemsIndex].quantity = action.payload.val;
            }
            
            return{
                ...state,
               copiedData: mirrorData,
               tech: mirrorData.filter(item => item.type === "tech" ),
               cartItems: cartItemsIndex !== undefined && isElementExist ? mirrorCartItems : state.cartItems
            }
        case "ADD_ITEM":
                //Removes duplicated objects in the array
           let oldArr = [...state[action.payload.location], action.payload.item];
           let specialId;
            var newArr = Array.from(new Set(oldArr.map(item => item.id)))
                .map(id =>{
                    specialId = id;
                    return oldArr.find(el => el.id === id )
                });
                //checks whether the item already exist in cartItems array if NOT, the "handleSideDrawer" variable gets changed to true
                    var isItemExist; 
                    state.cartItems.find(el => {
                        isItemExist = el.id ===  specialId;
                        return el.id ===  specialId;
                    });
                
            return{
                ...state,
                handleCartDrawer:  action.payload.location === "cartItems" && !isItemExist,
                [action.payload.location]: newArr
                
            }
            
        case "DELETE_ITEM":
            console.log(action.payload.location, action.payload.index);
            let updatedArray = JSON.parse(JSON.stringify(state[action.payload.location]));
            updatedArray.splice(action.payload.index,1);
            return{
                ...state,
                [action.payload.location]: updatedArray
            }
        case "HANDLE_SIDEDRAWER":
            return{
                ...state,
                handleSideDrawer: action.payload,
                handleBackdrop: action.payload
            }
        case "HANDLE_GALLERY":
            return{
                ...state,
                handleBackdropGallery: action.payload
            }
        case "USER_STATUS":
            return{
                ...state,
                isUserSignedIn: action.payload
            }
        case "UPDATE_CART_TOTAL":
            return{
                ...state,
                cartTotal: action.payload.total,
                cartElCount: action.payload.count
            }
        case "ADD_TO_ORDERS":
            
            return{
                ...state,
                orderList: [...state.orderList, action.payload]
            }
        case "CLEAR":
            return{
                ...state,
                [action.payload]: []
            }
        case "OPEN_CART_SIDEDRAWER":
            console.log("triggered", action.payload);
            return{
                ...state,
                handleCartDrawer: action.payload
            }
        default:
        return state;
    }
}


export default rootReducer;