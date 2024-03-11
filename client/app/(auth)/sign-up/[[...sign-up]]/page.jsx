import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return  <SignUp appearance={{
    elements: {
      rootBox : "mx-auto flex flx-col items-center justify-center h-screen",
     
    },
   
  }}/>;
}
