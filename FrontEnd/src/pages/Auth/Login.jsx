import React from 'react';
import AuthLayout from '@/Components/Layout/AuthLayout';
import { useNavigate } from 'react-router-dom';
import Input from '@/Components/Inputs/input';
import { Link } from 'react-router-dom';
import { validateEmail } from '@/Utils/helper';



const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  

  const navigate = useNavigate();

  //handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    if(!validateEmail(email)){
      setError('Please enter a valid email address');
      return;
    }
    if(!password){
      setError('Password must be at least 6 characters long');
      return;
    }

    setError("");
  }
    return (
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">
                    Please enter your details to log in
                </p>

                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                  <Input 
                    value={email} 
                    label="Email"
                      placeholder="Enter your email"
                    onChange={({target}) => setEmail(target.value)}
                />
                <Input 
                    value={password}
                    className="input-box"
                    label="Password"
                    placeholder="Enter your password"
                    onChange={({target}) => setPassword(target.value)}
                />
                <button className='btn-primary' type="submit">Login</button>
                <p className='text-[13px] text-slate-800 mt-3'>
                  Don't have an account? <Link className='text-primary cursor-pointer' to="/signup">Register</Link>
                </p>
                </form>
            </div>
        </AuthLayout> 
    )
}

export default Login;