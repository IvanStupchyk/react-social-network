import React from "react";

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input placeholder={'login'}/>
                </div>
                <div>
                    <input placeholder={'password'}/>
                </div>
                <div>
                    <input type={'checkbox'}/>
                    Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={'login'}/>
            </div>
            <div>
                <input placeholder={'password'}/>
            </div>
            <div>
                <input type={'checkbox'}/>
                Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}