import React from "react";
import CreateForm from "./CreateForm";
// ("use client");

export default function CreateTicket() {
  return (
    <main>
      <h2 className="text-primary text-center">Add a new ticket</h2>
      <CreateForm></CreateForm>
    </main>
  );
}
