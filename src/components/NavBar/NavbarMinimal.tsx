import { Center, Tooltip, Stack, rem, UnstyledButton } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
} from '@tabler/icons-react';
import classes from './NavbarMinimal.module.css';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean
  to: string;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick, to }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <NavLink to={to}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          <span>{label}</span>
        </UnstyledButton>
      </NavLink>
    </Tooltip>
  );
}

const sideBarComponent = [
  { icon: IconHome2, label: 'Home', path: '' },
  { icon: IconGauge, label: 'Create Workout', path: '/create-workout' },
  { icon: IconDeviceDesktopAnalytics, label: 'Current Workout', path: '/current-workout' }
];

const NavbarMinimal = () => {
  const [active, setActive] = useState(0)

  const links = sideBarComponent.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      to={link.path}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <IconHome2 type="mark" size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}

export default NavbarMinimal