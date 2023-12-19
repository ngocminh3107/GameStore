"use client";
import Link from "next/link"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import Image from "next/image";
import ShopSvg from "@/assets/shop.svg";
import { FaRegUser } from "react-icons/fa";
import LogoDropdow from "@/components/logoDropdow";
const NavHomePage = () => {
    const dropdownMenuItems = [
        {
            label: "My Achievements",
            link: "/achievements",
        },
        {
            label: "Epic rewards",
            link: "/rewards",
        },
        {
            label: "Epic Wallet",
            link: "/wallet",
        },
        {
            label: "Coupon",
            link: "/coupon",
        },
        {
            label: "Account",
            link: "/account",
        },
        {
            label: "Redeem Code",
            link: "/redeem",
        }, {
            label: "whishlist",
            link: "/whishlist"
        }
    ]
    const router = useRouter();
    const [data, setData] = useState({
        userId: "",
        name: "",
        email: "",
        imageUrl: "",
        role: "",
    })
    const logout = async () => {
        try {
            await axios.get("/api/user/logout");
            toast.success("Logout success");
            router.push("/");
        } catch (error: any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/api/user/userdata");
                setData({
                    userId: res.data.data.userId,
                    name: res.data.data.name,
                    email: res.data.data.email,
                    imageUrl: res.data.data.imageUrl,
                    role: res.data.data.role,
                });
            } catch (error: any) {
                console.log("Get data failed", error.message);
                toast.error(error.message);
            }
        }
        getData();
    }, []);

    return (
        <div className="flex row  justify-between bg-[#101014] items-center px-[24px] py-[20px]">
            <div className="flex row items-center">
                <div>
                    <LogoDropdow />
                </div>
                <div>
                    <Image src={ShopSvg} alt="" width={50} height={50} />
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">user</Link>
            </div>

            <div className="flex row items-center">
                <div className="dropdown dropdown-bottom items-center justify-center">
                    <div tabIndex={0} role="button" className="p-2 mr-3 items-center justify-center text-center w-[32px] h-[32px] bg-[#515050] rounded-full">
                        <FaRegUser />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mr-2">
                        {
                            dropdownMenuItems.map((item, index) => (
                                <li key=
                                    {index}>
                                    <p>{item.label}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <button className="rounded-[8px] text-sm cursor-pointer px-2.5 py-1 bg-[#26BBFF] text-[black] font-medium first-letter:uppercase ">
                    download
                </button>
            </div>
        </div>
    )
}

export default NavHomePage