import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hackathon = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Hero Section */}
      <motion.header
        className="text-center py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-6xl font-bold mb-6"
          variants={fadeInUp}
        >
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Hackathon Pro</span>
        </motion.h1>
        <motion.p className="mt-4 text-xl" variants={fadeInUp}>
          The ultimate platform to innovate, collaborate, and compete in hackathons.
        </motion.p>
        <motion.div className="mt-8 flex justify-center gap-4" variants={fadeInUp}>
          <Link
            to="/hackathons"
            className="btn btn-primary hover:scale-105 transform transition-transform duration-300"
          >
            Explore Hackathons
          </Link>

        </motion.div>
        <motion.div className="mt-12" variants={fadeInUp}>
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="Hackathon"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.header>

      {/* About Section */}
      <motion.section
        className="text-center py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
          What is Hackathon Pro?
        </motion.h2>
        <motion.p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
          Hackathon Pro is a cutting-edge platform designed to bring together innovators, developers, and creators from around the world. Whether you're a participant, judge, or organizer, we provide the tools you need to collaborate, compete, and build groundbreaking projects.
        </motion.p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
          Key Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {[
            {
              icon: "📅",
              title: "Event Registration",
              description: "Sign up and participate in exciting hackathons.",
            },
            {
              icon: "👥",
              title: "Team Management",
              description: "Form teams, invite members, and collaborate effectively.",
            },
            {
              icon: "🏆",
              title: "Live Leaderboard",
              description: "Stay updated with real-time scores and rankings.",
            },
            {
              icon: "💬",
              title: "Real-time Chat",
              description: "Communicate with teammates and organizers seamlessly.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-lg shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
          What Our Users Say
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {[
            {
              name: "John Doe",
              role: "Participant",
              quote: "The platform made it so easy to find and join hackathons. Highly recommended!",
            },
            {
              name: "Jane Smith",
              role: "Organizer",
              quote: "Managing our hackathon was a breeze with this platform. Great tools!",
            },
            {
              name: "Alex Johnson",
              role: "Judge",
              quote: "The live leaderboard and real-time updates were incredibly helpful.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-lg shadow-md bg-white"
              variants={fadeInUp}
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
          Ready to Join the Next Hackathon?
        </motion.h2>
        <motion.p className="mt-4 text-lg" variants={fadeInUp}>
          Don't miss out on the opportunity to innovate and collaborate with the best.
        </motion.p>
        <motion.div className="mt-8" variants={fadeInUp}>
          <Link
            to="/hackathons"
            className="btn btn-secondary hover:scale-105 transform transition-transform duration-300"
          >
            Get Started Now
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <footer className="text-center py-10 border-t">
        <p className="text-gray-600">
          &copy; 2025 Hackathon Pro | All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Hackathon;