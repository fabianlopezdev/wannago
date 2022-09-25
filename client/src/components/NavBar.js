import { LogInButton, SignUpButton, LogoutButton, HomeButton } from "./NavBarButtons";


const NavBar = () => {
  return (
    <nav className=''>
      <div>
        <LogInButton />
        <HomeButton />
        {/* <SignInButton />
        <SignInButton /> */}
      </div>
    </nav>
  );
};

export default NavBar;




