// register.ts

import { formSchema } from "@/data/mockdata";
import { UserData, useUser } from "@/store/userContext";
import { z } from "zod";

// Function to register a new user

export async function registerUser(userData: z.infer<typeof formSchema>): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.error };
      }
    } catch (error) {
      return { success: false, message: 'An error occurred during registration.' };
    }
  }

  
  // login.ts

// Function to authenticate a user
export async function loginUser(credentials: {
    email: string;
    password: string;
  }): Promise<{ success: boolean; data?: UserData|null; error?: string }> {

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return { success: true, data: data.data };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error };
      }
    } catch (error) {
      return { success: false, error: 'An error occurred during login.' };
    }
  }
  