import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p className="description">Placeholder</p>
      <br></br>
      <h2>Our Founder</h2>
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="John Doe"
        width={500}
        height={500}
        className="profile"
      />
      <p className="description">Placeholder</p>
      <br></br>
      <h2>Person 1</h2>
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="John Doe"
        width={500}
        height={500}
        className="profile"
      />
      <p className="description">Placeholder</p>
      <br></br>
      <h2>Person 2</h2>
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="John Doe"
        width={500}
        height={500}
        className="profile"
      />
      <p className="description">Placeholder</p>
      <br></br>
      <h2>Person 3</h2>
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="John Doe"
        width={500}
        height={500}
        className="profile"
      />
      <p className="description">Placeholder</p>
      <br></br>
    </>
  )
}
