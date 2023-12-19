import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import EpicLogo from "@/assets/Epic-Games.png";
const LogoDropdow = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className="flex row items-center justify-center"
            onClick={toggle}
        >
            <Image src={EpicLogo} alt="" className="w-[40px] h-[40px]" />
            <div
                className={`transition-transform transform ${open ? 'rotate-180' : ''} hover:`}
            >
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default LogoDropdow