import React from "react";
import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";

export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>

      <button className="btn btn-primary border-radius-10">
        <Link href="/tickets/create">Create ticket</Link>
      </button>
    </main>
  );
}
