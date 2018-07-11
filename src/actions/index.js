export function selectBook(book){
   //select is an ActionCreator, it needs to return an action, an option with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}