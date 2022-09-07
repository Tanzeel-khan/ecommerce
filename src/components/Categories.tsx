import styled from "styled-components";
import { categories } from "../services/data";
import { mobile } from "../services/responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem img={item.img} title={item.title} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;