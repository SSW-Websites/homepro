export const config = {
  runtime: "nodejs",
};

export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }
  res.statusCode = 303;
  res.setHeader("Location", "/thank-you");
  res.end();
}
