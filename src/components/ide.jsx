import { useState } from 'react';
import Prism from "prismjs";
import '../style/ide.css'

const Ide = () => {
    const[line, setLine] = useState(1)
    const[textData, setTextData] = useState('')

    return(
        <div className='ideWrapper'>
            <pre className='ide'>
                <code className=''>
                </code>
            </pre>
        </div>
    )
}

export default Ide;