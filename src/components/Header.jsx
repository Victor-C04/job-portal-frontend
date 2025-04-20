import { useState } from 'react';
import { Container, Group, Button, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal'; // adjust path as needed
import CreateJob from '../pages/CreateJob'; // adjust path if different


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
          <svg className="header-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#6C5CE7"/>
            <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#8B7CFF"/>
          </svg>
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
