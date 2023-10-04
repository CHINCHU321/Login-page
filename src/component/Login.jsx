import './Login.css';

function Login() {
  return (
    <div className="App">
        <div className="logo-box">
        <svg viewBox="0 0 24 24" aria-label="X" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        <h2>Sign in to X</h2>
        <button>
        <img src="./google.png" alt="google" />
        Sign in with Google
        </button>
        <button>
        <img src="./apple.png" alt="apple" />
        Sign in with Apple
         </button>
        <hr></hr> 
        <span>Or</span>
        <form>
        <input type="text" placeholder="Phone, email address or username" />
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
