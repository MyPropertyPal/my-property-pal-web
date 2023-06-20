export async function GET(req) {
  alert("get fn triggered");

  return new Response("Hello, from home");
}
