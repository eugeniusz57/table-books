import { Section } from 'components/Section/Section.styled';
import NotFound from '../../images/Not_Found_Page.jpg';
import { LinkGoHome, NotFoundImg } from './NotFound.styled';

const Not_Found = () => {
  return (
    <Section>
      <LinkGoHome to={'/'}>{'< Go Home'}</LinkGoHome>
      <NotFoundImg src={NotFound} alt="Not Found" />
    </Section>
  );
};

export default Not_Found;
