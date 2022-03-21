import type { Response } from "@netlify/functions/src/function/response";
import saveEmailInSheet from "../feedback/_save-to-spreadsheet";

interface SignupData {
  type: "newsletter" | "ambassador program" | "blog-email";
  email: string;
}

const signupTypeToSheetTitle = {
  newsletter: "Newsletter - Signups",
  "ambassador program": "Ambassador program - Signups",
  "blog-email": "Gitpod OS - Signups",
};

export const signup = async (body: string): Promise<Response> => {
  const data: SignupData = JSON.parse(body) as SignupData;
  console.log(data);
  const isSavedInSheet = await saveEmailInSheet({
    sheetTitle: signupTypeToSheetTitle[data.type],
    data: [data.email],
    type: "signup",
  });

  let statusCode;

  if (isSavedInSheet === "duplicate") {
    statusCode = 409;
  } else if (isSavedInSheet) {
    statusCode = 201;
  } else {
    statusCode = 500;
  }

  return {
    statusCode,
    body: statusCode === 201 ? "Signed up" : "Oh no, something failed.",
  };
};
