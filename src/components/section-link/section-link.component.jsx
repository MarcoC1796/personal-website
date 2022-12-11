import { NavLink } from "react-router-dom";

const INACTIVE_STYLE =
  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

const ACTIVE_STYLE =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";

const SectionLink = ({ name, href }) => {
  const isActiveHandler = (isActive) => {
    return isActive ? ACTIVE_STYLE : INACTIVE_STYLE;
  };

  return (
    <li>
      <NavLink
        to={`${href}`}
        className={({ isActive }) => isActiveHandler(isActive)}
        aria-current="page"
      >
        {name}
      </NavLink>
    </li>
  );
};

export default SectionLink;
