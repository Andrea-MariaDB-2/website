import Analytics from "analytics-node";
import type { Response } from "@netlify/functions/src/function/response";
import { nanoid } from "nanoid";

interface SignupInfo {
  email: string;
  anonymousId?: string;
}

const analytics =
  process.env.NODE_ENV === "production"
    ? new Analytics("14WvAwP23g2AZddYGxblnp1BbVAErnsy")
    : new Analytics("CkSXNrLHHASi1g1aSTIUeaAq5a4W0o9B");

export const signup = async (info: SignupInfo): Promise<Response> => {
  if (info.anonymousId) {
    analytics.identify({
      anonymousId: info.anonymousId,
      traits: {
        email_untrusted: info.email,
      },
    });
  }

  analytics.track({
    anonymousId: info.anonymousId || nanoid(),
    event: "newsletter_signup",
    email: info.email,
  });

  return {
    statusCode: 201,
    body: "Signed up",
  };
};
