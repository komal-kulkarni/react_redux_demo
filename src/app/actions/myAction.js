import {myReducer} from "../reducers/myReducer";

export function myAction(searchInput) {
	return {
    	type: 'SEARCH',
    	payload : searchInput
  	};
}
