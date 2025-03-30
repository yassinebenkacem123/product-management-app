
const EditBtn = ({setToggle,productId,getIdProduct}) => {
  return (
    <button onClick={()=>{
      setToggle(true);
      getIdProduct(productId)
    }} className="button">
        <svg className="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" stroke-linecap="round" strokeWidth="2"><path d="m20 20h-16"></path><path clipRule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fillRule="evenodd"></path></g></svg>
    </button>

  )
}
export default EditBtn
