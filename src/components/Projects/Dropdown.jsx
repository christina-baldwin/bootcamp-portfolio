import styled from "styled-components";

const Hidden = styled.div`
  display: none;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  color: black;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;
const DropdownItem = styled.li`
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0; /* Grey background on hover */
  }
`;

const Dropdown = () => {
  return (
    <DropdownWrapper>
      <DropdownContainer className="dropdown text-center m-b-m">
        <button className="text-center">Filter by project type</button>
        <DropdownMenu className="dropdown-menu">
          <DropdownItem>Custom projects</DropdownItem>
          <DropdownItem>Bootcamp projects</DropdownItem>
          <DropdownItem>Course projects</DropdownItem>
        </DropdownMenu>
      </DropdownContainer>
    </DropdownWrapper>
  );
};

export default Dropdown;
