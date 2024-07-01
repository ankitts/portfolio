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
        <NavbarItem>
          <Link color="foreground"  className="text-inherit" href="#">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" className="text-inherit" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-inherit" href="#">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-inherit" href="#">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-inherit" href="#">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
      </NavbarContent>
    </Navbar>
  );
}
