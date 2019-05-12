import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

export default class HomePage extends React.PureComponent {

    handleLogin = () => {
        console.log("asdasdfasdf");
        return <Link to="/dashboard"/>;
    }

  render() {
    return (
        // TODO added login-page id and moved classes that could be tailwind in className. also added flex and removed container-fluid needless wrapper
        <div id="login-page" className="bg-white bg-center bg-cover bg-no-repeat flex justify-center items-center min-h-screen"> {/*container mx-auto px-4 */}
            <div className="login-body flex-intial justify-center">
                <div className="logo-img m-auto bg-cover"></div>
                <div className="shadow-lg">
                    <div class="relative">
                        <label for="email" className="absolute label">
                            Email
                        </label>                        
                        <input name="email" className="input bg-white rounded-tl-lg rounded-tr-lg border-l border-r border-t border-b" type="text" />
                    </div>
                    <div class="relative">
                        <label for="email" className="absolute label">
                            Password
                        </label> 
                        <input className="input rounded-bl-lg bg-white rounded-br-lg border-l border-r border-b" type="password" />
                    </div>
                </div>
                <div className="flex justify-between links">
                    <div>
                        <input className="inp-cbx check-display" id = "cbx" type="checkbox"></input>
                        <label className="cbx" for="cbx">
                            <span>
                                <svg viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                            </span>
                            <span><b>Remember me</b></span>
                        </label>
                    </div>
                    <p className="mb-0"><b>Forgot password?</b></p>
                </div>
                <div className="flex justify-center">
                    {/* <input type="button" value="Login" className="login-button font-sans" onClick={this.handleLogin}/> */}
                    <Link to="/dashboard/Overview">
                        <button className="button-login cursor:pointer bg-red text-white py-2 px-20 rounded-lg font-thin">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}