import { Tooltiped } from "@src/App/shared/modules/Materialize/components/Tooltiped";
import { translate } from "@src/App/shared/modules/Translation/translate";
import * as React from "react";

export function RegisterForm(props: unknown): JSX.Element {
  const emailFieldRef = React.createRef<HTMLInputElement>();
  const passwordFieldRef = React.createRef<HTMLInputElement>();

  return (
    <form>
      <EmailField inputRef={emailFieldRef} />
      <PasswordField inputRef={passwordFieldRef} />
      <div className="row">
        <button className="btn">Register</button>
      </div>
    </form>
  );
}

function EmailField(props: { inputRef: React.RefObject<HTMLInputElement> }): JSX.Element {
  const emailErrorsRef = React.createRef<HTMLSpanElement>();
  const emailFieldRef = props.inputRef;

  const validate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(value);
    if (value == "") {
      emailFieldRef.current?.setAttribute("class", "");
      emailFieldRef.current?.removeAttribute("data-error");
      return;
    }
    if (isValid) {
      emailFieldRef.current?.setAttribute("class", "valid");
    } else {
      emailErrorsRef.current?.setAttribute(
        "data-error",
        translate("Email address doesn't match exmaple@domain.abc format."),
      );
      emailFieldRef.current?.setAttribute("class", "invalid");
    }
  };

  return (
    <div className="row">
      <label htmlFor="email">{translate("E-mail")}</label>
      <Tooltiped
        triggerOn="focus"
        message={translate("Write yours e-mail address. You will use it later for login.")}
      >
        <input
          name="email"
          type="email"
          ref={emailFieldRef}
          onKeyUp={validate}
        />
      </Tooltiped>
      <span className="helper-text" ref={emailErrorsRef}></span>
    </div>
  );
}

function PasswordField(props: { inputRef: React.RefObject<HTMLInputElement> }): JSX.Element {
  const passwordFieldRef = props.inputRef;
  const passwordFieldErrorsRef = React.createRef<HTMLSpanElement>();

  const passwordRepeatFieldRef = React.createRef<HTMLInputElement>();
  const passwordRepeatFieldErrorsRef = React.createRef<HTMLSpanElement>();

  const validatePasswordField = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const passwordValue = passwordFieldRef.current?.value || "";
    const shouldBeValidated = passwordValue != "";
    if (!shouldBeValidated) {
      passwordFieldErrorsRef.current?.removeAttribute("data-error");
      passwordFieldErrorsRef.current?.setAttribute("class", "");
      return;
    }
    if (passwordValue.length < 8) {
      passwordFieldErrorsRef.current?.setAttribute(
        "data-error",
        translate("Password is shorter than 8 characters"),
      );
      passwordFieldRef.current?.setAttribute("class", "invalid");
    } else {
      passwordFieldRef.current?.setAttribute("class", "valid");
    }
  };

  const validatePasswordRepeatField = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const passwordValue = passwordFieldRef.current?.value;
    const passwordRepeatValue = passwordRepeatFieldRef.current?.value;
    const shouldBeValidated = passwordRepeatValue != "";
    if (!shouldBeValidated) {
      passwordRepeatFieldErrorsRef.current?.removeAttribute("data-error");
      passwordRepeatFieldErrorsRef.current?.setAttribute("class", "");
      return;
    }
    if (passwordValue != passwordRepeatValue) {
      passwordRepeatFieldErrorsRef.current?.setAttribute(
        "data-error",
        translate("Repeated password doesn't match original one"),
      );
      passwordRepeatFieldRef.current?.setAttribute("class", "invalid");
    } else {
      passwordRepeatFieldRef.current?.setAttribute("class", "valid");
    }
  };

  return (
    <>
      <div className="row">
        <label htmlFor="password">{translate("Password")}</label>
        <Tooltiped
          triggerOn="focus"
          message={translate("Password must be at least 8 characters long.")}
        >
          <input
            name="password"
            type="password"
            ref={passwordFieldRef}
            onKeyUp={validatePasswordField}
          />
        </Tooltiped>
        <span className="helper-text" ref={passwordFieldErrorsRef}></span>
      </div>

      <div className="row">
        <label htmlFor="password_repeat">{translate("Repeat Password")}</label>
        <Tooltiped triggerOn="focus" message={translate("Repeat your password")}>
          <input
            name="password_repeat"
            type="password"
            ref={passwordRepeatFieldRef}
            onKeyUp={validatePasswordRepeatField}
          />
        </Tooltiped>
        <span className="helper-text" ref={passwordRepeatFieldErrorsRef}></span>
      </div>
    </>
  );
}
