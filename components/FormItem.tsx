interface FormItemProps {
    label : string;
    id : string;
    type : string;
    placeholder? : string;
};

const FormItem : React.FC<FormItemProps> = ({
    label,
    id,
    type,
    placeholder
}) => {
    return (
        <div className="flex gap-5 flex-col basis-1/2">
            <label htmlFor={id}
                className="
                    font-bold tracking-tight block
                "
            > {label} </label>
            <input type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="
                    py-3 px-5 rounded-3xl font-bold bg-neutral-700
                "
            />
        </div>
    )
};

export default FormItem;