import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project1_1 from "./assets/project-1_1.png";
import Project2_1 from "./assets/project-2_1.png";
import BackButton from "./assets/back-button.png";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "./assets/menu-icon.svg";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";
import { setBlur } from "./utils";

const Services = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 800px)'
    })
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className="w-screen h-screen font-nunito overflow-scroll pb-44">
            {isDesktopOrLaptop ? (
                <div className="flex px-20 items-center justify-between py-5">
                    <img src={BackButton} className="h-[70px] w-[70px]" />
                    <div className="font-abhaya text-4xl text-[#513838] text-left w-[55%]">Services</div>
                </div>
            ) : (
                <div className="bg-[#985151] h-20 flex items-center px-4 justify-between">
                    <img onClick={() => {
                        setBlur(10);
                        setDrawerOpen(true)
                    }} src={MenuIcon} className="h-[30px] w-[30px] mr-2" />
                    <div className="font-abhaya text-3xl text-[#FFFFFF] text-left w-[60%]">Services</div>
                </div>
            )}
            {isDesktopOrLaptop ? (
                <div className="flex justify-between text-[#985151] font-bold mt-10 px-20">
                    <div className="text-2xl text-left" style={{ width: "100%" }}>
                        Mobile Development
                        <p className="text-[#AF9F9F] font-medium text-lg break-words mt-8 w-[45%]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                    {isDesktopOrLaptop && <img src={Project1} width={"20%"} />}
                </div>
            ) : (
                <div className="text-left px-6 pt-8">
                    <h1 className="text-2xl text-[#985151] font-bold">
                        Mobile Development
                    </h1>
                    <div className="flex justify-between font-medium text-[#AF9F9F]">
                        <h1 className="text-lg w-[60%] mt-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </h1>
                        <img src={Project1_1} className="w-[30%] -mr-5" />
                    </div>
                </div>
            )}

            {isDesktopOrLaptop ? (
                <div className="flex justify-between text-[#985151] font-bold mt-10 px-20">
                    <div className="text-2xl text-left" style={{ width: "100%" }}>
                        Web Development
                        <p className="text-[#AF9F9F] font-medium text-lg break-words mt-4 w-[45%]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                    {isDesktopOrLaptop && <img src={Project2} width={"20%"} />}
                </div>
            ) : (
                <div className="text-left mx-6 mt-4">
                    <h1 className="text-2xl text-[#985151] font-bold">
                        Web Development
                    </h1>
                    <div className="flex justify-between font-medium text-[#AF9F9F]">
                        <h1 className="text-lg w-[60%] mt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        </h1>
                        <img src={Project2_1} className="w-[20%] mr-0" />
                    </div>
                </div>
            )}

            <MenuNavigation isOpen={drawerOpen} setOpen={setDrawerOpen} />
        </div>
    )
}

export default Services;