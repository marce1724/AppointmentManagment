
const Error = ({mensaje}) => {

    return (    
     <div className="bg-red-800 text-center text-white p-3 uppercase font-bold mb-4 rounded-md">
          <p>{mensaje}</p>
     </div>
       

    );
}
 
export default Error;