import React from "react";
import Vector55 from '..//../../assets/Vector 55.png';
import Vector56 from '..//../../assets/Vector 56.png';
import Vector57 from '..//../../assets/Vector 57.png';
import history1 from '..//../../assets/history1.png';
import history2 from '..//../../assets/history2.png';
import history3 from '..//../../assets/history3.png';
import history4 from '..//../../assets/history4.png';
import "./style.css";
import LandingPage from "@/Layouts/LandingPage";

function Historia() {
    return (
        <LandingPage >
            <div className="history flex flex-col justify-center lg:px-4 m-auto max-w-[343px] lg:max-w-[1240px] md:max-w-[820px]">
                <div className="content-1 flex mt-[30px]">
                    <div className="bio-image1 flex flex-col lg:w-[50%] lg:ml-[80px] lg:mt-[100px] md:mt-[50px] md:ml-[70px] md:w-[50%] w-[40%] ml-[20px]">
                        <h2 className=" text-white lg:text-3xl uppercase md:text-[12px] text-[8px] head">historia de fazenda santa luiza</h2>
                        <hr className="h-line bg-[#FEC200] w-[100%] h-[2px] mt-[20px]"></hr>
                        <p className=" text-justify mt-[10px] lg:text-[13px] md:text-[10px] text-[5px] tex">A micro irrigação é uma técnica de irrigação eficiente
                            e sustentável que permite a distribuição controlada de água
                            diretamente nas raízes das plantas por meio de pequenos gotejadores ou
                            microaspersores. Essa técnica de irrigação é  para a preservação do solo,
                            já que a água é aplicada diretamente na região das raízes, reduzindo a erosão
                            e o esc oamento superficial.</p>
                    </div>
                    <div className="flex lg:flex-row">
                        <img src={Vector55} className="line-1 lg:mt-[250px] lg:ml-[-410px] absolute lg:w-[500px] md:w-[300px] md:ml-[-280px] md:mt-[180px] w-[200px] mt-[90px] ml-[-150px]" />
                        <img src={history1} className="lg:w-[350px] lg:h-[450px] lg:ml-[80px] relative md:w-[250px] w-[150px] md:h-[250px] h-[150px] md:ml-[20px] ml-[40px] image1" />

                    </div>
                </div>



                {/*image2*/}
                <div className="content-2 flex flex-col lg:ml-[100px] lg:mt-[-100px] justify-center items-center md:mt-[-30px] md:ml-[70px] mt-[100px] ml-[-140px]">
                <img src={history3} className="lg:w-[450px] lg:h-[300px] lg:ml-[-200px] md:w-[300px] relative w-[150px] md:h-[250px] h-[150px] md:mt-[190px] md:ml-[-100px] image1 image11" />
                    <div className="bio-image w-[30%] lg:ml-[-200px] flex flex-col justify-center items-center lg:mt-[30px] md:mt-[30px] md:ml-[-90px] mt-[20px]">
                        <hr className="h-line bg-[#FEC200] w-[100%] h-[2px] mt-[-10px]"></hr>
                        <p className="mt-[10px] text-justify lg:text-[13px] md:text-[10px] text-[5px] tex">A micro irrigação é uma técnica de irrigação
                            eficiente e sustentável que permite a distribuição
                            controlada de água diretamente nas raízes das plantas
                            por meio de pequenos gotejadores ou microaspersores.
                            Essa técnica de irrigação é  para a preservação do solo,
                            já que a água é aplicada diretamente na região das raízes,
                            reduzindo a erosão e o escoamento superficial.</p>
                    </div>
                    <img src={Vector56} className="line-2 lg:w-[500px] absolute z-50 lg:mt-[700px] lg:ml-[530px] rotate-[20deg] md:w-[300px] md:mt-[500px] md:ml-[350px] w-[200px] mt-[200px] ml-[260px]" />
                </div>

                {/*image3*/}
                <div className="content-3 flex flex-col justify-center items-center lg:mt-[300px] lg:ml-[370px] md:ml-[250px] md:mt-[100px] mt-[100px] ml-[10px]">
                    <img src={history4} className="lg:w-[470px] md:w-[300px] w-[190px] image" />
                    <div className="bio-image w-[40%] flex flex-col justify-center items-center">
                        <hr className="h-line bg-[#FEC200] w-[100%] h-[2px] mt-[20px]"></hr>
                        <p className=" text-justify mt-[10px] lg:text-[13px] md:text-[10px] text-[5px] tex">
                            A micro irrigação é uma técnica de irrigação eficiente
                            e sustentável que permite a distribuição controlada de
                            água diretamente nas raízes das plantas por meio de pequenos
                            gotejadores ou microaspersores. Essa técnica de irrigação é
                            para a preservação do solo, já que a água é aplicada diretamente
                            na região das raízes, reduzindo a erosão e o escoamento superficial.
                        </p>
                    </div>
                    <img src={Vector57} className="line-3 lg:mr-[900px] lg:mt-[-400px] z-50 lg:w-[500px] md:w-[300px] md:mt-[-200px] md:mr-[600px] md:ml-[0px] w-[200px] ml-[-160px] mt-[-130px]" />
                </div>

                {/*image4*/}
                <div className="content-4 flex flex-col justify-center items-center lg:ml-[70px] lg:mt-[-50px] md:ml-[240px] md:mt-[-50px] ml-[-100px] mt-[-20px]">
                    <img src={history2} className="lg:w-[450px] lg:h-[300px] lg:mr-[470px] md:w-[300px] md:mr-[470px] w-[170px] image" />
                    <div className="bio-image lg:w-[30%] flex flex-col justify-center items-center lg:mr-[470px] md:mr-[470px] pb-[50px] md:w-[40%] md:pb-[100px] w-[30%]">
                        <hr className="h-line h-line bg-[#FEC200] w-[100%] h-[2px] mt-[20px]"></hr>
                        <p className="text-justify mt-[10px] lg:text-[13px] md:text-[10px] text-[5px] tex">A micro irrigação é uma técnica de irrigação
                            eficiente e sustentável que permite a distribuição
                            controlada de água diretamente nas raízes das plantas
                            por meio de pequenos gotejadores ou microaspersores. Essa
                            técnica de irrigação é  para a preservação do solo, já que
                            a água é aplicada diretamente na região das raízes, reduzindo
                            a erosão e o escoamento superficial.</p>
                    </div>
                </div>


            </div>
           
        </LandingPage>
    )
}


export default Historia;
