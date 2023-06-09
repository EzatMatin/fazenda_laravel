const PricesOfCeasa = (props) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="m-4">
                <h1 className="font-bold mb-2">
                    Última cotação do {props.product}
                    <p className="text-3xl m-2 p-2">{props.lastDate}</p>{" "}
                </h1>
                <h1 className="font-bold mb-2">
                    Cotação:{" "}
                    <p className="text-3xl m-2 p-2">{"R$ " }{props.lastCotacao}</p>{" "}
                </h1>
            </div>
            <div className="m-4 ">
                
            </div>
        </div>
    );
};
export default PricesOfCeasa;
