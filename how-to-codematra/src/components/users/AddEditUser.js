import React from 'react'
const AddEditUser = (props) => {

  const { adduser } = props;

  const handleUserSubmit = (e) => {
    adduser(e);
  }
  return (
    <>
      <div className="add-user-form">
        <form onSubmit={(e) => handleUserSubmit(e)}>
           <input placeholder="Enter Name" className="form-control" name="name"  />
           <input placeholder="Enter Job" className="form-control" name="job"  />
           <button type="submit" name="adduser">Submit</button>
        </form>
      </div>
    </>
  )
}
export default AddEditUser;