import styled from "styled-components";
import EditForm from "./EditForm";


function ServicesItem(props) {

  const { id, servicesName, servicesDescription, onDelete,onAdd } = props;
  const item = { servicesName, servicesDescription };
  return (
    <ServicesLi>
      <ServicesName>{servicesName}</ServicesName>
      <ServicesDescription color='red'>
        {servicesDescription}
      </ServicesDescription>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
      <AddButton onClick={() => onAdd(item)}>Add to Bag</AddButton>
      <EditForm
        servicesArray={props.servicesArray}
        setServicesArray={props.setServicesArray}
        id={id}
      />
    </ServicesLi>
  );
}

export default ServicesItem;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const ServicesLi = styled.li`
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color:black;
  text-align:left;
`;

const ServicesName = styled.h3``;

const ServicesDescription = styled.p` 
  color:${(props) => props.color};
`;

const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;
