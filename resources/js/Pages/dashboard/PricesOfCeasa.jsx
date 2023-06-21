const PricesOfCeasa = (props) => {
    return (
        <div className="  ">
            <div className="flex flex-col lg:flex-row m-4">
                <h1 className="font-bold mb-2">
                    <p className="  flex items-center justify-center lg:text-md md:text-md sm:text-sm font-bold  p-2">
                        {" "}
                        {props.product}
                    </p>
                    <p className=" flex items-center justify-center text-sm p-2">{props.lastDate}</p>{" "}
                </h1>
                <h1 className="  flex items-center justify-center font-bold text-3xl lg:mx-4 my-auto text-[#8BC83F]">
                    {"R$ "}
                    {props.lastCotacao}
                </h1>
            </div>
            <div className="m-4 "></div>
        </div>
    );
};
export default PricesOfCeasa;
