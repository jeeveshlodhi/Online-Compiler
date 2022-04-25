import { useEffect, useState } from 'react';
import Prism from "prismjs";
import '../style/ide.css'
import Editor from "@monaco-editor/react";
import { monaco } from "@monaco-editor/react";

const Ide = () => {
    const[line, setLine] = useState(1)
    const[textData, setTextData] = useState('')

    const handleEditorDidMount = () => {

    }

    // useEffect(()=>{
    //     monaco.editor.defineTheme('my-theme', {
    //         base: 'vs',
    //         inherit: true,
    //         rules: [],
    //         colors: {
    //           'editor.background': '#000000',
    //         },
    //   });
    // })
    return(
        <div className='ideWrapper'>
            <Editor
                height="90vh"
                width="60vw"
                defaultLanguage="python"
                defaultValue="// some comment"
                theme="vs-dark"
                line="2"
                options={{
                    minimap: {
                    enabled: false,
                    },
                    fontSize: 18,
                    cursorStyle: "block",
                    wordWrap: "on",
                }}
                editorDidMount={handleEditorDidMount}
            />
        </div>
    )
}

export default Ide;