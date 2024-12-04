import styled from "styled-components";
import ServicesItem from "./ServicesItem";

function Services({servicesArray,setServicesArray,bagArray,setBagArray}) {

  const handleDelete = (id) => {
    setServicesArray(servicesArray.filter((service) => service.id !== id));
  };

  const handleAddToBag = (item) => {
    const updatedBag = bagArray.concat(item);
    setBagArray(updatedBag); 
  };

  return (
    <ServicesSection>
      <HeaderTag>Services</HeaderTag>
      <ServicesList>
        {servicesArray.map((item) => (
          <ServicesItem
            key={item.id}
            id={item.id}
            servicesArray={servicesArray}
            setServicesArray={setServicesArray}
            servicesName={item.servicesName}
            servicesDescription={item.servicesDescription}
            onDelete={handleDelete}
            onAdd={handleAddToBag} 
          />
        ))}
      </ServicesList>

      <HeaderTag>Services</HeaderTag>
      <BagSection>
      <h2>Bag</h2>
      <ul>
        {bagArray?.length === 0 ? (
          <p>The bag is empty.</p>
        ) : (
          bagArray?.map((item, index) => (
            <li key={index}>
              <strong>{item.servicesName}</strong>
            </li>
          ))
        )}
      </ul>
      </BagSection>
    
    </ServicesSection>

    
  );
}

export default Services;

const ServicesSection = styled.section`
  margin-top: 30px;
`;

const BagSection = styled.section`
  margin-top: 30px;
`;

const HeaderTag = styled.h1``;

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 30px;
  gap: 30px 30px;

  @media (max-width: 630px) {
    & {
      grid-template-columns: auto;
    }
  }
`;
