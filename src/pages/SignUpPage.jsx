import TitleForm from "../components/titleForm";
import FormField from "../components/FormField";
import { KeyRound, Mail, PhoneCallIcon, User2Icon } from "lucide-react";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Apellido", lastName);
    console.log("celu", cellphone);
    console.log("Email", email);
  }

  return (
    <div>
      <TitleForm title={"Registrarse"} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form onSubmit={handleSubmit} className="space-y-10">
            <FormField fieldName="nombre" FieldIcon={User2Icon} fieldValue={name} onChange={setName} />
            <FormField fieldName="Apellido" FieldIcon={User2Icon} fieldValue={lastName} onChange={setLastName} />
            <FormField fieldName="teléfono" FieldIcon={PhoneCallIcon} fieldValue={cellphone} onChange={setCellphone} />
            <FormField fieldName="email" FieldIcon={Mail} fieldValue={email} onChange={setEmail} />
            <button className="w-full flex justify-center border rounded-md 
            border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-700
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage