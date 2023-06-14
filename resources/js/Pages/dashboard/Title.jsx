const Title = (props) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="">
                <h1 className="font-bold ">
                    Welcome, {props.user}
                </h1>
            </div>
        </div>
    );
};
export default Title;
