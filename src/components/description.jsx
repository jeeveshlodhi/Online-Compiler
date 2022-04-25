import '../style/description.css'

const Description = (p) => {
    const img1 = require('../assets/'+p.ex1.img);
    const img2 = require('../assets/'+p.ex2.img);
    return (
        <div className='descWrapper padding'>
            <div className='descHeader'>
                <div className='padding'>{p.id}.</div>
                <div className='padding'>{p.title}</div>
            </div>
            <div className='descTag'>{p.tag}</div>
            <div className='desc padding'>
                {p.ques.split("<br/>").join("\n")}
            </div>
            <div className='padding ex' >Example 1 :</div>
            <div className='exWrapper'>
                <img src={img1} alt={p.ex1.img} className='exImg'/>
                <div className='io'>
                    <div className='exinput'>Input: &nbsp;&nbsp;&nbsp;&nbsp;{p.ex1.input}</div>
                    <div className='exinput'>Output: &nbsp;&nbsp;&nbsp;&nbsp;{p.ex1.output}</div>
                </div>
            </div>
            <div className='padding ex' >Example 2 :</div>
            <div className='exWrapper'>
                <img src={img2} alt={p.ex2.img} className='exImg'/>
                <div className='io'>
                    <div className='exinput'>Input: {p.ex2.input}</div>
                    <div className='exinput'>Output: `{p.ex2.output}</div>
                </div>
            </div>
            <div className='ex padding'>Constraints:</div>
            {
                p.constraints.map((d,i) => {
                    return <li className='contraints'>{d}</li>
                })
            }
            
        </div>
    )
}

export default Description;