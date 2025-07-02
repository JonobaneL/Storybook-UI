export type SubItemT = {
  label: string;
  link: string;
  subItems?: { label: string; link: string }[];
};

export type NavItemT = {
  label: string;
  link: string;
  subItems?: SubItemT[];
};
