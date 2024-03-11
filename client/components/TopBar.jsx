import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopBar() {
  return <div className="flex justify-between items-center px-6">
  <h3 className="text-2xl sm:text-3xl text-gray-900 font-semibold">
    <Link href="/">Facebook</Link>
  </h3>

<SignedIn>
  <UserButton afterSignOutUrl="/sign-in" />
</SignedIn>

<SignedOut>
  <Link href="/sign-in">Sign In</Link>
</SignedOut>
  </div>
}

