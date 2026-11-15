import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageHeading, pageLayoutClassName } from "@/components/page-heading";
import { COMPETITION_NAME, TEAMS } from "@/lib/competition";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Leaderboard | ${COMPETITION_NAME} | Day of AI Australia`,
  description: `Final top 10 teams from the 2026 ${COMPETITION_NAME} competition.`,
};

const TOP_N = 10;

type LeaderboardEntry = {
  rank: number;
  teamName: string;
  side: string;
  points: number;
};

// Read at build time on the server; only the displayed columns reach the page.
function getLeaderboard(): LeaderboardEntry[] {
  const csv = fs.readFileSync(
    path.join(
      process.cwd(),
      "app/leaderboard/OtF2026_Leaderboard_New_Bonus.csv",
    ),
    "utf8",
  );
  const [headerLine, ...lines] = csv.trim().split(/\r?\n/);
  const headers = headerLine.split(",");
  const col = (name: string) => headers.indexOf(name);
  const [rankCol, nameCol, sideCol, pointsCol] = [
    "new_rank",
    "team_name",
    "side",
    "new_total",
  ].map(col);

  return lines
    .map((line) => line.split(","))
    .map((cells) => ({
      rank: Number(cells[rankCol]),
      teamName: cells[nameCol],
      side: cells[sideCol],
      points: Number(cells[pointsCol]),
    }))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, TOP_N);
}

function sideColors(side: string) {
  return side === "SuperHealth"
    ? TEAMS.emuLabs.colors
    : TEAMS.qualityFeed.colors;
}

export default function Leaderboard() {
  const entries = getLeaderboard();

  return (
    <div className="flex-1 bg-white">
      <main className={pageLayoutClassName}>
        <PageHeading
          align="center"
          description={
            <>
              This year&apos;s {COMPETITION_NAME} competition is over.
              Congratulations to every team that took part, and a special
              shout-out to our top 10!
            </>
          }
        >
          Leaderboard
        </PageHeading>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-gray-200">
          <Table className="text-left text-base">
            <TableCaption className="sr-only">
              Final top {TOP_N} teams by points
            </TableCaption>
            <TableHeader className="bg-gray-100 text-gray-900">
              <TableRow>
                <TableHead
                  scope="col"
                  className="w-16 px-4 py-4 font-bold sm:px-6"
                >
                  Rank
                </TableHead>
                <TableHead scope="col" className="px-4 py-4 font-bold sm:px-6">
                  Team
                </TableHead>
                <TableHead scope="col" className="px-4 py-4 font-bold sm:px-6">
                  Side
                </TableHead>
                <TableHead
                  scope="col"
                  className="px-4 py-4 text-right font-bold sm:px-6"
                >
                  Points
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries.map((entry) => {
                const colors = sideColors(entry.side);
                return (
                  <TableRow
                    key={`${entry.rank}-${entry.teamName}`}
                    className="border-gray-200 even:bg-gray-50"
                  >
                    <TableCell className="px-4 py-4 font-bold tabular-nums text-gray-900 sm:px-6">
                      {entry.rank}
                    </TableCell>
                    <TableHead
                      scope="row"
                      className="whitespace-normal px-4 py-4 font-semibold text-gray-900 sm:px-6"
                    >
                      {entry.teamName}
                    </TableHead>
                    <TableCell className="px-4 py-4 sm:px-6">
                      <span
                        className={cn(
                          "inline-block rounded-full border px-3 py-1 text-sm font-semibold whitespace-nowrap",
                          colors.bg,
                          colors.border,
                          colors.text,
                        )}
                      >
                        {entry.side}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-4 text-right font-semibold tabular-nums text-gray-900 sm:px-6">
                      {entry.points.toLocaleString("en-AU")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <footer className="mx-auto mt-12 max-w-4xl border-t border-gray-200 pt-8 text-center text-lg text-gray-600">
          <p>
            Have any questions? Email us at{" "}
            <a
              href="mailto:hello@dayofaiaustralia.com"
              className="wrap-anywhere text-red-700 underline hover:text-red-800"
            >
              hello@dayofaiaustralia.com
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
