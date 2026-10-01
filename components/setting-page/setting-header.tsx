import { PageHeading } from "@/components/page-heading";
import { TOWN_NAME } from "@/lib/competition";

export function SettingHeader() {
  return (
    <PageHeading description={`Welcome to ${TOWN_NAME}, a small farm in Australia where the animals govern themselves.`}>
      Competition Setting
    </PageHeading>
  );
}
