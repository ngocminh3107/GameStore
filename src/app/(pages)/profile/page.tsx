"use client";
import axios from "axios"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";

function Profile() {
    const router = useRouter();
    const [data, setData] = useState({
        userId: "",
        name: "",
        email: "",
        avatar: "",
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

    const getData = async () => {
        try {
            const res = await axios.get("/api/user/userdata");
            setData({
                userId: res.data.data.userId,
                name: res.data.data.name,
                email: res.data.data.email,
                avatar: res.data.data.avatar,
                role: res.data.data.role,
            });
        } catch (error: any) {
            console.log("Get data failed", error.message);
            toast.error(error.message);
        }
    }
    return (
        <div>profile{data.name}
            <button
                onClick={logout}
                className="btn p-2  bg-green-600 rounded-lg mb-4 focus:outline-none "
            >
                logout
            </button>
            <h2 className="p-2 bg-green-700"
                onClick={getData}
            >
                {!data ? "get data" : <Link href={`/profile/${data.userId}`}> {data.userId}</Link>}
            </h2>

        </div>
    )
}

export default Profile