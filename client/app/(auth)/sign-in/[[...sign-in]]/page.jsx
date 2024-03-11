import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn appearance={{
    elements: {
      rootBox : "mx-auto h-screen flex flex-col items-center justify-center",
    }
  }}/>;
}
