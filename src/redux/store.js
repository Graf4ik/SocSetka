import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
_state : {
    profilePage : {
    posts: [
        {id: 1, message: "Hi, how are  you?", likes: 5},
        {id: 2, message: "It\'s my first post", likes: 8},
      ],
    newPostText: 'GRAF4ik'
},
    dialogsPage: {
      messages : [
        {id: 1 , message: 'Hi'},
        {id: 2 , message: 'How are you it-kamasutra'},
        {id: 3 , message: 'Yo'},
        {id: 4 , message: 'Yo'},
        {id: 5 , message: 'Yo'},
        {id: 6 , message: 'Yo'}
      ],
      dialogs : [
        {id: 1 , name: 'Dima', imgSrc: require('../img/2.jpg')},
        {id: 2 , name: 'Vlad'},
        {id: 3 , name: 'Sergo'},
        {id: 4 , name: 'Sasha'},
        {id: 5 , name: 'Igor'},
        {id: 6 , name: 'Valery'}
    ],
    newMessageText: ''
  },
    sidebar: {
      friends: [
        {id:1, name: 'Dima'},
        {id:2, name: 'Vlad'},
        {id:3, name: 'Sergo'}
      ]
    }
},
_callSubscriber() {
  console.log('State changed');
},

getState() {
  return this._state;
},
subscribe(observer) {
  this._callSubscriber = observer; //observer //publisher-subscriber
},


dispatch(action) { // type: {''}

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
this._state.sidebar = sidebarReducer(this._state.sidebar, action);

this._callSubscriber(this._state);
}
}


export default store;