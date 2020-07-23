import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DiaologItem/DialogItem'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators'

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    
    let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
    }    
        return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
            <form className={s.dialogs_form} onSubmit={props.handleSubmit}>
            <div><Field placeholder='Enter your message' name="newMessageText" component={Textarea} 
                validate={[required, maxLength50]}/></div>
            <div><button>Add message</button></div>
            </form>)
    }

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;

