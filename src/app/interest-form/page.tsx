"use client"
import { useState } from 'react'
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
    fullName: string;
    
  };
  
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.fullName ? values : {},
      errors: !values.fullName
        ? {
            fullName: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
    };
  };

export default function interestForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <main className="flex flex-col min-h-fit">

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full name" {...register("Full name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <select {...register("Year")}>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="5th yr+">5th yr+</option>
                </select>
                <select {...register("Major")}>
                    <option value="Aerospace Science and Engineering">Aerospace Science and Engineering</option>
                    <option value="Biochemical Engineering">Biochemical Engineering</option>
                    <option value="Biological Systems Engineering">Biological Systems Engineering</option>
                    <option value="Biomedical Engineering">Biomedical Engineering</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Environmental Engineering">Environmental Engineering</option>
                    <option value="Materials Science and Engineering ">Materials Science and Engineering </option>
                    <option value="Mechanical Engineering ">Mechanical Engineering </option>
                </select>

                <input type="submit" />
            </form>
        </main>
    )
}
