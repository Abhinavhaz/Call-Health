import "./Main.css";
import doc1 from "../../Assets/doc2-removebg-preview.png"
import doc2 from "../../Assets/doctor-removebg-preview.png"
import doctor1 from "../../Assets/Dr Amanullah.jpg"
import doctor2 from "../../Assets/Dr N Sindhuri.jpg"
import doctor3 from "../../Assets/Dr Manasa.jpg"
import doctor4 from "../../Assets/Dr Radhika S.jpg"
function Main() {

  let doc = [
    { img: doctor1, name: " Dr Amanullah Beig", exp: "-9 years", lang: "English, Hindi, Telugu", work: " General Physician (GP)" },

    { img: doctor2, name: "Dr N Sindhuri ", exp: "-11 years", lang: "English, Hindi, Telugu", work: "MD - Pediatrics" },

    { img: doctor3, name: " Dr Manasa Reddy", exp: "-9 years", lang: " English, Hindi, Telugu", work: "MS - Obstetrics & Gynaecology" },

    { img: doctor4, name: "Dr Radhika Sharma ", exp: "-10 years", lang: "English, Hindi, Telugu", work: "Pulmonology" },


    { img: doctor1, name: " Dr Amanullah Beig", exp: "-9 years", lang: "English, Hindi, Telugu", work: " General Physician (GP)" },

    { img: doctor2, name: "Dr N Sindhuri ", exp: "-11 years", lang: "English, Hindi, Telugu", work: "MD - Pediatrics" },

  ]

  return (
    <div className="main">

      <div className="mainLeft">


        <div className="card-container">

          <div className="card1">

            <label>
              <input type="checkbox" />
              In Next 30 Minutes
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              {/* n React, defaultChecked is used to set the initial state of a checkbox as checked when the component first renders. */}
              Today
            </label>

            <label>
              <input type="checkbox" />
              This Week
            </label>

          </div>

          {/* ...................card1............... */}

          <div className="card2">

            <h4>Speciality</h4>
            <label>
              <input type="checkbox" defaultChecked />
              Dermatology
            </label>

            <label>
              <input type="checkbox" />
              {/* n React, defaultChecked is used to set the initial state of a checkbox as checked when the component first renders. */}
              General Physician
            </label>

            <label>
              <input type="checkbox" />
              Gyneacology
            </label>

            <label>
              <input type="checkbox" />
              Neurology
            </label> <label>
              <input type="checkbox" />
              Orthopaedics
            </label>

            <spaan  ><h4 style={{ textAlign: "right" }}>View All</h4></spaan>
          </div>
          {/* .....................card2................. */}


          <div className="card3">

            <h4>Gender</h4>

            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "", marginTop: "-30px" }}>
              <img style={{ width: "80px", height: "auto" }} src={doc1} alt="img" />
              <img style={{ width: "100px", height: "auto", marginBottom: "-20px" }} src={doc2} alt="img" />
            </div>

          </div>

          {/* .................................card3............... */}

          <div className="card4">

            <h4>Speciality</h4>
            <label>
              <input type="checkbox" />
              Common Issues(&lt; 5 years)
            </label>

            <label>
              <input type="checkbox" />
              Advance(5-10 years)
            </label>

            <label>
              <input type="checkbox" />
              Specialised(&gt;10years)
            </label>

          </div>
        </div>
      </div>





      <div className="mainRIght">

        <div className="docContainer">

          {doc.map((item, idx) => (
            <div className="docCard" key={idx}>
              <img src={item.img} alt="img" />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "20px", fontFamily: "unset" }}>{item.name}</p>
                <p>{item.work}</p><br />
                <p>Experience{item.exp}
                </p>
                <p> Languages -{item.lang}</p>

                <h4>₹ 450/-</h4>
                < button>Book An Appoinment</button>
              </div>
            </div>

          ))}


        </div>


      </div>

    </div>
  );
}

export default Main;
