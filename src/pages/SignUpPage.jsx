import TitleForm from "../components/titleForm";
import FormField from "../components/FormField";
import { KeyRound, Mail, PhoneCallIcon, Smartphone, User2Icon } from "lucide-react";
import { useState } from "react";
import FormContainer from "../components/FormContainer";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Apellido", lastName);
    console.log("celu", cellphone);
    console.log("Email", email);
    console.log("Phone:", phone);
  }

  const fields = [
    {
      fieldName: 'name',
      lable: 'Ingrese su nombre',
      FieldIcon: User2Icon,
      fieldValue: name,
      onChange: setName,
      type: 'text',
      placeholder: 'ej.:Juan',
    },

    {
      fieldName: 'lastName',
      lable: 'Ingrese su apellido',
      FieldIcon: User2Icon,
      fieldValue: lastName,
      onChange: setLastName,
      type: 'text',
      placeholder: 'Ej.: Perez',
    },

    {
      fieldName: 'email',
      label: 'Ingrese su correo',
      FieldIcon: Mail,
      fieldValue: email,
      onChange: setEmail,
      type: 'email',
      placeholder: 'Ej.: 2XN0a@example.com',
    },

    {
      fieldName: 'phone',
      label: 'Ingrese su Teléfono',
      FieldIcon: Smartphone,
      fieldValue: phone,
      onChange: setPhone,
      type: 'tel',
      placeholder: 'Ej.: 1152658988',
    },

    {
      fieldName: 'password',
      label: 'Ingrese su contraseña',
      FieldIcon: KeyRound,
      fieldValue: password,
      onChange: setPassword,
      type: 'password',
      placeholder: 'Ej.: 123456',
    },
  ];

  return (
    <div>

      <FormContainer title="Registrarse" fields={fields} onSubmit={handleSubmit} />

    </div>
  );
};

export default SignUpPage