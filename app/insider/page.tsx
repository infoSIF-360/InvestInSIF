"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function InsiderForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investmentRange: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    alert("Thank you! We'll reach out to you soon.")
    setForm({ name: "", email: "", phone: "", city: "", investmentRange: "", message: "" })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-background/90 backdrop-blur-md rounded-3xl shadow-2xl p-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-4 gradient-text"
        >
          Insider Access Form
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground mb-10"
        >
          Fill out this form to get early access and insights on Specialized Investment Funds (SIFs).
        </motion.p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="col-span-1 md:col-span-2"
          >
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </motion.div>

          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <Input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <Input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
          />
          <select
            name="investmentRange"
            value={form.investmentRange}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 bg-background border border-border rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select Investment Range</option>
            <option value="Below ₹50 Lakh">Below ₹50 Lakh</option>
            <option value="₹50 Lakh - ₹1 Cr">₹50 Lakh - ₹1 Cr</option>
            <option value="₹1 Cr - ₹5 Cr">₹1 Cr - ₹5 Cr</option>
            <option value="Above ₹5 Cr">Above ₹5 Cr</option>
          </select>

          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Anything you want to share..."
            className="col-span-1 md:col-span-2"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-1 md:col-span-2 flex justify-center"
          >
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-lg py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  )
}
