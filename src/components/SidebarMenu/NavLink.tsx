import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  className: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className }) => {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

export default NavLink;
