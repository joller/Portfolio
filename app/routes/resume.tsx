import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Jason Oller | Resume" }];

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <Outlet />
    </div>
  );
}
