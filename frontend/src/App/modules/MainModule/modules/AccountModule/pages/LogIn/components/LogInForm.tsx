import * as React from "react";
import UserService from "@src/App/modules/MainModule/modules/AccountModule/services/UserService/UserService";


function LogInForm(props: {successCallback: () => void}):JSX.Element {
  const emailFieldRef: React.Ref<HTMLInputElement> = React.createRef();
  const passwordFieldRef: React.Ref<HTMLInputElement> = React.createRef();
  const handleSubmit = () => {
    UserService.logIn({
      email: emailFieldRef.current?.value || "",
      password: passwordFieldRef.current?.value  || ""
    }).then(() => props.successCallback());
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="example@domain.com" id="email" type="email" className="validate" ref={emailFieldRef}/>
          <label htmlFor="email" className="active">Email Address</label>
        </div>
        <div className="input-field col s12">
          <input placeholder="••••••••••" id="password" type="password" className="validate" ref={emailFieldRef} />
          <label htmlFor="first_name" className="active">Password</label>
        </div>
      </div>
      <button className={`btn waves-effect waves-light`} type="submit" name="action">Log in
        <i className={`material-icons right`}>send</i>
      </button>
    </form>
  );
}

export default LogInForm;
