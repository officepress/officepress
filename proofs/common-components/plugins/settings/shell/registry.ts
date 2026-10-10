//--------------------------------------------------------------------//
// Types

//public shell contribution contract. Feature plugins add navigation only
// after their dependency checks. feature-owned navigation entry contributed
// to the shared shell
export type ComponentLink = {
  id: string,
  label: string,
  href: string,
  icon: string,
  pages?: { path: string, title: string }[],
  //browser entrypoint owned by this feature; the shell supplies shared page
  // preparation
  view?: string
};

//registration boundary used by enabled plugins to contribute shell pages
export type ComponentNavigation = {
  add(link: ComponentLink): void,
  items(): ComponentLink[]
};

//shell page/view mapping supplied to route registration
export type ShellPage = {
  path: string,
  componentId: string,
  title: string,
  view?: string
};

//--------------------------------------------------------------------//
// Functions

/**
 * Create the shared navigation registry for independently registered feature
 * pages.
 */
export function createNavigation(): ComponentNavigation {
  const links: ComponentLink[] = [];
  return {
    //register each feature link once while preserving plugin registration
    // order
    add(link) {
      if (!links.some((item) => item.id === link.id)) links.push(link);
    },
    items: () => [ ...links ]
  };
};

/**
 * Read the registered pages in the shell’s configured navigation order.
 */
export function shellPages(components: ComponentLink[]): ShellPage[] {
  return [
    { path: '/', componentId: '', title: 'App' },
    { path: '/settings/about', componentId: '', title: 'App settings' },
    { path: '/settings/theme', componentId: '', title: 'App settings' },
    ...components.flatMap((item) =>
      (item.pages || [ { path: item.href, title: item.label } ]).map((page) => ({
        ...page,
        view: item.view,
        componentId: item.id
      }))
    )
  ];
};
