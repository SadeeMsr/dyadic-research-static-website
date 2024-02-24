"use client";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};


export default function AnimatedText({placeHolders, textStyle}) {


  const item = {
    hidden: {
      y: "200%",
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };


  const splitWords = placeHolders?.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });



  return (
    <h1>
      {words?.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index]?.flat().map((element, index) => {
             
              return (
                <h1
                 className={textStyle}
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </h1>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </h1>
  )
}

    // <div className="relative text-white">
    //   <div className="xl:w-[40%] w-[60%] absolute flex flex-col h-screen justify-center items-center">
    //     <div className="lg:ms-0 ms-20" style={{ zIndex: 5 }}>
    //       <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold">
    //         Dyadic Research
    //       </h1>
    //       <p className="text-2xl mt-10">A simple solution is smart one.</p>
    //     </div>
    //   </div>
    // </div>