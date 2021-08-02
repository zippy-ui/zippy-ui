import { Link } from 'solid-app-router';

export default function Index() {
  return (
    <div className="inline-flex rounded-md shadow mx-auto">
      <Link
        href="/components/badge"
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Get started
      </Link>
    </div>
  );
}
