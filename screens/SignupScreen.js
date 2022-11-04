import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";

function SignupScreen() {
  const signupHandler = ({ email, password }) => {
    createUser(email, password);
  };

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
