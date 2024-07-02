import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export function Topbar() {
  return (
    <Navbar className="bg- border-b-1 border-midnight" height="48px">
      <NavbarBrand>
        <Link href="/home" className="font-bold text-inherit">Ankit Somani</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {/* <NavbarItem>
          <Link color="foreground"  className="text-inherit" href="#">
            Skills
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive>
          <Link href="/projects" className="text-inherit" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/experience" color="foreground" className="text-inherit">
            Experience
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" className="text-inherit" href="#">
            Education
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link  href="https://drive.google.com/file/d/1IFzEJAP6MVM_Tyv5c8H0JWr2qKbFvdJn/view" color="foreground" className="text-inherit">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
      </NavbarContent>
    </Navbar>
  );
}
