import React from "react";
import { Form, Button } from "react-bootstrap";


const Filter = () => {

  return (
    <React.Fragment>
      <div className="filters border">
        <span className="title">Filter Product</span>
        <span>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            id={`inline-1`}
            type="radio"
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            id={`inline-2`}
            type="radio"
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Out of stock"
            name="group1"
            id={`inline-3`}
            type="checkbox"
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Fast Delivery only"
            name="group1"
            id={`inline-4`}
            type="checkbox"
          />
        </span>
        {/* <span>
          <label style={{ paddingRight: 10 }}>Rating: </label>
         <Rating rate={rate} 
         
         />
        </span> */}
        <Button variant="light">Clear Filters</Button>
      </div>
    </React.Fragment>
  );
};

export default Filter;
