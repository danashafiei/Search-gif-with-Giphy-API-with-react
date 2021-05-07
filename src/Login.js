//programme : Dana shafiei
import React , {Component} from 'react';


class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

        handleValidation(){

            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "لطفا ایمیل را وارد کنید!";
            }
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "لطفا رمز عبور را وارد کنید!";
            }
            this.setState({errors: errors});
            return formIsValid;
        }
        contactSubmit (e){
            e.preventDefault();
            if (this.handleValidation()){

                window.location = 'Home';

            }else{
                alert("اشکالاتی در فرم وجود دارد!");
            }
        }
        handleChange (field, e){
            let fields = this.state.fields;
            fields[field] = e.target.value;
            this.setState({fields});

        }




    render(){


        return(
            <form onSubmit={this.contactSubmit.bind(this)}>
                <h3>ورود به حساب</h3>

                <div className="form-group">
                    <input
                        type="email"
                        className="form-control text-center"
                        placeholder="ایمیل"
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]}


                    />
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>

                </div><br/>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control text-center"
                        placeholder="رمز عبور"
                        onChange={this.handleChange.bind(this, "password")}
                        value={this.state.fields["password"]}


                    />
                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                </div><br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">ورود</button>
                <p className="forgot-password text-right">
                    فراموشی <a href="#">رمز عبور ؟</a>
                </p><br/>
                <p className="forgot-password text-lg-center">
                    حساب کاربری ندارید ؟ <a href="/sign-up">ثبت نام </a>
                </p>
            </form>

        );
    }

}
export default Login;