"use client";
import { api } from "@/shared/lib/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { createContext, useContext, useState } from "react";

async function getUser() {
  try {
    const { data } = await api.get("/user/getUser");
    console.log(data);
    return data.user;
  } catch (err) {
    console.log("something went wrong");
    return {};
  }
}

const Context = createContext();
function UserProvider({ children }) {
  
  const { data: user, isFetching, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
  });

  
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
