import ColorSchemeToggler from './ColorSchemeToggler';
import DropdownMenu from './DropdownMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <nav className='bg-primary text-neutral-content bg-opacity-80 flex justify-center z-50'>
      <div className='navbar lg:w-4/5'>
        <div className='flex-none'></div>
        <DropdownMenu>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'btn-primary' : 'btn-ghost'}>
              Home
            </a>
          </Link>
          <Link href='/sign-up'>
            <a
              className={`btn ${
                router.pathname == '/sign-up' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Sign Up
            </a>
          </Link>
          <Link href='/sign-in'>
            <a
              className={`btn ${
                router.pathname == '/sign-in' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Sign In
            </a>
          </Link>
        </DropdownMenu>
        <div className='hidden lg:flex gap-5'>
          <Link href='/'>
            <a
              className={`btn ${
                router.pathname == '/' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Home
            </a>
          </Link>
          <Link href='/sign-up'>
            <a
              className={`btn ${
                router.pathname == '/sign-up' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Sign Up
            </a>
          </Link>
          <Link href='/sign-in'>
            <a
              className={`btn ${
                router.pathname == '/sign-in' ? 'btn-primary' : 'btn-ghost'
              }`}
            >
              Sign In
            </a>
          </Link>
        </div>
        <div className='ml-auto'>
          <ColorSchemeToggler />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
