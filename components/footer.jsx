
import Image from 'next/image'

function Footer() {
  return (
    <div>
        <h1>Footer</h1>
        <Image
          src={"https://unsplash.com/photos/ia4N95IKLnI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwNTM5MDEz&force=true"}
          alt="Picture of the author"
          width={1900}
          height={1200}
          priority={true}
          layout={"responsive"}
        />
        
    </div>
  )
}

export default Footer