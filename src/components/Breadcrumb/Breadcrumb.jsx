import { useLocation } from 'react-router-dom';
import { BreadCrumbContainer, LinkBreadCrumb } from './Breadcrumb.styled';
import { selectAuthor } from 'helpers/SelectAutchor';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  //   let currentLink = '';
  //   const crumbs = pathname.split('/').map(crumb => {
  //     currentLink += `${crumb}`;
  //     return (
  //       <LinkBreadCrumb key={crumb} to={crumb}>
  //         {crumb}
  //       </LinkBreadCrumb>
  //     );
  //   });
  const path = sentence => {
    if (sentence === '/') {
      return ['Home'];
    }
    const regex = /[a-zA-Z]/g;
    const split = sentence.split('/');
    if (split[2]) {
      const letters = split[2].match(regex);
      const selectedLetters = letters ? letters.join('') : '';
      return ['Home', selectedLetters];
    }

    return sentence;
  };
  const arpath = path(pathname);
  console.log(path(pathname));
  console.log(arpath.length > 0);
  //   console.log('crumbs', crumbs);
  return (
    <BreadCrumbContainer>
      {arpath.length > 0 &&
        arpath.map(item => (
          <LinkBreadCrumb key={item} to={`${item === 'Home' ? '/' : item}`}>
            {item}
          </LinkBreadCrumb>
        ))}
    </BreadCrumbContainer>
  );
};

export default Breadcrumb;
