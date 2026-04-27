import "./Box.css";
function Box({ title }) {
    console.log("Nidaaa", title)
    return (
        <>
            <div className="boxxx">{title}</div>
        </>
    )
}
export default Box;