const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages : [
      {id: 1 , message: 'Hi'},
      {id: 2 , message: 'How are you it-kamasutra'},
      {id: 3 , message: 'Yo'},
      {id: 4 , message: 'Yo'},
      {id: 5 , message: 'Yo'},
      {id: 6 , message: 'Yo'}
    ],
    dialogs : [
      {id: 1 , name: 'Dima'},
      {id: 2 , name: 'Vlad'},
      {id: 3 , name: 'Sergo'},
      {id: 4 , name: 'Sasha'},
      {id: 5 , name: 'Igor'},
      {id: 6 , name: 'Valery'}
  ]
};

const dialogsReducer = (state = initialState, action) => {
  
    switch(action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageText;
      return {...state,
        messages: [...state.messages, {id: 7, message: body}]
      };
    default:
    return state;
}
}


export const sendMessageCreator = (newMessageText) => ({type:SEND_MESSAGE, newMessageText});

export default dialogsReducer;