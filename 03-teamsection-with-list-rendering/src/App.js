import logo from './logo.svg';
import './App.css';
import TeamSection from "./components/TeamSection";
import { employees } from "./data/employee";


function App() {
    
  const engineeringEmployees = employees.filter(
    (employee) => employee.department === "Engineering"
  );

  const designEmployees = employees.filter(
    (employee) => employee.department === "Design"
  );

  const productEmployees = employees.filter(
    (employee) => employee.department === "Product"
  );
  return (
    <>
<TeamSection
        department="Engineering"
        members={engineeringEmployees}
      />

      <TeamSection
        department="Design"
        members={designEmployees}
      />

      <TeamSection
        department="Product"
        members={productEmployees}
      />
    </>
  );
}

export default App;
