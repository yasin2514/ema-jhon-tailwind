import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/images/Logo.svg'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from '../providers/AuthProviders';
const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error.message))
    }
    return (
        <nav className='bg-[#1C2B35] '>
            <div className='flex justify-between items-center px-3 lg:px-0 py-5 text-xl max-w-screen-xl mx-auto'>
                <NavLink to={'/'}>
                    <img src={logo} alt="" />
                </NavLink>
                <div className='text-white '>
                    <span className='lg:hidden' onClick={() => setOpen(!open)}>
                        {
                            open ? <XMarkIcon className='w-9'></XMarkIcon> : <Bars3Icon className='w-9'></Bars3Icon>
                        }
                    </span>
                    <span className={`flex lg:gap-10 
                 absolute lg:static lg:m-0  ${open ? 'inset-x-0 flex-col bg-[#1C2B35] p-4 gap-1' : '-mt-40'}`}>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#FF9900]' : ''} to={'/'}>Shop</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#FF9900]' : ''} to={'/order'}>Order</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#FF9900]' : ''} to={'/inventory'}>Inventory</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#FF9900]' : ''} to={'/login'}>Login</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#FF9900]' : ''} to={'/signup'}>SignUp</NavLink>
                        {
                            user && <span>Welcome {user.email} <button className='border text-xs rounded-md p-2' onClick={handleLogout}>SignOut</button></span>
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;