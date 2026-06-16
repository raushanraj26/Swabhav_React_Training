import React from "react";
import Card from "./Card";
// import ProductList from "./ProductList";

const Dashboard = () => {
  return (
    <>
      <div className="cards-container">
        <Card title="Products" total={10} />
        <Card title="Customers" total={10}/>
        <Card title="Policies"  total={10} />
      </div>

      {/* <ProductList /> */}
    </>
  );
};

export default Dashboard;