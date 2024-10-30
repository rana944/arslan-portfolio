import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { setBlur } from "./utils";

interface IProps {
    isOpen?: boolean;
    setOpen: (val: boolean) => void;
}

const MenuNavigation = (props: IProps) => {
    const navigate = useNavigate();
    const sidebarContentEl = document.getElementById('modal-root');
    if (props.isOpen) {
        return createPortal(
            <div className="font-nunito pl-10 pt-10 text-3xl absolute w-screen h-screen left-0 right-0 top-0 bg-[#00000099]"
                onClick={() => {
                    setBlur(0);
                    props.setOpen(false)
                }}
            >
                <span className="font-bold">Mobile Developer</span>
                <div
                    onClick={() => {
                        setBlur(0);
                        navigate('/');
                    }}
                    className="font-medium text-xl decoration-1 underline underline-offset-4 mt-8">
                    Home
                </div>
                <div
                    onClick={() => {
                        setBlur(0);
                        navigate('/projects');
                    }}
                    className="font-medium text-xl decoration-1 underline underline-offset-4 mt-4">
                    Projects
                </div>
                <div
                    onClick={() => {
                        setBlur(0);
                        navigate('/services')
                    }}
                    className="font-medium text-xl decoration-1 underline underline-offset-4 mt-4">
                    Services
                </div>
            </div>,
            sidebarContentEl!,
        );
    }

    return null;
}

export default MenuNavigation;