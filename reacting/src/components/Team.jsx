import './Team.css'


export const Team = ({}) => {
  return (
    <div>
        <h2>Escalação:</h2>
        <p className='goleiro'>{gol}</p>
        <p className='zaga'><span className='ld'>{ld}</span > <span className='z1'>{z1}</span > <span className='z2'>{z2}</span> <span className='le'>{le}</span></p>
        <p className='volancia'><span className='v1'>{v1}</span> <span className='v2'>{v2}</span></p>
        <p className='meia'><span className='m1'>{m1}</span> <span className='m2'>{m2}</span></p>
        <p className='ataque'><span className='a1'>{a1}</span> <span className='a2'>{a2}</span></p>
    </div>
  )
}

{/* <h2>Escalação:</h2>
<p>{}</p>
<p>{} {} {} {}</p>
<p>{} {}</p>
<p>{} {}</p>
<p>{} {}</p> */}

<div>
        <h2>Escalação:</h2>
        <p className='goleiro'>{gol}</p>
        <p className='zaga'><span className='ld'>{ld}</span > <span className='z1'>{z1}</span > <span className='z2'>{z2}</span> <span className='le'>{le}</span></p>
        <p className='volancia'><span className='v1'>{v1}</span> <span className='v2'>{v2}</span></p>
        <p className='meia'><span className='m1'>{m1}</span> <span className='m2'>{m2}</span></p>
        <p className='ataque'><span className='a1'>{a1}</span> <span className='a2'>{a2}</span></p>
    </div>