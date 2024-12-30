import { ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, json, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "We have contact" }];
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // todo
  //get docs for testing
  if (name.length === 0) {
    return json(
      {
        errors: {
          name: "name is mandatory",
          email: null,
          message: null,
        },
      },
      { status: 400 },
    );
  }
  if (email.length === 0) {
    return json(
      {
        errors: {
          name: null,
          email: "name is mandatory",
          message: null,
        },
      },
      { status: 400 },
    );
  }
  if (message.length === 0) {
    return json(
      {
        errors: {
          name: null,
          email: null,
          message: "name is mandatory",
        },
      },
      { status: 400 },
    );
  }
  console.log(formData);
  return "Submitted";
  // await createContactMessage({name, email, message} as ContactMessage);
};

export default function Contact() {
  const actionData = useActionData<typeof action>();
  return (
    <div>
      <h1>Contact</h1>

      <Form method="post">
        <label htmlFor="name">name</label>
        <input id="name" type="text" placeholder="Name" name="name" />
        {actionData?.errors?.name ? (
          <div>
            <p>{actionData.errors.name}</p>
          </div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" />
        {actionData?.errors.email ? (
          <div>
            <p>{actionData.errors.email}</p>
          </div>
        ) : null}
        <label htmlFor="message">Message</label>
        <input type="text" placeholder="message" name="message" />
        {actionData?.errors?.message ? (
          <div>
            <p>{actionData.errors.message}</p>
          </div>
        ) : null}
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}
