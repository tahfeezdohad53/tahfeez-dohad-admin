"use client";
import { api } from "@/shared/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { createContext, useContext } from "react";


const Context = createContext();
function UserProvider({ children }) {
  
  const { data: user, isFetching, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
  });
  const router = useRouter();
  
  
  async function getUser() {
    try {
      const { data } = await api.get("/user/getUser");
      return data.user;
    } catch (err) {
      console.log("something went wrong");
      router.replace('/auth');
      return {};
    }
  }
  return (
    <Context.Provider value={{ user, isFetching, isPending }}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;

export function useUser() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  return context;
}
