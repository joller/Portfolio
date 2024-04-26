import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Jason Oller | Experience" }];

export default function Experience() {
  return (
    <div>
      <h1>Work Experience</h1>
      <Outlet />
    </div>
  );
}
