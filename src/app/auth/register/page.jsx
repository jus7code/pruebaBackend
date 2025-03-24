"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
function RegisterPage() {
  const { register , handleSubmit, formState:{errors}, watch} = useForm();
  const router = useRouter();
  const isAdmin = watch("admin")

  {/* Request Api*/ }
  const onSubmit =handleSubmit(async (data) => {
    if (data.password != data.confirmPassword){
        return alert("Las contraseñas no coincides")
      }
    const res=  await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            name: data.username,
            email:data.email,
            password:data.password,
            isAdmin:data.admin,
        }),
        headers: {'Content-type':'application/json'}
    });
    const resJSON = await res.json();
    console.log(resJSON);
    if(res.ok){
        router.push('/auth/login')
    }

  });




  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      {/* Formulario de registro */}
      <form action="" onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Registrar usuario</h1>
  
        {/* Input Nombre de Usuario */}
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">Nombre de usuario</label>
        <input type="text" {...register("username", { required: { value: true, message: "El nombre de usuario es un campo obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Ingresa aquí el nombre de usuario"/>
        {errors.username && (<span className="text-red-500 text-sm">{errors.username.message}</span>)}
  
        {/* Input Correo */}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">Correo</label>
        <input type="email" {...register("email", { required: { value: true, message: "El correo es un campo obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Ingresa aquí tu correo electrónico"/>
        {errors.email && (<span className="text-red-500 text-sm">{errors.email.message}</span>)}
  
        {/* Input Contraseña */}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">Contraseña</label>
        <input type="password" {...register("password", { required: { value: true, message: "La contraseña es un espacio obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Crea tu nueva contraseña"/>
        {errors.password && (<span className="text-red-500 text-sm">{errors.password.message}</span>)}
  
        {/* Input Confirmar Contraseña */}
        <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">Confirma la contraseña</label>
        <input type="password" {...register("confirmPassword", { required: { value: true, message: "Repetir la contraseña es obligatorio" } })} className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" placeholder="Repite la contraseña"/>
        {errors.confirmPassword && (<span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>)}
  
        {/* Casilla de verificación para administrador */}
        <label className="text-slate-500 mb-2 block text-sm">
          <input type="checkbox" {...register("admin")} className="mr-2"/> ¿Eres administrador?
        </label>
  
        {/* Botón Registrar */}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mb-3  hover:bg-blue-700 transition">Registrar</button>
  
        {/* Botón para ir a la página de inicio */}
        <a href="/" className="w-full block text-center bg-gray-600 text-white p-3 rounded-lg mb-3 hover:bg-gray-700 transition">
          Volver a Inicio
        </a>
  
        {/* Botón para ir a la página de inicio de sesión */}
        <a href="/auth/login" className="w-full block text-center bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
          ¿Ya tienes cuenta? Inicia Sesión
        </a>
      </form>
    </div>
  );
  
}

export default RegisterPage;
