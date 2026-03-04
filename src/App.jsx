import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 sticky top-0">
        <h1 className="text-xl font-bold tracking-wide">
          Mohammad Zaid Sayeed
        </h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full top-40 left-1/2 -translate-x-1/2"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-[85vh] px-6">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-blue-500 drop-shadow-[0_0_15px_#3b82f6]">
            <Typewriter
              words={[
                "AI & Data Science Undergraduate",
                "Machine Learning Enthusiast",
                "Aspiring Data Analyst",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg mb-8">
          Passionate about building data-driven solutions using Python,
          Machine Learning and Data Analytics.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-xl transition"
          >
            Contact Me
          </a>
        </div>

      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 px-6 bg-slate-950"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">

          <h3 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I am a third-year Artificial Intelligence & Data Science student
            passionate about solving real-world problems using Machine Learning,
            Data Analysis and Python.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2">🎓 Education</h4>
              <p className="text-gray-400 text-sm">
                B.E. in AI & Data Science <br />
                Anjuman College of Engineering & Technology
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2">💻 Skills</h4>
              <p className="text-gray-400 text-sm">
                Python, Pandas, NumPy, Scikit-learn, Machine Learning
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-2">🏆 Achievement</h4>
              <p className="text-gray-400 text-sm">
                1st Position in College Data Analysis Workshop
              </p>
            </div>

          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 px-6 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">

          <motion.h3
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My <span className="text-blue-500">Projects</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">
                📱 Mobile Price Prediction
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Built a Machine Learning model using Random Forest to predict
                mobile prices based on specifications.
              </p>
              <a
                href="https://mobile-price-prediction-iryenvgs4twxxnx9mto3x7.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View Project →
              </a>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500 transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">
                📊 Data Analysis Workshop
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Secured 1st position by performing real-world dataset analysis.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-4xl font-bold mb-10">
            Contact <span className="text-blue-500">Me</span>
          </h3>

          <p className="text-gray-400 mb-8">
            Interested in working together or have any questions?
            Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="zaidsayeed17@gmail.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
            >
              📧 Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mohammad-zaid-sayeed-9b42b42b7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-xl transition"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/zaidsayeed17"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-xl transition"
            >
              💻 GitHub
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default App;