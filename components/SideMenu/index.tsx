import React from 'react';
import { FiInstagram, FiRss } from 'react-icons/fi';
import { FaSpotify, FaHeadphonesAlt } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Container, Social, Title, SocialLink } from './style';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Title>Siga-nos nas redes sociais!</Title>
      <Social>
        <SocialLink href="https://open.spotify.com/show/5gRMrAWO78ElIVtHS1ecSD">
          <FaSpotify size={32} />
        </SocialLink>
        <SocialLink href="https://anchor.fm/castinerante">
          <FaHeadphonesAlt size={32} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/castinerante/">
          <FiInstagram size={32} />
        </SocialLink>
        <SocialLink href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmZiNWYzMC9wb2RjYXN0L3Jzcw%3D%3D">
          <AiOutlineGoogle size={32} />
        </SocialLink>
        <SocialLink href="https://anchor.fm/s/1ffb5f30/podcast/rss">
          <FiRss size={32} />
        </SocialLink>
      </Social>
    </Container>
  );
};

export default SideMenu;
