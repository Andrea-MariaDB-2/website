import type { Handler } from "@netlify/functions";
import { cookie } from "cookie";
import { signup } from "./_signup";

const handler: Handler = (event, _, callback) => {
  const anonymousId = cookie
    .parse(event.headers.cookie)
    .ajs_anonymous_id?.replace(/\"/g, "");

  signup({ email: event.body, anonymousId })
    .then((response) => callback(null, response))
    .catch((error) => {
      console.error(error);
      callback(error, null);
    });
};

export { handler };
