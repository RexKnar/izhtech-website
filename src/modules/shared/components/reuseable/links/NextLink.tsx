// import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;

  return (
      <a href={href} className={className}>{title}</a>
    
  );
};

export default NextLink;
