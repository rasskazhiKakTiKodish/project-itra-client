import React, {useState, useContext} from "react";
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";



import './AuthPage.scss'



const AuthPage = () => {

    const history = useHistory()
  
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    

    const {login} = useContext (AuthContext)
    

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form)
    }

    const registerHandler = async () => {
        try{
            await axios.post('https://projectitra1.herokuapp.com/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
                
            })
            history.push('/')
        }catch(error){
            console.log(error)
        }
    }

    const loginHandler = async () => {
        try{
            await axios.post('https://projectitra1.herokuapp.com/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                login(response.data.token, response.data.userId)
            })
           
        }catch(error){
            console.log(error)
        }
    }
    return (
        <Router>
            <Switch>
                <React.Fragment>
                <div className="container">
                <div className="auth-page">
                 <div className="col s6 offset-s3">
            <Route path="/login">
              <h1>Вход в аккаунт</h1>

                <div className="card brown darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                 placeholder="Введите email" 
                                 id="email" 
                                 type="email"
                                 name="email"
                                 className="yellow-input"
                                 onChange={changeHandler}
                                />
                                    <label htmlFor="email">email</label>
                            </div>

                            
                            <div className="input-field">
                                <input
                                 placeholder="Введите пароль" 
                                 id="password" 
                                 type="password"
                                 name="password"
                                 className="yellow-input"
                                 onChange={changeHandler}
                                />
                                    <label htmlFor="пароль">пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                         className="btn yellow darken-4" 
                         style={{marginRight: 10}}
                    
                         onClick={loginHandler}
                         >
                            Войти
                        </button>
                        <Link to="/registration" className="btn-outline btn-reg">нет акаунта?</Link>
                 
                    </div>
                    </div>
               
        </Route>

        <Route path="/registration">
        <h3>Создать аккаунт</h3>

<div className="card brown darken-1">
    <div className="card-content white-text">
        <span className="card-title">Регистрация</span>
        <div>
            <div className="input-field">
                <input
                 placeholder="Введите email" 
                 id="email" 
                 type="email"
                 name="email"
                 className="yellow-input"
                 onChange={changeHandler}
                />
                    <label htmlFor="email">email</label>
            </div>

            
            <div className="input-field">
                <input
                 placeholder="Введите пароль" 
                 id="password" 
                 type="password"
                 name="password"
                 className="yellow-input"
                 onChange={changeHandler}
                />
                    <label htmlFor="пароль">пароль</label>
            </div>

        </div>
    </div>
    <div className="card-action">
        <button
         className="btn yellow darken-4" 
         style={{marginRight: 10}}
        
         onClick={registerHandler}
         >
            Создать аккаунт
        </button>
        <Link to="/login" className="btn-outline btn-reg">уже есть акаунт?</Link>
 
    </div>
    </div>

        </Route>
        </div>
        </div>
        </div>
        </React.Fragment>
            </Switch>
        </Router>

    )
}

export default AuthPage