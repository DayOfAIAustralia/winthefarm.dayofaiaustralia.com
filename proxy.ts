import { NextResponse, type NextRequest } from "next/server";

// The competition is over: send everything on the old game host to the leaderboard.
const REDIRECT_HOSTS = new Set(["play.onthefence.dayofaiaustralia.com"]);
const DESTINATION = "https://onthefence.dayofaiaustralia.com/leaderboard";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (host && REDIRECT_HOSTS.has(host)) {
    return NextResponse.redirect(DESTINATION, 308);
  }
  return NextResponse.next();
}
