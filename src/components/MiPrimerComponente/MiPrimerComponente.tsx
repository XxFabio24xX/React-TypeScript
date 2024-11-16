import { FC } from "react"


interface IPropsMiPrimerComponente {
    text: string
    color: string
    fontSize?: number
}
const MiPrimerComponente : FC<IPropsMiPrimerComponente> = ({text, color, fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}>
        <p>{text}</p>      
    </div>
  )
}

export default MiPrimerComponente
