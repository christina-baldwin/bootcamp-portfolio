import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown text-center m-b-m">
      <button className="dropdown-btn text-center">
        Filter by project type
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-selection">Custom projects</li>
        <li className="dropdown-selection">Bootcamp projects</li>
        <li className="dropdown-selection">Course projects</li>
      </ul>
    </div>
  );
};

export default Dropdown;
