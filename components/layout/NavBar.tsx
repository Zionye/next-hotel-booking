'use client';
import { UserButton } from '@clerk/nextjs';

const NavBar = () => {
  return (<div>
    {/* <UserButton afterSignOutUrl="/" /> */}
    <UserButton />
  </div>);
}
 
export default NavBar;
