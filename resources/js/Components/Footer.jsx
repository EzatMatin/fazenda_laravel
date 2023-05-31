import icon from '../../assets/icon.svg';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

 function Footer() {
    return (
        <div className="bg-[#FAF3E3] h-[60px] w-[100vw] flex lg:md:flex-row flex-col items-center justify-center">
        <p className="lg:text-[14px] md:text-[10px] text-[9px]">
          © Fazenda Santa Luiza 2023
        </p>
        <div className="flex flex-row lg:ml-[50%] items-center mt-2 justify-center  space-x-4">
          <img src={icon} className="w-[24px] transition ease-in-out delay-50 hover:scale-110 duration-200" />
          <img src={icon3} className="w-[24px] transition ease-in-out delay-50 hover:scale-110 duration-200" />
          <img src={icon2} className="w-[24px] transition ease-in-out delay-50 hover:scale-110 duration-200" />
          <img src={icon1} className="w-[24px] transition ease-in-out delay-50 hover:scale-110 duration-200" />
        </div>
      </div>
    )
}


export default Footer;