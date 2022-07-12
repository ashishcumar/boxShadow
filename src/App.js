import React,{useState} from "react";
import './App.css'

function App() {
  const [Hori,setHori] = useState(5)
  const [Verti,setVerti] = useState(5)
  const [Width,setWidth] = useState(5)
  const [Blur,setBlur] = useState(5)
  const [Color,setColor] = useState("Black")
  const [Check,setCheck] = useState(false)


  return (
    <>
    <h1> Box-Shadow </h1>
    <div className="App"> 
<div className="controls"> 
<label > Horizontal Length</label>
<input type="range" id="" min="0" max="200"  value={Hori} onChange={(e)=>setHori(e.target.value)}/>
<label > Vertical Length</label>
<input type="range" id="" min="0" max="200"  value={Verti} onChange={(e)=>setVerti(e.target.value)}/>
<label > Blue Length</label>
<input type="range" id="" min="0" max="200"  value={Width} onChange={(e)=>setWidth(e.target.value)}/>
<label > Blur </label>
<input type="range" id="" min="0" max="200"  value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
<label > Color </label>
<input type="Color"  value={Color} onChange={(e)=>setColor(e.target.value)}/> ,<br/>
<div className="switch">
  <label> outline 
    <input type="checkbox" checked={Check}  onChange={()=>setCheck(!Check)}/>
    <span className="lever"> </span>
    inset
  </label>
</div>
</div>
<div className="output">
<div className="box" style={{boxShadow:`${Hori}px ${Verti}px ${Blur}px ${Width}px ${Check ? "inset":"" } ${Color}` }}>
<p className="copyLine">box-shadow:{Hori}px {Verti}px {Blur}px {Width}px {Color}</p>
  </div>
</div>
    </div>
    </>



  )
}

export default App;
