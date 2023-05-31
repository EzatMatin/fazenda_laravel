import React from "react";
import "./style.css";
import image2 from "../../../assets/image 2.jpg";
import image3 from "../../../assets/image 3.png";
import image1 from "../../../assets/image 1.png";
import Vector1 from "../../../assets/Vector 1.svg";
import Vector2 from "../../../assets/Vector 2.svg";
import Vector3 from "../../../assets/Vector 3.svg";
import Vector5 from "../../../assets/Vector 5.svg";
import Vector4 from "../../../assets/Vector 4.svg";
import line from "../../../assets/line.svg";
import Vector0 from "../../../assets/Vector 0.svg";

import LandingPage from "@/Layouts/LandingPage";

function Blog() {
    return (
        <LandingPage>

            <div className="Blog flex flex-col lg:flex-col justify-center items-center lg:px-4 m-auto max-w-[343px] lg:max-w-[1240px] md:max-w-[820px] ">
                <div className="  lg:w-screen lg:h-screen flex lg:text-center lg:justify-center animate-[fadeInUp_0.3s_ease-in]">
                    <h1 className=" header absloute lg:text-5xl align-middle text-white font-bold lg:p-52 lg:mt-[200px] uppercase md:text-2xl md:pt-[200px] mt-[100px] text-[15px]">
                        bem-vindo ao blog da
                        <br /> Fazenda Santa Luzia
                    </h1>
                </div>
                <div className="content-r flex lg:flex-row bg-white lg:w-[90%] lg:mt-[200px] md:w-[80%] md:m-[200px] md:justify-center md:flex-row md:mt-[100px] flex-col justify-center items-center mt-[50px]  ">
                    <img
                        src={image2}
                        alt="Micro-Irrigacao"
                        className=" lg:w-[50%] md:w-[45%] w-[90%] image1 "
                    />
                    <div className="content-info flex lg:flex-col lg:pl-[70px] md:pl-[20px] md:pr-[20px] lg:pr-[80px] lg:w-[70%] md:w-[70%] flex-col">
                        <h1 className="content-heading text-[#63ABFD] text-[10px] uppercase lg:text-4xl italic lg:text-left text-center md:text-left ">
                            Micro <br /> irrigacao
                        </h1>
                        <hr className=" bg-[#8BC83F] h-[3px] lg:w-[350px] lg:mt-[30px]"></hr>
                        <p className="content-p lg:text-left md:text-left lg:text-[14px] md:text-[9px] mt-[10px] text-center text-[10px]">
                            A micro irrigação é uma técnica de irrigação
                            eficiente e sustentável que permite a distribuição
                            controlada de água diretamente nas raízes das
                            plantas por meio de pequenos gotejadores ou
                            microaspersores. Essa técnica de irrigação é
                            especialmente útil em regiões com escassez de água,
                            pois permite uma utilização mais racional desse
                            recurso natural. Além disso, a micro irrigação
                            também ajuda a reduzir o desperdício de água,
                            evitando a irrigação em áreas desnecessárias. Com a
                            micro irrigação, é possível fornecer a quantidade
                            adequada de água para cada planta, aumentando a
                            produtividade e a <br />
                            <a
                                href="#"
                                className="read-more font-semibold underline italic "
                            >
                                {" "}
                                ...Sabe Mais
                            </a>
                        </p>
                        <p className="date-and-credits text-[#63ABFD] md:text-[9px] lg:text-[15px] text-[10px] lg:text-left text-center md:text-left">
                            31/07/2023 - Sao Paulo, Brazil
                        </p>
                    </div>
                </div>

                <div className="content-l flex md:flex-row lg:flex-row bg-white lg:w-[90%] w-[100%] md:w-[80%] md:justify-center md:mt-[-150px] flex-col justify-center items-center mt-[20px] ">
                    <div className="content-info flex lg:flex-col lg:w-[50%] lg:text-right md:text-right lg:pl-[70px] lg:pr-[80px] lg:ml-[140px] md:w-[70%] flex-col md:pl-[10px] md:ml-[50px] md:pr-[25px]">
                        <h1 className="content-heading text-[10px] uppercase lg:text-4xl italic text-[#63ABED] lg:text-right text-center md:text-right">
                            Auto
                            <br /> fertilizing
                        </h1>
                        <hr className=" hr2 bg-[#8BC83F] h-[3px] lg:w-[340px] lg:ml-[30px] md:ml-[40px] lg:mt-[30px] w-[300px]"></hr>
                        <p className="content-p1 lg:text-right md:text-right lg:text-[14px] mt-[10px] md:text-[9px] text-[10px] text-center md:m-0 lg:m-0 m-[12px]">
                            A micro irrigação é uma técnica de irrigação
                            eficiente e sustentável que permite a distribuição
                            controlada de água diretamente nas raízes das
                            plantas por meio de pequenos gotejadores ou
                            microaspersores. Essa técnica de irrigação é
                            especialmente útil em regiões com escassez de água,
                            pois permite uma utilização mais racional desse
                            recurso natural. Além disso, a micro irrigação
                            também ajuda a reduzir o desperdício de água,
                            evitando a irrigação em áreas desnecessárias. Com a
                            micro irrigação, é possível fornecer a quantidade
                            adequada de água para cada planta, aumentando a
                            produtividade e a <br />
                            <a
                                href="#"
                                className="read-more font-semibold underline italic "
                            >
                                {" "}
                                ...Sabe Mais
                            </a>
                        </p>
                        <p className="date-and-credits text-[#63ABFD] md:text-[9px] lg:text-[15px] text-[10px] lg:text-right text-center md:text-right">
                            31/07/2023 - Sao Paulo, Brazil
                        </p>
                    </div>

                    <img
                        src={image3}
                        alt="Micro-Irrigacao"
                        className=" lg:w-1/3 md:w-[30%] w-[80%] mb-3"
                    />
                </div>

                <div className="icons flex lg:flex-row justify-center items-center m-[50px] lg:space-x-[80px] md:space-x-[60px] space-x-[25px] ">
                    <div className="icon">
                        <img src={Vector1} className="md:w-[50%]" />
                        <p className="icon-info md:text-[10px] lg:text-[15px] text-[7px]">
                            A auto-fertilização <br />é o processo
                        </p>
                    </div>
                    <div className="icon ">
                        <img
                            src={line}
                            className="line lg:w-[18px] absolute lg:translate-y-[-30px] lg:translate-x-2 w-[10px] translate-y-[-30px] translate-x-[3px] md:translate-y-[-23px]"
                        />
                        <img
                            src={Vector0}
                            className="vector0 lg:w-[28px] absolute lg:translate-x-7 lg:translate-y-[-50px] w-[15px] translate-y-[-40px] translate-x-[16px] md:translate-y-[-33px]"
                        />
                        <img src={Vector2} className="md:w-[50%]" />
                        <p className="icon-info md:text-[10px] lg:text-[15px] text-[7px]">
                            A auto-fertilização <br />é o processo
                        </p>
                    </div>
                    <div className="icon">
                        <img src={Vector3} className="md:w-[50%]" />
                        <p className="icon-info md:text-[10px] lg:text-[15px] text-[7px]">
                            A auto-fertilização <br />é o processo
                        </p>
                    </div>
                    <div className="icon">
                        <img src={Vector4} className="md:w-[48%]" />
                        <p className="icon-info md:text-[10px] lg:text-[15px] text-[7px]">
                            A auto-fertilização <br />é o processo
                        </p>
                    </div>
                    <div className="icon">
                        <img src={Vector5} className="md:w-[50%]" />
                        <p className="icon-info md:text-[10px] lg:text-[15px] text-[7px]">
                            A auto-fertilização <br />é o processo
                        </p>
                    </div>
                </div>

                <h1 className="lg:text-4xl text-white uppercase bold md:text-2xl text-1xl">
                    our team
                </h1>
                <div className="team flex flex-row justify-center items-center">
                    <div className="person lg:w-[23%] lg:p-[20px] p-[10px] md:w-[25%]">
                        <img
                            src={image1}
                            alt="person"
                            className="person-image lg:w-[50%] md:w-[40%]"
                        />
                        <h5 className="person-name lg:text-[15px] text-[12px] md-[15px] lg:mt-[25px]">
                            Engineer
                        </h5>
                        <p className="person-bio lg:text-[13px] md:text-[9px] text-[6px]">
                            A auto-fertilização é o processo em que um organismo
                            se fertiliza a si mesmo, sem a necessidade de outro
                            organismo para fornecer o material genético.
                        </p>
                    </div>
                    <div className="person lg:w-[23%] lg:p-[20px] p-[10px] md:w-[25%]">
                        <img
                            src={image1}
                            alt="person"
                            className="person-image lg:w-[50%] md:w-[40%]"
                        />
                        <h5 className="person-name lg:text-[15px] text-[12px] lg:mt-[25px] md:text-[15px]">
                            Engineer
                        </h5>
                        <p className="person-bio lg:text-[13px] md:text-[9px] text-[6px]">
                            A auto-fertilização é o processo em que um organismo
                            se fertiliza a si mesmo, sem a necessidade de outro
                            organismo para fornecer o material genético.
                        </p>
                    </div>
                    <div className="person lg:w-[23%] lg:p-[20px] p-[10px] md:w-[25%]">
                        <img
                            src={image1}
                            alt="person"
                            className="person-image lg:w-[50%] md:w-[40%]"
                        />
                        <h5 className="person-name lg:text-[15px] text-[12px] lg:mt-[25px] md:text-[15px]">
                            Engineer
                        </h5>
                        <p className="person-bio lg:text-[13px] md:text-[9px] text-[6px]">
                            A auto-fertilização é o processo em que um organismo
                            se fertiliza a si mesmo, sem a necessidade de outro
                            organismo para fornecer o material genético.
                        </p>
                    </div>
                </div>
            </div>

        </LandingPage>
    );
}

export default Blog;
