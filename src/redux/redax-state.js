import {legacy_createStore as createStore,combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { footerReduser } from './footer-reducer';
import { headerReduser } from './header.reducer';
import { pagesReduser } from './pages-reducer';

const  rootReducer = combineReducers({
   footer:footerReduser,
   header:headerReduser,
   pages:pagesReduser,
})

const store = createStore(rootReducer,composeWithDevTools());

export {store}