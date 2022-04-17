import Image from "next/image"

export default function PartnerImages() {
    const partners: { name: string; img: string; width:number; height:number }[] = [
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 256/2,
        height: 256/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 256/2,
        height: 256/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 256/2,
        height: 256/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 256/2,
        height: 256/2
      },
    ]

    return (
    <>
      <div className="columns is-vcentered is-mobile is-flex-wrap-wrap">
        {
          partners.map(({ name, img, width, height }) => (
            <div className="column" key={name}>
              <Image src={`/assets/images/partners/${img}`} width={width} height={height} alt={`${name} logo`}/>
            </div>  
         ))
        } 
      </div>
    </>
  )
}
