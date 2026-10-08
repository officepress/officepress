/** Public shell contribution contract. Feature plugins add navigation only after their dependency checks. */
export type ComponentLink = {
  id: string;
  label: string;
  href: string;
  icon: string;
  pages?: { path: string; title: string }[];
};
export type ComponentNavigation = {
  add(link: ComponentLink): void;
  items(): ComponentLink[];
};
export function createNavigation(): ComponentNavigation {
  const links: ComponentLink[] = [];
  return {
    add(link) {
      if (!links.some((item) => item.id === link.id)) links.push(link);
    },
    items: () => [...links],
  };
}
