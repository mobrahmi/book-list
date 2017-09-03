import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  
  books: BooksReducer  //mapping on our books reducer

});

export default rootReducer;
