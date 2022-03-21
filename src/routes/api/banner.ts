import type { RequestHandler } from "@sveltejs/kit";

const startDate = new Date("Feb 24 2023 07:00:00 EST");
const endDate = new Date("Mar 24 2023 07:00:00 EST");
export const get: RequestHandler = async () => {
  const currentDate = new Date();

  const display = startDate < currentDate && currentDate < endDate;

  return {
    status: 200,
    headers: { "content-type": "application/json" },
    body: { display, startDate, endDate },
  };
};
