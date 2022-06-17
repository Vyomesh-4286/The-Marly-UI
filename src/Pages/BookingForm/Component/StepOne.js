import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import './Step.css';

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    var group1 = document.querySelector('input[name="group1"]:checked');
    var group2 = document.querySelector('input[name="group2"]:checked');
    if (group1 == null) {
      alert('You must select a which Sea facing rooms you want to book!');
      return false;
    }
    else if (group2 == null) {
      alert('You must select a which Mountain facing rooms you want to book!');
      return false;
    }
    else {
      nextStep();
    }

  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <ProgressBar className="h-1 mt-3" variant="dark" now={25} />
        <h4 className="mt-5 mb-4">Select your perfect stay</h4>
        <Form.Group className="row">
          <Form.Group className="col-md-6 col-12 mb-3">
            <Form.Label className="mb-3">Sea facing rooms:</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}-1`} className="mt-3 mb-3">
                <Form.Group id="group1" className="mb-2">
                  <Form.Check
                    inline
                    label="Studio"
                    name="group1"
                    type={type}
                    id="group1"
                  />
                  <Form.Text className="text-muted">
                    30m² & 10m² balcony | Max 2 Adults
                  </Form.Text>
                </Form.Group>
                <Form.Group id="group1" className="mt-1 mb-2">
                  <Form.Check
                    inline
                    label="Classic"
                    name="group1"
                    type={type}
                    id="group1"
                  />
                  <Form.Text className="text-muted">
                    35m² & 10m² balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
                <Form.Group id="group1" className="mt-1 mb-2">
                  <Form.Check
                    inline
                    label="Junior"
                    name="group1"
                    type={type}
                    id="group1"
                  />
                  <Form.Text className="text-muted">
                    45m² & 20m² balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
                <Form.Group id="group1" className="mt-1 mb-2">
                  <Form.Check
                    inline
                    label="Superior"
                    name="group1"
                    type={type}
                    id="group1"
                  />
                  <Form.Text className="text-muted">
                    45 – 54m² & 27m² balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
                <Form.Group id="group1" className="mt-1 mb-2">
                  <Form.Check
                    inline
                    label="Deluxe"
                    name="group1"
                    type={type}
                    id="group1"
                  />
                  <Form.Text className="text-muted">
                    45 – 66m² & 44m² balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
              </div>
            ))}
          </Form.Group>
          <Form.Group className="col-md-6 col-12 mb-3">
            <Form.Label className="mb-3">Mountain facing rooms:</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}-2`} className="mt-3 mb-3">
                <Form.Group id="group2" className="mb-2">
                  <Form.Check
                    inline
                    label="Classic"
                    name="group2"
                    type={type}
                    id="group2"
                  />
                  <Form.Text className="text-muted">
                    35m² & small balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
                <Form.Group id="group2" className="mt-1 mb-2">
                  <Form.Check
                    inline
                    label="Superior"
                    name="group2"
                    type={type}
                    id="group2"
                  />
                  <Form.Text className="text-muted">
                    45 – 54m² & small balcony | Max 2 Adults + Child
                  </Form.Text>
                </Form.Group>
              </div>
            ))}
          </Form.Group>
        </Form.Group>
        <Form.Group className="row">
          <Form.Group className="col-sm-6 col-12 bg-white" disabled></Form.Group>
          <Form.Group className="col-sm-6 col-12 d-flex justify-content-end">
            <Button id="btn_position" className='border rounded-pill btn manu_title py-2 px-3 text-dark me-1' variant="primary" type="submit">Continue</Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
};

export default StepOne;