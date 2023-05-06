import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Saludo";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready = {true}/>
    <Saludar/>
    {/* <Button text='click me'/>
    <Button text= 'Pay'/>
    <Button text= 'hello world' name = 'joe' /> */}
    {/* uso de props */}
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      point={[99, 33.3, 22.2]}
      address={{ street: "123 Main", city: "NewYork" }}
      greet={function () {
        alert("hello");
      }}
    />
    <UserCard
      name="Joe macmillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{
        street: "av some 123",
        city: "new york",
      }}
    /> */}
  </>
);
