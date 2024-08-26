'use client';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import Container from "~/components/Container";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "~/components/ui/button";
import SearchInput from '~/components/SearchInput';
import { ModeToggle } from '~/components/theme-toggle';
import { NavMenu } from '~/components/layout/NavMenu';

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (<div className='sticky top-0 border border-b-primary/10 bg-secondary'>
    <Container>
      <div className='flex justify-between items-center'>
        <div 
          className='flex items-center gap-1 cursor-pointer' 
          onClick={()=>router.push("/")}>
            <Image alt="logo" src={"/logo.svg"} width={30} height={30}/>
            <div className='font-bold text-xl'>MHotel</div>
        </div>

        <SearchInput />

        <div className='flex items-center gap-3'>
          <div>
            <ModeToggle />
            <NavMenu />
          </div>

          <SignedIn>
            {/* <UserButton afterSignOutUrl="/" /> */}
            <UserButton />
          </SignedIn>

          {!userId && <>
            {/* <SignedOut>
              <SignInButton>
                <Button variant='outline' size='sm'>Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size='sm'>Sign Up</Button>
              </SignUpButton>
            </SignedOut> */}

            {/* <SignedOut> */}
              <Button onClick={()=>router.push("/sign-in")} variant='outline' size='sm'>Sign In</Button>
              <Button onClick={()=>router.push("/sign-up")} size='sm'>Sign Up</Button>
            {/* </SignedOut>  */}
          </>}
        </div>

      </div>
      
    </Container>
  </div>);
}
 
export default NavBar;
