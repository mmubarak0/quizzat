import Button from "../../components/button";
import Input from "../../components/input";

function Login() {
  return (
    <>
      <h1>this is Login page</h1>
      <div>
        {/* action attribute should be assigned to valid URL */}
        <form action="#" method="POST" className="form">
          <label htmlFor="username"> username</label>
          <Input
            type="text"
            name="username"
            placeholder="username or email"
            id="username"
          />

          <label htmlFor="password">password</label>
          <Input
            type="password"
            name="password"
            placeholder="enter password"
            id="password"
          />
          <Button type="submit" class="button" />
        </form>

        <a href="#">forget password?</a>
        <span>or sign in with</span>
        <a href="#">google login</a>

        <button>create new account</button>
      </div>
    </>
  );
}

export default Login;
