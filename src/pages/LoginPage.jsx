import { Mail, KeyRound } from "lucide-react"
import { useState } from "react";
import FormContainer from "../components/FormContainer";



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const fields = [
    {
      fieldName: 'email',
      label: 'Ingrese su correo',
      FieldIcon: Mail,
      fieldValue: email,
      onChange: setEmail,
      type: 'email',
      placeHolder: 'Ej.: 2XN0a@example.com',
    },

    {
      fieldName: 'password',
      label: 'Ingrese su contraseña',
      FieldIcon: KeyRound,
      fieldValue: password,
      onChange: setPassword,
      type: 'password',
      placeHolder: 'Ej.: 123456',
    },
  ]
  return (

    <FormContainer title="Iniciar Sesión" fields={fields} onSubmit={handleSubmit} />
  );
};

export default LoginPage