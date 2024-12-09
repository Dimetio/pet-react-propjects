import { Link } from "react-router-dom";

import routes from "../routes";

function Main() {
  return (
    <div className="space-y-10 p-5">
      <p className="font-semibold">Коллекция пет-проектов на React/TypeScript</p>

      <ul className="grid grid-cols-5 gap-5">
        {routes.map(({ path, title }) => (
          <li>
            <Link
              className="flex h-[100px] items-center justify-center border hover:bg-gray-50"
              to={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
