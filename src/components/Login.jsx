import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess("login Successfully");
                navigate(from, { relative: true });

            })
            .catch(error => setError(error.message))
    }
    return (
        <div className='border rounded-lg max-w-xl mx-auto px-8 py-10'>
            <h2 className='text-4xl font-medium mb-4 text-center'>Login</h2>
            <form className='text-xl my-5' onSubmit={handleLogin}>
                <div className='my-2'>
                    <label className='font-medium' htmlFor="email">Email</label>
                    <input className='border rounded-md w-full p-2 mt-1' type="email" name="email" id="email" required placeholder='email' />
                </div>
                <div className='my-2'>
                    <label className='font-medium' htmlFor="password">Password</label>
                    <input className='border rounded-md w-full p-2 mt-1' type={show ? "text" : "password"} name="password" id="password" required placeholder='password' />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ?
                                <span>hide password</span> :
                                <span>show password</span>
                        }
                    </small></p>
                </div>
                <div className='mt-10'>
                    <input className='bg-orange-600  text-white rounded-md p-2 hover:bg-orange-700 w-full ' type="submit" value="Login" />
                </div>
            </form>
            <div>
                <p><small>New to ema-jhon? <Link className='hover:underline' to={'/signup'}>Create a account</Link></small></p>
                <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
            </div>
        </div>
    );
};

export default Login;