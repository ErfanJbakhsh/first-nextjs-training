import Link from "next/link"

export default function page() {
  return (
    <>
      <h1>hello world !</h1>
      <Link href="/users">Users</Link>
      {/* or you can use <a> */}
    </>
  )
}