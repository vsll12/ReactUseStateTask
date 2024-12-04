function EditForm({servicesArray, setServicesArray, id}) {

  function handleForm(ev) {
    ev.preventDefault()
    let formData = Object.fromEntries([...new FormData(ev.target)])
    let newArr = [...servicesArray]
    let elementIndex = newArr.findIndex((item) => item.id === id)
    newArr[elementIndex].servicesName = formData.servicesName
    newArr[elementIndex].servicesDescription = formData.servicesDescription
    setServicesArray(newArr)
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" name="servicesName" placeholder="servicesName"/>
      <input type="text" name="servicesDescription" placeholder="servicesDescription"/>
      <button>SAVE</button>
    </form>
  );
}

export default EditForm;





