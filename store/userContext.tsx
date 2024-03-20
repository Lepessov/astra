"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getRegisterForm, RegisterFormData, FormSelectData } from "../services/auth"; // Import getRegisterForm function and related types

export interface UserData {
  name: string;
  photo: string;
  token: string;
  student_id: number;
  email: string;
  is_student: boolean;
}

interface UserContextData {
  user: UserData | null | undefined;
  setUser: (user: UserData | null | undefined) => void;
  formData: RegisterFormData | null;
}

const UserContext = createContext<UserContextData>({
  user: null,
  setUser: () => {},
  formData: null,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null | undefined>(null);
  const [formData, setFormData] = useState<RegisterFormData | null>(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching form")
      try {
        const formData = await getRegisterForm();
        setFormData(formData);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    const storedUser = JSON.parse(localStorage.getItem('myAppUser') || 'null');
    if (storedUser) {
      setUser(storedUser);
    }

    fetchData(); // Fetch form data

    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('myAppUser', JSON.stringify(user));
    } else {
      localStorage.setItem('myAppUser', JSON.stringify(null));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, formData }}>
      {dataLoaded ? children : <div>Loading...</div>}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser, formData } = useContext(UserContext);

  return { user, setUser, formData };
};
