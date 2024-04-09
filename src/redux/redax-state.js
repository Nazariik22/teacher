import {legacy_createStore as createStore,combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { footerReduser } from './footer-reducer';
import { headerReduser } from './header.reducer';

const  rootReducer = combineReducers({
   footer:footerReduser,
   header:headerReduser,
})

const store = createStore(rootReducer,composeWithDevTools());

export {store}