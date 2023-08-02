import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css'
import { useRef,useState } from 'react';
  


export const Quill = () => {
    const ref = useRef(null);
    const [text, settext] = useState('');
    const modules={
        toolbar:[
            [{ 'header': [1, 2,3,4,5,6, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
        ]
    }

    const quillFormats=[
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align',
        'color', 'background'
     ]

     const handleText=()=>{
        if(ref.current){
            const editor = ref.current.getEditor();
            const context =editor.root.innerHTML;
            console.log(context);
            settext(context);
        }
     }

     const HtmlTotext=({htmlcode})=>{
        const style={
            conatiner:{
                width:'100%',
                wordWrap:'break-word',
                overflowWrap:'break-word',
                height:"600px",
                overflowY:"auto"
            },
            code:{
                display:"block",
                lineHeight:"1.3",
                padding:"3rem",
                backgroundColor:"#f5f5f5",
                border:"1px solid #ddd",
                borderRadius:"5px",
                 textAlign:"justify",
                 margin:"1rem 0"
            }
        }
       return( 
       <div style={style.code}> 
       <code dangerouslySetInnerHTML={{__html: htmlcode}} />
       </div>)
     }
  return (
    <>
    <form  action="http://localhost:4001/Blog" method="post" encType='multipart/form-data'>

    <div> <br/>
    
    <ReactQuill
    value={text}
    ref={ref}
    onChange={handleText}
    modules={modules} 
    formats={quillFormats}
    placeholder="Write something amazing..."
    theme='snow'
    />
    </div>
     <HtmlTotext htmlcode={text}/>
     <button type="submit">Submit</button>
    </form>

    </>
  )
}
