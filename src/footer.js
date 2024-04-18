import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    return (
        <>
            <div className="demo4 text-neutral-400 p-5">
                <div>
                    <h1 className="text-xl text-white">CONTACT</h1>
                    <br />
                    <p className="w-1/2">
                        Ortech Pumps  Jeet ind,near swati park,kothariya,rajkot 360002
                    </p>
                    <br />
                    <h1>Ortechpump@gmail.com</h1>
                    <br />
                    <h1 className="text-white">88494 10164</h1>
                </div>
                <div>
                    <h1 className="text-xl text-white">EXPLORE : </h1>
                    <br />
                    <button type="button" onClick={() => navigate('/parth')}> <h6>WE-THE ORTECH</h6> </button>
                    <br />
                    <br />
                    <button type="button" onClick={() => navigate('/about')}> <h6>ABOUT ORTECH</h6> </button>
                    <br />
                    <br />
                    <button type="button" onClick={() => navigate('/application')}> <h6>APPLICATION</h6> </button>
                    <br />
                    <br />
                    <button type="button" onClick={() => navigate('/product')}> <h6>PRODUCT</h6> </button>
                    <br />
                    <br />
                    <button type="button" onClick={() => navigate('/contactus')}> <h6>CONTACT US</h6> </button>



                </div>

            </div>
        </>
    )
}
export default Footer;