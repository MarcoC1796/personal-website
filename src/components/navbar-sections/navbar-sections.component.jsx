import SectionLink from "../section-link/section-link.component";

const sections = [
  { name: "About Me", href: "/" },
  { name: "Software Projects", href: "software-projects" },
  { name: "AI & ML Projects", href: "ai-ml-projects" },
  { name: "Tech Stack", href: "tech-stack" },
];

const NavbarSections = ({ isNavExpanded }) => {
  return (
    <div
      className={
        isNavExpanded
          ? "items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          : "items-center justify-between w-full hidden lg:flex lg:w-auto lg:order-1"
      }
      id="navbar-cta"
    >
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        {sections.map((section) => (
          <SectionLink key={section.href} {...section} />
        ))}
      </ul>
    </div>
  );
};

export default NavbarSections;
