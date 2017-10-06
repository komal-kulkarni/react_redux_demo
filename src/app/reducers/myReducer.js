import {products} from "../products";

var productsArray = products;
export function myReducer(
		state = {
			products : productsArray
		},
		action
	) {
	switch(action.type) {
		case "SEARCH" :
			var newState = Object.assign({},state);
			var state1 = Object.create(state);
			state1.products = productsArray;
			var arr = [];
			if(action.payload != ""){
				for(var i=0;i<newState.products.length;i++) {
					if((newState.products[i].name).includes(action.payload)) {
						console.log("matching item found");
						arr.push(newState.products[i]);
						newState.products = arr;
						return newState;
					}
					else {
						console.log("matching item not found");
						newState.products = newState.products;
					}
				}
			}
			else {
				console.log("payload is empty, state = ",state);
				return state1;
			}
			break;
			//or using ...(spread operator)
			/*return {
				...state,
				name : action.payload
			}*/
		
		default : 
			return state;
			break;
	}
}