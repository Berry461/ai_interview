import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser()

  return (
    <>
        <h3>Interview Generation</h3>

        <Agent userName={user?.name} userId={user?.id} type="generate"/>

        console.log("Environment Variables:", process.env);
        console.log("Assistant Value:", assistant);
        console.log("Squad Value:", squad);

    </>
  )
}

export default Page