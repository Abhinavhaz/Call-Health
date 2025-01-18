
import "./Footer.css"
import { FiPlayCircle } from "react-icons/fi";
import ribbon from "../../Assets/Screenshot__3_-removebg-preview.png"
import preg from "../../Assets/preg-removebg-preview.png"
import heart from "../../Assets/heart-removebg-preview.png"
import dental from "../../Assets/last-removebg-preview (1).png"





function Footer(){


    let xyz = [
        { img: ribbon, text:"Breast CancerAwarenss" },
        { img: preg, text:"What is Mommy Makeover?" },
        { img: heart, text:"Take Action for Your Heart Health" },
        { img: dental, text:"Oral Health" },


    ]
return(

<div className="FooterContainer">
<p style={{fontSize:"2em",fontWeight: "bold"}}>Health Talks with Experts<br/>

    <span style={{fontSize:"0.9em",fontWeight: "lighter", fontFamily:"inherit"}} >  
Awareness and Care</span></p>




<div className="imgContainer">

    {xyz.map((item,idx)=>(
        <div className="fimg" key={idx}>
<img src={item.img} alt="img"/>

<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 

<p style={{fontSize:"12px"}}>Lorem Ipsum is simply
dummy text of the printing<br/>
<span style={{fontSize:"14px",fontWeight:"600"}}>{item.text}</span>
</p>
<FiPlayCircle  style={{ fontSize: "60px"}}/>

</div>

    </div>
    ))}

</div>

    </div>

)
}
export default Footer