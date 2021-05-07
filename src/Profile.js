//Programmer : Dana Shafiei
import React, { Component } from "react";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({file: URL.createObjectURL(event.target.files[0])})
    }
    handleValidation (){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
   //check inputs
        if (!fields["image"]){
            formIsValid = false;
            errors["image"] = "لطفا یک عکس برای پروفایل انتخاب کنید!";
        }
        if (typeof fields["phoneNumber"] !== "undefined"){
            if (fields["phoneNumber"].length !== 11){
                formIsValid = false;
                errors["phoneNumber"] = "لطفا شماره تلفن را درست وارد کنید !";
            }
        }
        if (typeof fields["nCode"] !== "undefined"){
            if (fields["nCode"].length !== 10){
                formIsValid = false;
                errors["nCode"] = "کد ملی باید 10 رقم باشد !";
            }
        }
        if (!fields["yOfBirthday"]){
            formIsValid = false;
            errors["yOfBirthday"] = "لطفا سال تولد را وارد کنید!";
        }
        if (typeof fields["yOfBirthday"] !== "undefined"){
            if (fields["yOfBirthday"].length > 4){
                formIsValid = false;
                errors["yOfBirthday"] = "لطفا سال تولد را درست وارد کنید!";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    userProfileUpgrade (e){
        e.preventDefault();
        if (this.handleValidation()){
            alert("اطلاعات با موفقیت ثبت شد");
        }else {
            alert("لطفا اشکالات را برطرف کنید!");
        }
    }
    handleChange1 (field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});

    }
    render() {
        return(
          <form onSubmit={this.userProfileUpgrade.bind(this)}>
              <h3>تکمیل پروفایل</h3>

              <div className="form-group">
                  <label>تصویر پروفایل</label>
                  <input type="file" className="form-control" onChange={this.handleChange} value={this.state.fields["image"]}/>
                  <span style={{color: "red"}}>{this.state.errors["image"]}</span>

              </div>
              <div className="form-group">
                  <img className="img-1 rounded-circle" width="100" height="100" src={this.state.file}/>
              </div><br/>
              <div className="form-group">
                  <input type="number" className="form-control text-center" placeholder=" 0912 --- ----: شماره تلفن"
                         onChange={this.handleChange1.bind(this, "phoneNumber")}
                         value={this.state.fields["phoneNumber"]}/>
                  <span style={{color: "red"}}>{this.state.errors["phoneNumber"]}</span>

              </div><br/>
              <div className="form-group">
                  <input type="number" className="form-control text-center" placeholder="کد ملی"
                         onChange={this.handleChange1.bind(this, "nCode")}
                         value={this.state.fields["nCode"]}/>
                  <span style={{color: "red"}}>{this.state.errors["nCode"]}</span>

              </div><br/>
              <div className="form-group">
                  <input type="number" className="form-control text-center" placeholder="سال تولد"
                         onChange={this.handleChange1.bind(this, "yOfBirthday")}
                         value={this.state.fields["yOfBirthday"]}/>
                  <span style={{color: "red"}}>{this.state.errors["yOfBirthday"]}</span>
              </div><br/>
              <div className="form-group">
                  <input type="text" className="form-control text-center" placeholder="علایق"
                         onChange={this.handleChange1.bind(this, "interests")}
                         value={this.state.fields["interests"]}/>
                  <span style={{color: "red"}}>{this.state.errors["interests"]}</span>

              </div><br/>
              <button type="submit" className="btn btn-dark btn-lg btn-block">ثبت اطلاعات</button>
          </form>
        );
    }
}
export default Profile;