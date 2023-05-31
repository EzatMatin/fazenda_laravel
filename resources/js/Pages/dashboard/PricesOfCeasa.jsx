const PricesOfCeasa = (props) => {
    return (
        <div className="flex flex-row">
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
                <h1 className="font-bold text-l mb-2">
                    Preço da pimenta na Ceasa Minas por período de 4 semanas
                </h1> 
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed, dolores perspiciatis nulla consectetur quisquam cumque
                    possimus, delectus cum mollitia veritatis voluptatibus
                    soluta natus odit expedita minus reiciendis. Excepturi,
                    voluptatibus quis.
                </p>
            </div>
        </div>
    );
};
export default PricesOfCeasa;
