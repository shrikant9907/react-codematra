import React from 'react'
const AddEditUser = (props) => {
  const { title, url } = props.data;
  return (
    <>
      <div className="useritem">
        <img src={ url } alt={ title } />
        <div className="uname">{ title }</div>
      </div>
    </>
  )
}
export default AddEditUser;