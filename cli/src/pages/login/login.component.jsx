import React from "react";
import { Grid } from "@material-ui/core";
import LoginForm from "../../components/forms/login_form/login_form.component";
import RegisterForm from "../../components/forms/register_form/register_form.component";

export default function LoginPage() {
  return (
    <div className="login_page">
      <h2>Signin or Signup :</h2>
      <br />
      <Grid container spacing={3}>
        <div className="login_form">
          <Grid item md={12}>
            <LoginForm />
          </Grid>
          <Grid item md={12}>
            <RegisterForm />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
