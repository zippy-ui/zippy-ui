import { Outlet, Link } from 'solid-app-router';

export default function Components() {
  return (
    <>
      <div className="flex flex-col w-96 pr-8 -ml-3">
        <h5 className="px-3 mb-3 uppercase tracking-wide font-semibold text-xs text-gray-900">
          Components
        </h5>
        <Link
          href="/components/badge"
          class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Badge
        </Link>
        <Link
          href="/components/button"
          class="hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Button
        </Link>
      </div>
      <article className="prose prose-xl flex-1">
        <Outlet />
      </article>
    </>
  );
}
