"use client";
import React from 'react'
import {useForm, } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { register , handleSubmit, formState:{errors}} = useForm();
  const router = useRouter();
  const onSubmit =handleSubmit(async (data) => {
    console.log(data)
    const res= await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    })
    if (res.error){
      alert(res.error);
    }
    else{
      router.push("/dashboard")
    }
    console.log(res)
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Inicio de sesión</h1>
  
        {/* Input Email */}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">Email</label>
        <input type="email" {...register("email", { required: { value: true, message: "El email es un campo obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Ingresa tu email"/>
        {errors.email && (<span className="text-red-500 text-sm">{errors.email.message}</span>)}
  
        {/* Input Contraseña */}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">Contraseña</label>
        <input type="password" {...register("password", { required: { value: true, message: "La contraseña es un campo obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Inserta tu contraseña"/>
        {errors.password && (<span className="text-red-500 text-sm">{errors.password.message}</span>)}
  
        {/* Botón Ingresar */}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mb-3 hover:bg-blue-700 transition">Ingresar</button>
  
        {/* Botón Volver a Inicio */}
        <a href="/" className="w-full block text-center bg-gray-600 text-white p-3 rounded-lg mb-3 hover:bg-gray-700 transition">
          Volver a Inicio
        </a>
  
        {/* Botón Ir a Registro */}
        <a href="/auth/register" className="w-full block text-center bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
          ¿No tienes cuenta? Regístrate
        </a>
      </form>
    </div>
  );
}

export default LoginPage