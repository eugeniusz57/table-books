import { useLocation, useParams } from 'react-router-dom';
import { BreadCrumbContainer, LinkBreadCrumb } from './Breadcrumb.styled';
import { selectAuthor } from 'helpers/SelectAutchor';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const { bookId, authorName } = useParams();

  const arpath = selectAuthor(pathname);

  return (
    <BreadCrumbContainer>
      {arpath.length > 0 &&
        arpath.map(item => (
          <LinkBreadCrumb
            key={item}
            to={`${item === 'Home' ? '/' : `${bookId}/${authorName}`}`}
          >
            {item}
          </LinkBreadCrumb>
        ))}
    </BreadCrumbContainer>
  );
};

export default Breadcrumb;
