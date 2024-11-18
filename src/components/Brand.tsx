import logo from "../assets/images/Neo_Geo_logo.png";

const Brand = () =>{
    return(
        <h1 className="col-span-2 flex justify-center items-center font-bold text-sky-50">
            <a className="hover:text-sky-400 transition duration-500" href="#">
                <div className="flex justify-center items-center">
                    <img className="h-9" src={logo} alt="Neo Geo Logo" />
                    Neo Geo Soundtrack Store
                </div>
            </a>
        </h1>
    );
};

export default Brand;