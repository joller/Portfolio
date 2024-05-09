import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Jason Oller | Resume" }];

export default function about() {
  return (
    <div>
      <h1>About Me</h1>
      <Outlet />
    </div>
  );
}
