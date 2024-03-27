import * as z from "zod";

const formSchemaRegistration = z
  .object({
    name: z.string().min(1),
    lastname: z.string().min(1),
    university:z.string(),
    course:z.string(),
    faculty:z.string(),
    speciality:z.string(),
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
    accountType: z.string(),
    gender: z.string(),
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


  const formSchemaLogin = z
  .object({
    email: z.string().min(1),
    password: z.string().min(3)
  })


  const formSchemaSkillSwapFilter = z
  .object({
    sort_type: z.any(),
    start_date: z.date().or(z.undefined()),
    end_date: z.date().or(z.undefined()),
    start_cost: z.string(),
    end_cost: z.string(),
  })
  


  const formSchemaNewFormCF = z
  .object({
    btnType:z.string(),
    photo: z.string(),
    content:z.string().min(5),
    amount_money:z.string().min(1),
    planning_money:z.string().min(1),
    title:z.string().min(1)
  })



export {formSchemaLogin,formSchemaRegistration,formSchemaSkillSwapFilter, formSchemaNewFormCF}