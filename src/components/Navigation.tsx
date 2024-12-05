import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";

const routes = [
  { path: "counter", title: "Counter" },
  { path: "stopwatch", title: "StopWatch" },
];

function Navigation() {
  return (
    <>
      <Link to="/">Главная</Link>

      <nav className="space-x-2">
        {routes.map(({ path, title }) => (
          <NavLink to={path}>
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
