import { Link, NavLink } from "react-router-dom";

import routes from "../routes";
import clsx from "clsx";

function Navigation() {
  return (
    <>
      <Link to="/">Главная</Link>

      <nav className="space-x-2">
        {routes.map(({ path, title }, index) => (
          <NavLink to={path} key={`${index}`}>
            {({ isActive }) => (
              <span
                className={clsx("hover:border-b hover:border-violet-500 hover:text-violet-500", {
                  "font-semibold text-violet-700": isActive,
                })}
              >
                {title}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navigation;
