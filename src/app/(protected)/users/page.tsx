import { UserTable } from "@/src/components/pages/users/user-table";
import { Headline } from "@/src/components/typo/Headline";

export default async function UsersPage() {
  return (
    <div>
      <Headline className="mb-5">UsersPage</Headline>

      <UserTable />
    </div>
  );
}
