import { useEffect, useState } from "react";
// import useAuthStore from "../stores/authStore";
import api from "../utils/api";

export default function Profile() {
     const [user, setUser] = useState (null);
     console.log(user);
     

    useEffect (() => {
        const fetchUserProfile = async() => {
            try{
                const response = await api.get("/api/auth/me");
                setUser(response.data);
                // console.log(response.data);
            }catch (error) {
                console.error("Failed to fetch profile", error);
                
            }
        };
        fetchUserProfile();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }


    return(
        <div className="max-w-2xl mx-auto">
            <h1 className="text-21 font-bold mb-6">Profile</h1>

            <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-green-700">
                            Name
                        </label>
                        <p className="mt-1 text-lg">{user.user.name} </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-green-700">
                            Email
                        </label>
                        <p className="mt-1 text-lg">{user.user.email}</p>
        
                    </div>
                </div>
            </div>
        </div>
    );
}