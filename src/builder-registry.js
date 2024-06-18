"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Home from "./pages/dashboard";
import MyComponent from "./components/Login";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Home, {
  name: "Home",
});

Builder.registerComponent(MyComponent, {
  name: "Login",
});
