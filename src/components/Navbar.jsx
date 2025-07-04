import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Link } from 'react-router-dom';
import { LogOut, MessageCircle, Settings, User, PlusCircle } from 'lucide-react';

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const isOrganizer = authUser?.organizer === "organizer";
  
  return (
    <header className='border-b border-base-300 w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80'>
      <div className='container mx-auto px-4 h-16'>
        <div className='flex items-center justify-between h-full'>
          <div className='flex items-center gap-8'>
            <Link to="/" className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
              <div className='size-9 rounded-lg bg-primary/10 flex items-center justify-center'>
                <MessageCircle className='w-5 h-5 text-primary'/>
              </div>
              <h1 className='text-lg font-bold'>Hackon</h1>
            </Link>
          </div>
          
            <div className='gap-2 hover:scale-105'><Link to={'/'}>Chat</Link></div>
          <div className='flex items-center gap-2'>
            {authUser && (
              <>
                <Link to={'/settings'} className='btn btn-sm gap-2 transition-colors'>
                <Settings className='size-4'/>
                <span className='hidden xs:inline'>Settings</span>
              </Link>
                <Link to={'/profile'} className='btn btn-sm gap-2'>
                  <User className='size-5'/>
                  <span className='hidden xs:inline'>Profile</span>
                </Link>
                <button className='flex gap-2 items-center' onClick={() => logout()}>
                  <LogOut className='size-5 '/>
                  <span className='hidden xs:inline'>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar