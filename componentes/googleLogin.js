"use client";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const router = useRouter();

  const clientId =
    "883549109807-aj94dlqfppdqtq6f99r4ivjvbnrnoq24.apps.googleusercontent.com";

  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);

    console.log(decoded);
    if (decoded.email_verified) {
      console.log(decoded);
      router.push("/membros");
    }
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId="883549109807-aj94dlqfppdqtq6f99r4ivjvbnrnoq24.apps.googleusercontent.com">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login com Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        // type="standard"
        shape="pill"
        alignment="left"
        width={"400px"}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
