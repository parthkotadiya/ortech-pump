import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <>

            <div className="flex justify-center flex-wrap">
                <div className="flex justify-center items-center flex-wrap">
                    <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" width="40px" height="40px" />
                    <h6>Ortechpump@gmail.com</h6>
                </div>

                <div className="flex justify-center items-center flex-wrap">
                    <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" width="40px" height="40px" />
                    <h6>+91 88494 10164</h6>
                </div>

                <div className="flex justify-center items-center flex-wrap">
                    <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" width="40px" height="40px" />
                    <h6 className="w-1/2">Ortechpump rajkot (Gujarat) 360002
                    </h6>
                </div>


                <div className="demo1">
                    {/* <img src="https://falconpumps.in/assets/images/logo.png" width="209px" height="43px" /> */}

                </div>


            </div>
            <br/>
            <div className="bg-sky-800 flex justify-center flex-wrap gap-10" >
                <button type="button" className="demo2" onClick={() => navigate('/parth')}> <h6><b>WE-THE ORTECH</b></h6> </button>
                <button type="button" className="demo2" onClick={() => navigate('/about')}> <h6><b>ABOUT ORTECH</b></h6> </button>

                <button type="button" className="demo2" onClick={() => navigate('/application')}> <h6><b>APPLICATION</b></h6> </button>

                <button type="button" className="demo2" onClick={() => navigate('/product')}> <h6><b>PRODUCT</b></h6> </button>

                <button type="button" className="demo2" onClick={() => navigate('/contactus')}> <h6><b>CONTACT US</b></h6> </button>



            </div>
        </>
    )
}
export default Header;