import { ChangeEvent, useState } from "react"

export function State() {
  const [text, setText] = useState<string>("");  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return(
    <div>
    <p>Texto: {text}</p>
    <input type="text" onChange={handleChange} placeholder={text}/>
    </div>
  )  
}