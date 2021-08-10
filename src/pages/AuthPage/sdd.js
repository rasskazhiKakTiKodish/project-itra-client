 <div className="container">
                <div className="auth-page">
                    <Route path="/login">
                    <h3>Авторизация</h3>
                    <form className="form form-login" onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                type="text" 
                                name="email"
                                className="validate"
                                
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                type="password" 
                                name="password"
                                className="validate"
                                
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button
                                className ="wawes-effect wawes-light btn btn blue"
                                onClick={loginHandler}
                            >
                                Войти
                            </button>

                            <Link to="/registration" className="btn-outline btn-reg">Нет акаунта?</Link>
                        </div>
                    </form>
                    </Route>

                    <Route path="/registration">
                        
                    <h3>Регистрация</h3>
                    <form className="form form-login" onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                type="text" 
                                name="email"
                                className="validate"
                                onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                type="password" 
                                name="password"
                                className="validate"
                                onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button
                                className ="wawes-effect wawes-light btn btn blue"
                                onClick={registerHandler}
                            >
                                Регистрация
                            </button>

                            <Link to="/login" className="btn-outline btn-reg">Уже есть акаунт?</Link>
                        </div>
                    </form>
                    </Route>
                </div>
            </div>