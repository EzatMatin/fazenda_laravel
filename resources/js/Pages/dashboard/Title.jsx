const Title = (props) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="m-4">
                <h1 className="font-bold mb-2">
                    Welcome, {props.user}
                </h1>
            </div>
        </div>
    );
};
export default Title;
