import React from 'react';
import s from "./Login.module.css"
import style from "../../Components/common/FormsControls/FormsControls.module.css"
import { reduxForm, Field } from 'redux-form';
import { NavLink, Redirect } from 'react-router-dom';
import LoginFoto from '../../img/login.png';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div className={s.wrapper}>
        <div className={s.container}>
        <img src= {LoginFoto} alt={""} />
        </div>
        <form className={s.signin} onSubmit={handleSubmit}>
            <div className={s.dws_input}><Field className={s.user} placeholder={"email"} name={"email"} component={Input} validate={required}/></div>
            <div className={s.dws_input}><Field className={s.pass} placeholder={"password"} name={"password"} type={"password"} component={Input} validate={required}/></div>
            <span className={s.dws_checkbox}><Field type={"checkbox"} name={"rememberMe"} component={Input} />Remember me</span>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            } 
            <div><button className={s.dws_submit}>Submit</button></div>
            <p>forgot your password? <NavLink to="#">click here</NavLink></p>
        </form>
    </div>)
    }

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);