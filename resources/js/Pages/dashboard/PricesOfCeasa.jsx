const PricesOfCeasa = (props) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className=" flex flex-row m-4">
                <h1 className="font-bold mb-2">
                <p className="text-lg font-bold m-2  p-2"> {props.product}</p>
                    <p className="text-sm m-2 p-2">{props.lastDate}</p>{" "}
                </h1>
                <h1 className="font-bold text-3xl px-8 my-auto">
                    {"R$ "}
                    {props.lastCotacao}
                </h1>
            </div>
            <div className="m-4 "></div>
        </div>
    );
};
export default PricesOfCeasa;
