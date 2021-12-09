
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {mascota, propietario, correo, fecha, sintomas, id} = paciente

    const handleEliminar =() =>{
        const respuesta = confirm('¿Desea eliminar el paciente?')

        if(respuesta){
           eliminarPaciente(id)
        }
    }
   
    return ( 
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"> 

          <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {''}
             <span className="font-normal normal-case">{mascota}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
              <span className="font-normal normal-case">{propietario}</span>
           </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
             <span className="font-normal normal-case">{correo}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
             <span className="font-normal normal-case">{fecha}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
             <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-10"> 
                <button
                   type = "button"
                   className = "bg-indigo-700 hover:bg-indigo-800 py-2 px-10 text-white font-bold uppercase rounded-lg"
                   onClick = {() => setPaciente(paciente)}
                >Editar</button>

                <button
                   type = "button"
                   className = "bg-red-700 hover:bg-red-800 py-2 px-10 text-white font-bold uppercase rounded-lg"
                   onClick = {handleEliminar}
                >Eliminar</button>
          </div>

       </div>

     );
}
 
export default Paciente;