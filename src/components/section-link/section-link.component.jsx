import { NavLink } from "react-router-dom";

const INACTIVE_STYLE =
  "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

const ACTIVE_STYLE =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white";

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
