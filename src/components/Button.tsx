export function Button(props: { AdditionalStyle?: string, OnClickEvent?: () => void, children?: React.ReactNode }) {
    return (
        <button
            className="border-2 border-slate-300 rounded duration-75 p-2 hover:p-3"
            onClick={() => props.OnClickEvent ? props.OnClickEvent() : null}
        >
            {props.children}
        </button>
    )
}