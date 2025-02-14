import React from "react";

export default function About() {
  return (
    <div className="w-full md:p-[1rem] mt-[2rem] md:px-[8.5rem]">
      <div className="bg-transparent rounded-3xl md:rounded-[3rem] border border-border w-full text-white md:py-[3rem] py-3 px-[1.2rem] md:px-[3rem]">
        <p>Event Ticket Booking UI – Open Source Practice Project 🎟️</p>

        <p className="my-5">Overview</p>

        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <p className="my-5">
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>

        <p className="mb-5">Flow & Features</p>

        <p>1️⃣ Ticket Selection</p>
        <ul className="list-disc pl-5 mb-5">
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
            details.
          </li>
          <li>
            For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
            payment modal.
          </li>
        </ul>

        <p>2️⃣ Attendee Details Form</p>
        <ul className="list-disc pl-5 mb-5">
          <li>Users input their Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload option with preview functionality.</li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </ul>

        <p>3️⃣ Payment or Success Page</p>
        <ul className="list-disc pl-5">
          <li>
            If the ticket is free, the user is taken directly to the Ticket
            Confirmation Page.
          </li>
          <li>
            If the ticket is paid, developers can integrate Stripe, Paystack, or
            Flutterwave to process payments before showing the confirmation
            page.
          </li>
          <li>Upon successful booking, users should receive:</li>

          <li>A visual ticket preview with a unique QR Code.</li>
          <li>
            An option to download the ticket as PDF or save it to their device.
          </li>
          <li>An email confirmation containing ticket details.</li>
          <p>How to Build This 🚀</p>
        </ul>

        <p className="my-5">This UI can be implemented using:</p>

        <p>📌 Frontend (Next.js or React)</p>
        <ul className="list-disc pl-5 mb-5">
          <li>Component Breakdown:</li>

          <li>
            <strong>TicketCard.tsx</strong> → Displays ticket details
          </li>
          <li>
            <strong>AttendeeForm.tsx</strong> → Captures user details
          </li>
          <li>
            <strong>PaymentModal.tsx</strong> → Handles payment processing
          </li>
          <li>
            <strong>SuccessScreen.tsx</strong> → Shows the final ticket preview
          </li>

          <li>
            State Management: React’s Context API, Zustand, or Redux (if
            needed).
          </li>
          <li>
            File Handling: Users should be able to upload images (profile
            picture for ticket) using Firebase Storage, Cloudinary, or local
            preview with <code>URL.createObjectURL()</code>.
          </li>
        </ul>

        <p>📌 Backend (Optional)</p>
        <ul className="list-disc pl-5 mb-5">
          <li>If persistence is required, a backend can be built using:</li>

          <li>Node.js & Express or Firebase Functions</li>

          <li>
            Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
            records
          </li>
        </ul>

        <p>📌 Payment Integration</p>
        <ul className="list-disc pl-5 mb-5">
          <li>For paid events, developers should integrate:</li>

          <li>Stripe Checkout (for international transactions)</li>
          <li>Paystack or Flutterwave (for African users)</li>
        </ul>

        <div>What You’ll Learn 🧑‍💻</div>
        <ul className="list-disc pl-5 mb-5">
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>
            Generating & validating QR Codes for event check-in (Advanced).
          </li>
        </ul>

        <div>Need Help? Reach Out! 💬</div>

        <div className="bg-foreground border py-5 px-9 border-underlineBorder flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-[1rem] rounded-3xl  text-center  w-full text-white mt-9  ">
          <a
            href="https://tinyurl.com/2xzh2to2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground border rounded-lg border-underlineBorder py-3 px-[4rem] w-full font-roboto text-nowrap"
          >
            Design File
          </a>
          <a
            href="https://github.com/MuritalaAhmed05/HNGx-stage2-Conference-ticket-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-underlineBorder py-3 px-[5rem] rounded-lg w-full font-roboto "
          >
            Github Code
          </a>
        </div>
      </div>
    </div>
  );
}
