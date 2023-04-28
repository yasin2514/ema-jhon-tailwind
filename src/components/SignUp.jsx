import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        setError('');
        setSuccess('');
        // pass validation
        if (password !== confirmPassword) {
            setError('Your Password did not match');
            return;
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess('User Created Successfully')
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className='border rounded-md max-w-xl mx-auto px-8 py-10'>
            <h2 className='text-4xl font-semibold mb-4 text-center'>SignUp</h2>
            <form className='text-xl my-5' onSubmit={handleSignUp}>
                <div className='my-2'>
                    <label className='font-medium' htmlFor="email">Email</label>
                    <input className='border rounded-md w-full p-2 mt-1' type="email" name="email" id="email" required placeholder='email' />
                </div>
                <div className='my-2'>
                    <label className='font-medium' htmlFor="password">Password</label>
                    <input className='border rounded-md w-full p-2 mt-1' type="password" name="password" id="password" required placeholder='password' />
                </div>
                <div className='my-2'>
                    <label className='font-medium' htmlFor="confirm-password">Confirm Password</label>
                    <input className='border rounded-md w-full p-2 mt-1' type="password" name="confirmPassword" id="confirm-password" required placeholder='confirm password' />
                </div>
                <div className='mt-10'>
                    <input className='bg-orange-600  text-white rounded-md p-2 hover:bg-orange-700 w-full ' type="submit" value="SignUp" />
                </div>
            </form>
            <div>
                <p><small>Already have an account?Please <Link className='hover:underline' to={'/login'}>Login</Link></small></p>
                <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
            </div>

        </div>
    );
};

export default SignUp;