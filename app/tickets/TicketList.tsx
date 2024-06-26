// "use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

async function getTickets() {
  //imitate delay
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 10, // 10 seconds, if set as 0, it will not cache data, fetch everytime it is called
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <div>
      {tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)} ...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} prority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There is no open tickets!</p>
      )}
    </div>
  );
}
