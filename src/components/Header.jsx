import { useState } from 'react';
import { Container, Group, Button, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal'; // adjust path as needed
import CreateJob from '../pages/CreateJob'; // adjust path if different
import './header.css'


const links = [
  { link: '/', label: 'Home' },
  { link: '/find-jobs', label: 'Find Jobs' },
  { link: '/find-talents', label: 'Find Talents' },
  { link: '/about', label: 'About us' },
  { link: '/testimonials', label: 'Testimonials' },
];

export function HeaderResponsive() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [showModal, setShowModal] = useState(false);


  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={`header-link ${active === link.link ? 'header-link-active' : ''}`}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="header-container" style={{ height: 60, marginBottom: 20 }}>
      <Container className="header-inner">
        <Group position="apart" className='header-inner'>
          <img className='logo' src="https://media.licdn.com/dms/image/v2/D560BAQHpPblOaplcOQ/company-logo_200_200/company-logo_200_200/0/1694017343509/cybermind_works_logo?e=2147483647&v=beta&t=N13ljMg1CHgxKadTUGz5b35KPUjx9qKRVed2giPMM00" alt="" />
          <Group spacing={5} className="header-links">
            {items}
          </Group>
        </Group>

        <Burger opened={opened} onClick={toggle} className="header-burger" size="sm" />

          <Button className="create-button" onClick={() => setShowModal(true)}  >
            Create Jobs
          </Button>
      </Container>
      {showModal && (
    <Modal onClose={() => setShowModal(false)}>
      <CreateJob onClose={() => setShowModal(false)} />
    </Modal>
  )}
    </div>
  );
}

export default HeaderResponsive;
