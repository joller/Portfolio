import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import { Logo } from "./components/Logo";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    rel: "stylesheet",
  },
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => [{ title: "Jason Oller" }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full font-inter bg-[#002024]">
        <nav className="bg-[#002024] z-50 sticky top-0">
          <ul className="flex flex-row justify-between py-4 px-20 ">
            <li>
              <NavLink to="/" className="text-xl font-bold">
                <Logo className="w-40 text-white" />
              </NavLink>
            </li>
            <div className="flex">
              <li>
                <NavLink to="/experience" className="text-white">
                  Work Experience
                </NavLink>
              </li>
              <li className="px-10">
                <NavLink to="/about" className="text-white">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-white">
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
