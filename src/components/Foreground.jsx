import { useRef } from "react"
import Card from "./Card"

 

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      Desc:'This is the first card',
      filesize:'.10mb',
      close:true,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
    },
    {
      Desc:'This is the second card',
      filesize:'.6mb',
      close:false,
      tag:{isOpen:true,tagTitle:"Working on it",tagColor:"zinc"}
    },
  ]
  return (
    <div ref ={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-9 flex-wrap p-5 ">
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground