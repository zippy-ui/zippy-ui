import { Outlet, NavLink } from 'solid-app-router';

export default function Components() {
  return (
    <>
      <div className="flex flex-col w-96 pr-8 -ml-3">
        <h5 className="px-3 mb-3 uppercase tracking-wide font-semibold text-xs text-gray-900 dark:text-gray-100">
          Components
        </h5>
        <NavLink
          href="/components/badge"
          class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-800 dark:hover:text-white"
          activeClass="bg-blue-600 text-white hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700"
        >
          Badge
        </NavLink>
        <NavLink
          href="/components/button"
          class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-800 dark:hover:text-white"
          activeClass="bg-blue-600 text-white hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700"
        >
          Button
        </NavLink>
        <NavLink
          href="/components/button-group"
          class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-800 dark:hover:text-white"
          activeClass="bg-blue-600 text-white hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700"
        >
          Button group
        </NavLink>
      </div>
      <article className="prose prose-xl flex-1">
        <Outlet />
      </article>
    </>
  );
}
