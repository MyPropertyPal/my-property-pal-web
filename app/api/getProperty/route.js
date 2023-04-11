import { NextResponse } from "next/server";

export async function getTestProperty(req, res) {
  NextResponse.json({ property: "123 Main st." });
}
