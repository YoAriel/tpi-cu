
const FormField = ({ fieldName, label, FieldIcon, fieldValue, onChange, type = "text", placeHolder = "" }) => {

    // const handleInputChange = (event) => {
    //     onChange(event.target.value)
    // }
    return (
        <div className="flex flex-col mt-4">
            {label && <label htmlFor="name" className="text-gray-300 mb-3 block font-medium text-sm">{label}</label>}
            {/* <label htmlFor={fieldName} className="block text-sm font-medium text-gray-300 mb-3" >
                Ingrese su {fieldName}
            </label> */}
            <div className="relative rounder-md shadow-sm">
                {FieldIcon && <div className="absolute inset-y-0 left-0 flex items-center">
                    <FieldIcon className="h-5 text-gray-300 mx-2" />
                </div>}
                <input
                    id={fieldName}
                    type={type}
                    value={fieldValue}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeHolder || label || `Ingrese su ${fieldName}`}//que tome algún valor
                    className="block w-full appearance-none rounded-md border border-gray-300px 
                    px-10 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none
                    focus:ring-emerald-500 sm:text-sm text-gray-400"
                />
            </div>

        </div>
    )
}

export default FormField