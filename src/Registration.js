import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Card, Form, Button } from 'react-bootstrap';
import './style.css';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const validateNames = (value, name) => {
    if (value.length < 3) {
      return `${name} should be at least 3 characters long`;
    }
    return true;
  };

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      return 'Invalid email format';
    }
    return true;
  };

  const validatePasswordMatch = (value) => {
    const password = getValues("password");
    if (value !== password) {
      return 'Passwords do not match';
    }
    return true;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: '1000px', height: '500px', marginTop: '20px' }}>
        <Card.Header className="text-center bold-text display-8">Sign Up Form</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4">
              <div className="row">
                <div className="col">
                  <div className="mb-1">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      {...register("firstName", {
                        required: true,
                        validate: (value) => validateNames(value, "First Name")
                      })}
                    />
                  </div>
                  {errors.firstName && (
                    <div className="text-center text-danger">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
                <div className="col">
                  <div className="mb-1">
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      {...register("lastName", {
                        required: true,
                        validate: (value) => validateNames(value, "Last Name")
                      })}
                    />
                  </div>
                  {errors.lastName && (
                    <div className="text-center text-danger">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <div className="mb-1">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  {...register("emailAddress", {
                    required: true,
                    validate: validateEmail
                  })}
                />
              </div>
              {errors.emailAddress && (
                <div className="text-center text-danger">
                  {errors.emailAddress.message}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-4">
              <div className="row">
                <div className="col">
                  <div className="mb-1">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        validate: (value) => validatePasswordMatch(value)
                      })}
                    />
                  </div>
                  {errors.password && (
                    <div className="text-center text-danger mt-1">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="col">
                  <div className="mb-1">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: validatePasswordMatch
                      })}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div className="text-center text-danger mt-1">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="success" size="lg" type="submit" style={{ width: '50%' }}>
                Sign Up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
