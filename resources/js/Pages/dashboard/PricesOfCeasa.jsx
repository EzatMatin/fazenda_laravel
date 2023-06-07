const PricesOfCeasa = (props) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="m-4">
                <h1 className="font-bold mb-2">
                    Preço Pimentao Hoje:{" "}
                    <p className="text-3xl m-2 p-2">{props.price_min}</p>{" "}
                </h1>
                <h1 className="font-bold mb-2">
                    Preço Abacaxi Hoje:{" "}
                    <p className="text-3xl m-2 p-2"> 12.2R$ </p>{" "}
                </h1>
            </div>
            <div className="m-4 ">
                
            </div>
        </div>
    );
};
export default PricesOfCeasa;
