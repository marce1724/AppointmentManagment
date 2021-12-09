import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

     const [mascota, setMascota] = useState('');
     const [propietario, setPropietario] = useState('');
     const [correo, setCorreo] = useState('');
     const [fecha, setFecha] = useState('');
     const [sintomas, setSintomas] = useState('');
     const [error, setError] = useState(false);

     useEffect(() =>{
          if(Object.keys(paciente).length > 0){
             setMascota(paciente.mascota)
             setPropietario(paciente.propietario)
             setCorreo(paciente.correo)
             setFecha(paciente.fecha)
             setSintomas(paciente.sintomas)
          }

     }, [paciente])

      //Funcion para generar ID único
      const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        
        return random + fecha
      }

     const handleSubmit = (e) =>{
         e.preventDefault();

         //Validación del formulario
         if([mascota, propietario, correo, fecha, sintomas].includes('')){
             setError(true);
             return;
         }
         setError(false);

         //Objeto Paciente
         const objetoPaciente = {
             mascota, 
             propietario, 
             correo, 
             fecha, 
             sintomas
         }

         if(paciente.id){
             //Editando el registro
             objetoPaciente.id = paciente.id
             const pacientesActualizados = pacientes.map(pacienteState => 
                 pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

             setPacientes(pacientesActualizados)
             setPaciente({})

         }else{ 
             //Agregando nuevo registro
             objetoPaciente.id = generarId()
             setPacientes([...pacientes, objetoPaciente])
         }





         //Reiniciar Formulario
         setMascota('');
         setPropietario('');
         setCorreo('');
         setFecha('');
         setSintomas('');

     }
  

    return (  
         <div className="md:w-1/2, lg:w-2/5 mx-5">
             <h2 className="font-black text-2xl text-center">Seguimiento de pacientes</h2>

             <p className="text-xl mt-5 mb-10 text-center">Añade pacientes y 
             <span className="text-indigo-700 font-bold"> administralos</span></p>

             <form 
                 onSubmit = {handleSubmit}
                 className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                 
                 {error && 
                     <Error
                         mensaje="Todos los campos son requeridos"
                     />
                  }

                 <div className="mb-5">
                     <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                     <input 
                         id="mascota"
                         type="text"
                         placeholder="Nombre de la mascota"
                         className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                         value={mascota}
                         onChange = {(e) => setMascota(e.target.value)}
                      />
                 </div>
                 <div className="mb-5">
                     <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                     <input 
                         id="propietario"
                         type="text"
                         placeholder="Nombre del propietario"
                         className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                         value={propietario}
                         onChange = {(e) => setPropietario(e.target.value)}
                     />
                 </div>
                 <div className="mb-5">
                     <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo de contacto</label>
                     <input 
                         id="email"
                         type="email"
                         placeholder="Correo de contacto"
                         className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                         value={correo}
                         onChange = {(e) => setCorreo(e.target.value)}
                         />
                 </div>
                 <div className="mb-5">
                     <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                     <input 
                         id="fecha"
                         type="date"
                         className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                         value={fecha}
                         onChange = {(e) => setFecha(e.target.value)}
                      />
                 </div>
                 <div className="mb-5">
                     <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                     <textarea
                         id="sintomas"
                         placeholder="Describe los sintomas"
                         className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                         value={sintomas}
                         onChange = {(e) => setSintomas(e.target.value)}
                     ></textarea>
                 </div>

                 <input 
                     type="submit"
                     className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                     value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                 />
             </form>
         </div>
   

    ); 
}
 
export default Formulario;