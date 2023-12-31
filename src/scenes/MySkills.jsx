import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaquery'
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-sky-700">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Hello, and thank you for visiting my portfolio! Feel free to explore my portfolio to see these skills in action through my projects and work samples.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-blue">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <div className='mt-10 flex justify-between'>
            <button class="bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
              C++
            </button>
            <button class="bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
              C
            </button>
            <button class="bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
              Javascript
            </button>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-red">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <div className='mt-10 flex justify-between'>
            <button class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
              React Js
            </button>
            <button class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
              Node Js
            </button>
            <button class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
              Mongo DB
            </button>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-yellow">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Other Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <div className='mt-10 flex justify-between'>
            <button class="bg-transparent hover:bg-yellow text-yellow font-semibold hover:text-white py-2 px-4 border border-yellow hover:border-transparent rounded">
              Github
            </button>
            <button class="bg-transparent hover:bg-yellow text-yellow font-semibold hover:text-white py-2 px-4 border border-yellow hover:border-transparent rounded">
              Zoho Creator
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;