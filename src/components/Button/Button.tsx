type ButtonsType = {
    name: string,
    callback: () => void,
    class?: string,
    disabled?: boolean,
}

export const Button = (props: ButtonsType) => {

    return (
        <div>
            <button disabled={props.disabled} className={props.class}
                    onClick={() => props.callback()}>{props.name}</button>
        </div>
    )
}