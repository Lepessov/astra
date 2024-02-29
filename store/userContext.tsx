"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of user data (you can adjust this based on your actual user data structure)
export interface UserData {
  token:string;
  student_id:number;
  email:string;
  is_student:boolean;
}
// Create a context for user data
const UserContext = createContext<{ user: UserData | null | undefined; setUser: (user: UserData | null | undefined) => void }>({
  user: null,
  setUser: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null | undefined>(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Load user data from localStorage when the app starts
    const storedUser = JSON.parse(localStorage.getItem('myAppUser') || 'null');
    console.log('get localstorage')
    if (storedUser) {
      setUser(storedUser);
      setDataLoaded(true);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user data
export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  // Update user data in localStorage when setUser is called
  useEffect(() => {
    if (user) {
      localStorage.setItem('myAppUser', JSON.stringify(user));
    }
  }, [user]);

  return { user, setUser };
};
