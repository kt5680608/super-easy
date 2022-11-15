import { useState, useContext } from "react";

import { AuthInfoContainer, MainContainer } from "./style";

import { auth } from "../../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Popover } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function AuthPage() {
  const [type, setType] = useState("signIn");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault(e);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsSignUp(true);
      })
      .then(() => {
        setType("signIn");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("Wrong email type");
        } else if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        }
      });
  };
  return (
    <MainContainer>
      <AuthInfoContainer>
        <h1>
          super easy<span>.</span>
        </h1>
        {type === "signIn" ? (
          <form>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            {error !== "" && <>{error}</>}
            <button type="submit" onClick={handleSignIn}>
              sign in
            </button>
            <a
              onClick={() => {
                setType("signUp");
                setEmail("");
                setPassword("");
              }}
            >
              Don't have an account yet?
            </a>
          </form>
        ) : (
          <form>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error !== "" && <>{error}</>}
            <button onClick={handleSignUp}>sign up</button>
            <a
              onClick={() => {
                setType("signIn");
                setEmail("");
                setPassword("");
              }}
            >
              Already have an account?
            </a>
          </form>
        )}
      </AuthInfoContainer>
      {isSignUp && <Popover type="auth" />}
    </MainContainer>
  );
}

export default AuthPage;
