
import BImg from "../../Assets/newBannerText.png"
import "./Banner.css"
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import online from "../../Assets/onlineConsult.png"
import labtest from "../../Assets/labtest.png"
import xray from "../../Assets/Xrayadscans.png"
import nursing from "../../Assets/nursing.png"
import phsyio from  "../../Assets/phsio.png"
import  beside from "../../Assets/beside.png"




function Banner(){
let char=[
    { img: online, text: " Online Consultant" },                               
    { img: labtest,  text: "Lab Tests" },
    { img: xray, text: "x-rays and scans "},  
    { img: beside    , text : "Beside Attendant"},

    { img: nursing, text: "Nursing " },

    { img: phsyio, text:"physiotherapy"}   ,


]

    return (
        <div className="Banner">

<div className="BannerLeft">


<img src={BImg} alt="" className="Bimg"/>


</div>


<div className="Bannerright">


<div className="BR2">

<h1 style={{color:"#273990",fontSize:"2em",fontFamily:"sans-serif"}}> EXPLORE<br/>
<span  style={{color:"#6eb744c9"}}>OUR COMPREHENSIVE </span><br/>
HEALTHCARE SERVICES</h1>

<div className="input" >

  <div className="input2">

    <SlLocationPin style={{ marginRight: "8px", fontSize: "20px" }} />
    
    <p style={{ margin: "0", whiteSpace: "nowrap" }}>P Janardhan Reddy Nagar...
        <br/> <span style={{color:"#f0f0f0",fontSize:"12px"}}>   C9W8+86P, P Janardhan Red... </span>
    </p>
                                                  
  </div>
  <input 
    placeholder="Search for HealthCare Services"
    style={{
   
      height: "100%",
      width:"60%",
      border: "none",
      outline: "none",
      fontSize: "16px",
      padding: "0 10px",
      backgroundColor: "transparent",
     

      
      color: "white",
    }}
  />
  <FaSearch  style={{ color: "#273990",fontSize:"20px" }}/>
</div>


</div>


{/* ........................................................................................................................................................ */}
<div style={{margin:"5px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px"}}>
   
<div style={{width:"200px",height:"1.5px",backgroundColor:"grey"}}/>
<p  style={{color:"grey"}}>  (OR) Browse for Healthcare Services</p> 
<div style={{width:"250px",height:"1.5px",backgroundColor:"grey"}}/>

</div>

{/* .......................... */}



<div  className="frame">

{char.map((avatar,idx)=>(
    <div className="UnderPhoto" key={idx} >

<img className="img2" src={avatar.img} alt="img"/>
<p > {avatar.text}</p>
</div>

))}
</div>


</div>






      </div>
    )
}export default Banner