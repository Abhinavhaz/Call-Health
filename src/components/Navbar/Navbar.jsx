import "./Navbar.css"
// import { FaPhone } from "react-icons/fa6"
import { FiPhoneCall } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc"
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../Assets/callHealth_Logo-removebg-preview.png"
import { IoIosArrowDown } from "react-icons/io"

function Navbar() {





    return (
        <div>

            <div className="Nav1">


                <div className="Navleft">

                    <img src={logo} alt="img" />

                    <p> All Services <span><IoIosArrowDown  style={{marginBottom:"-5px",fontSize:"20px"}}/> </span></p>

                </div>


                <div className="Navright">

                  
                    <FiPhoneCall style={{ color: "blue" }} />

                    <div >
                        <VscAccount style={{ fontSize: "25px"}} />
                       <p> Login/SingnUp</p>
                    </div  >
                    <CiShoppingCart style={{ fontSize: "30px"}} />
                </div>



            </div>


        </div>
    )


}
export default Navbar