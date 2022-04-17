import Image from "next/image"

export default function PartnerImages() {
    const partners: { name: string; img: string; width:number; height:number }[] = [
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
      {
        name: 'Name',
        img: 'your-logo.png',
        width: 512/2,
        height: 512/2
      },
    ]

    return (
    <>
      <div className="columns is-centered is-half">
        {
          partners.map(({ name, img, width, height }) => (
            <div className="column" key={name}>
              <Image src={`/assets/images/partners/${img}`} width={width} height={height} alt={`${name} logo`}/>
            </div>  
         ))
        } 
      </div>
      <p className="subtitle is-size-6 has-text-white has-text-centered">Caso tenha interesse em aparecer aqui, entre em contato conosco através <b className="has-text-light is-underlined">deste link.</b></p>
    </>
  )
}
