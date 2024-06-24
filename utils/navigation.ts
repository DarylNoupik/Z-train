import "../config/env";

export function pageUrl(pageName: string) {
  let expectedUrl;
  switch (pageName) {
    case "homepage":
      expectedUrl = `${process.env.baseUrl}`;
      break;

    default:
      throw new Error("The page " + pageName + " don't exist");
  }
  if (!expectedUrl) {
    throw new Error("Please check your environment or .env file.");
  }
  return expectedUrl;
}
