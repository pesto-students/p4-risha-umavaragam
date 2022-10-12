
function Spinner({text}) {
    return (
      <div>
        {/* <Spinner/> */}
        <span>{text}</span>
        <div className="loader"></div>
      </div>
    )
}

export default Spinner