import * as z from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1),
    lastname: z.string().min(1),
    university:z.string().optional(),
    course:z.string().optional(),
    faculty:z.string().optional(),
    speciality:z.string().optional(),
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
    accountType: z.enum(["student", "user"]),
    gender: z.enum(["Male","Female","Other"]),
    agreement: z.boolean().default(false).optional(),
    contact_number:z.string().min(1),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "student") {
        return !!data.university;
      }
      data.university = ""
      return true;
    },
    {
      message: "Enter your university",
      path: ["university"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "student") {
        return !!data.course;
      }
      data.course = ""
      return true;
    },
    {
      message: "Enter your course",
      path: ["course"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "student") {
        return !!data.faculty;
      }
      data.faculty="" 
      return true;
    },
    {
      message: "Enter your faculty",
      path: ["faculty"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "student") {  
        return !!data.speciality;
      }
      data.speciality="" 
      return true;
    },
    {
      message: "Enter your speciality",
      path: ["speciality"],
    }
  );