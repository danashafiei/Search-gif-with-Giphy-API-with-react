//Programmer : Dana Shafiei
import React , {Component} from 'react';

class SignUp extends Component{
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "لطفا نام را وارد کنید!";
        }
        if(!fields["lastName"]){
            formIsValid = false;
            errors["lastName"] = "لطفا نام خانوادگی را وارد کنید!";
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "لطفا ایمیل را وارد کنید!";
        }
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "لطفا رمز عبور را وارد کنید!";
        }
        if(!fields["cPassword"]){
            formIsValid = false;
            errors["cPassword"] = "لطفا دوباره رمز عبور را وارد کنید !";
        }
        if (typeof fields["cPassword"] !== "undefined"){
            if (fields["cPassword"] !== fields["password"]){
                formIsValid = false;
                errors["cPassword"] = "تکرار رمز عبور با رمز عبور یکسان نیست !";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    contactSubmit (e){
        e.preventDefault();
        if (this.handleValidation()){

            alert("ثبت نام با موفقیت انجام شد، به حساب کاربری خود وارد شوید.");

        }else{
            alert("اشکالاتی در فرم وجود دارد!");
        }
    }
    handleChange (field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});

    }

    render() {
        return (
            <form onSubmit={this.contactSubmit.bind(this)}>
                <h3>ثبت نام</h3>

                <div className="form-group">

                    <input type="text" className="form-control text-center" placeholder="نام"
                           onChange={this.handleChange.bind(this, "name")}
                           value={this.state.fields["name"]}
                    />
                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                </div><br/>

                <div className="form-group">

                    <input type="text" className="form-control text-center" placeholder="نام خانوادگی"
                           onChange={this.handleChange.bind(this, "lastName")}
                           value={this.state.fields["lastName"]}/>
                    <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                </div><br/>

                <div className="form-group">

                    <input type="email" className="form-control text-center" placeholder="ایمیل"
                           onChange={this.handleChange.bind(this, "email")}
                           value={this.state.fields["email"]}/>
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                </div><br/>

                <div className="form-group">

                    <input type="password" className="form-control text-center" placeholder="رمز عبور"
                           onChange={this.handleChange.bind(this, "password")}
                           value={this.state.fields["password"]}/>
                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                </div><br/>
                <div className="form-group">

                    <input type="password" className="form-control text-center" placeholder="تکرار رمز عبور"
                           onChange={this.handleChange.bind(this, "cPassword")}
                           value={this.state.fields["cPassword"]}/>
                    <span style={{color: "red"}}>{this.state.errors["cPassword"]}</span>
                </div><br/>

                <button type="submit" className="btn btn-dark btn-lg btn-block">ثبت نام</button>
                <p className="forgot-password text-center">
                    حساب کاربری دارید ؟<a href="/sign-in"> ورود</a>
                </p>
            </form>
        );
    }


}
export default SignUp;