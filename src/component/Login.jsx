import './Login.css';

function Login() {
  return (
    <div className="App">
        <div className="logo-box">
        <img src="./logo.png" alt="twitter" className="logo" />
        <h2>Sign in to Twitter</h2>
        <button>
        <img src="./google.png" alt="google" />
        Sign in with Google
        </button>
        <button>
        <img src="./apple.png" alt="apple" />
        sign in with Apple </button>
        <hr></hr> 
        <span>Or</span>
        <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
        <button>Forgot password?</button>
        <p>Don't have an account? <a>Sign up</a>
        </p>
        </div>
    </div>
  );
}

export default Login;
