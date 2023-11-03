import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

const DetailPage = (props) => {
  const { match } = props;
  const itemId = match.params.id;
  return (
    <div>
      <Header />
      <h2>Item Detail Page</h2>
      <p>Item ID: {itemId}</p>
      <Footer />
    </div>
  );
};

export default DetailPage;
