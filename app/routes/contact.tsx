import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "We have contact" }];

export default function Contact() {
  return (
    <div>
      <h1>Contact Bitch</h1>
      <Outlet />
    </div>
  );
}
