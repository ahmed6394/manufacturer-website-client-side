import React from "react";

const Blogs = () => {
  return (
    <div className="my-12">
      <h1 class="text-3xl font-bold text-primary text-center">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-1xl text-center font-semibold">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              Some important ways to improve the react application performance.
            </p>
            <span>1. Using Immutable Data Structures</span>
            <span>
              2. Function/Stateless Components and React.PureComponent
            </span>
            <span>3. Multiple Chunk Files</span>
            <span>4.Using Production Mode Flag in Webpack</span>
            <span>5.Dependency optimization</span>
            <span>
              6. Avoid Inline Function Definition in the Render Function.
            </span>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-1xl text-center font-semibold">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </h2>
            <span>
              There are four main types of state you need to properly manage in
              your React apps:
            </span>
            <span>1. Local state.</span>
            <span>2. Global state.</span>
            <span>3. Server state.</span>
            <span>4. URL state.</span>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-1xl text-center font-semibold">
              {" "}
              How does prototypical inheritance work?
            </h2>
            <p>
              Prototypical inheritance refers to the ability to access object
              properties from another object. We use a JavaScript prototype to
              add new properties and methods to an existing object constructor.
              We can then essentially tell our JS code to inherit properties
              from a prototype. Prototypical inheritance allows us to reuse the
              properties or methods from one JavaScript object to another
              through a reference pointer function.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-1xl text-center font-semibold">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p>
              We use the Array.find() method to find the first element that
              meets a certain condition or name. Just like the filter method, it
              takes a callback as an argument and returns the first element that
              meets the callback condition. Let's use the find method on the
              array in our example above.
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-1xl text-center font-semibold">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              Unit testing involves testing individual components of the
              software program or application. The main purpose behind this is
              to check that all the individual parts are working as intended. A
              unit is known as the smallest possible component of software that
              can be tested. Generally, it has a few inputs and a single output
            </p>
            <span>
              There are many benefits of unit testing. These are written below:
            </span>
            <span>
              1. Unit testing helps identify all kinds of issues with the
              software at a very early stage.
            </span>
            <span>2. Unit testing significantly improves code quality.</span>
            <span>
              3. Unit testing takes into consideration the documentation of the
              entire system.
            </span>
            <span>
              4. The debugging process can be simplified to a great extent by
              unit testing.{" "}
            </span>
            <span>
              5. Any problems or bugs in the system are identified in the early
              stages through unit testing, and because of that the cost of bug
              fixes is significantly reduced.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
