import Image from "next/image";
function Header() {
  return (
    <div>
        
        <h1>Header</h1>
        <Image
          src={"https://unsplash.com/photos/vf5FJsCH4_8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwNTM2NjYz&force=true"}
          alt="Picture of the author"
          width={1900}
          height={1200}
          priority={true}
          layout={"responsive"}
        />
    </div>
  )
}

export default Header