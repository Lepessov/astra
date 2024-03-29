// register.ts

import { CFCard, QACard, SSCard } from "@/app/(working)/page";
import { formSchemaRegistration } from "@/form-schema";
import { UserData, useUser } from "@/store/userContext";
import { z } from "zod";
import axios, { AxiosResponse } from 'axios';

interface ISSCard{
  data:SSCard[]
}
interface ICFCard{
  data:CFCard[]
}
interface IQACard{
  data:QACard[]
}

// Function to register a new user

const apiURL = "http://127.0.0.1:8000"

export async function registerUser(userData: z.infer<typeof formSchemaRegistration>): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${apiURL}/api/register`, {
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
export async function loginUser(credentials: {
    email: string;
    password: string;
  }): Promise<{ success: boolean; data?: UserData|null; error?: string }> {

    try {
      const response = await fetch(`${apiURL}/api/login`, {
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
  
async function getAllCroudFunding(token:string): Promise<AxiosResponse<ICFCard>> {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace 'token' with your actual token value
      },
    };

    const res = await axios.get<ICFCard>(`${apiURL}/api/skill_funds/all`, config);
    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
async function getAllSkillSwap(token:string): Promise<AxiosResponse<ISSCard>> {

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace 'token' with your actual token value
      },
    };

    const res = await axios.get<ISSCard>(`${apiURL}/api/posts/all`, config);
    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
async function getAllQA(token:string): Promise<AxiosResponse<IQACard>> {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace 'token' with your actual token value
      },
    };
    const res = await axios.get<IQACard>(`${apiURL}/api/questions/all`, config);
    return res;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export interface FormSelectData {
  id: number;
  name: string;
  value: string;
}

export interface RegisterFormData{
  speciality: FormSelectData[];
  faculty: FormSelectData[];
  university: FormSelectData[];
}

async function getRegisterForm(): Promise<RegisterFormData> {
  try {
    const [specialityResponse, facultyResponse, universityResponse] = await Promise.all([
      axios.get<FormSelectData[]>(`${apiURL}/api/frontend/student/specialities`),
      axios.get<FormSelectData[]>(`${apiURL}/api/frontend/student/faculties`),
      axios.get<FormSelectData[]>(`${apiURL}api/frontend/student/universities`)
    ]);

    const speciality = specialityResponse.data;
    const faculty = facultyResponse.data;
    const university = universityResponse.data;

    return {speciality:speciality,faculty:faculty, university:university};
  } catch (error) {
    throw new Error((error as Error).message);
  }
}





export {
  getAllCroudFunding,
  getAllQA,
  getAllSkillSwap,
  getRegisterForm
}