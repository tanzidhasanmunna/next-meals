import Image from "next/image";


export default function page() {
  return (
    <div className="min-h-screen px-12 py-24">
        <h6>Gallery Page</h6>
        <div>
            {
                [1,2,3,4,5].map(i => <Image key={i} src={`/images/${i}.jpg`} alt="" width={'1920'} height={'1080'}/>)
            }
        </div>
        {/* <Image src="/images/2.jpg" alt="" width={'1920'} height={'1080'}/> */}
        {/* <img src="/images/2.jpg" alt="" width='1920' height='1080'/> */}
    </div>
  )
}
