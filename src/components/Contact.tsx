"use client"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async () => {
    setStatus("sending");
    
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

    return(
        <section id="contact" className="bg-slate-900 py-8 px-8">
            <div className="max-w-3xl mx-auto flex gap-12">
    
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-white text-4xl font-bold">Get in touch</h2>
                    <p className="text-slate-400 mt-4">
                    I'm currently open to new opportunities. 
                    Whether you have a question or just want to say hi, 
                    my inbox is always open.
                    </p>
                <div className="flex gap-4 mt-8">
                    <FaGithub className="text-blue-400 text-2xl" />
                    <FaLinkedin className="text-blue-400 text-2xl" />
                </div>
                </div>

               <div className="flex flex-col gap-4 min-w-100">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 w-full"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 w-full"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 w-full resize-none align-top"
                        rows={5}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={status === "sending"}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-75 cursor-pointer disabled:opacity-50"
                    >
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>

                    {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}
                    {status === "error" && <p className="text-red-400 text-sm">Something went wrong, please try again.</p>}
                </div>

            </div>
</section>
    )
}