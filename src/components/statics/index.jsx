'use strict';
import AnimatedNumbers from 'react-animated-numbers';
export const Statics = () => {
  return (
    <div className="flex  shadow-xl flex-col w-full gap-10 md:flex-row justify-around md:px-56 py-10 items-center h-full md:h-56 bg-white">
      <div className="flex flex-col gap-2 justify-center  items-center">
        <span className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'up',
              duration: index + 0.3,
            })}
            animateToNumber={25}
            fontStyle={{
              fontSize: 40,
            }}
          />
          <span className="text-xl sm:text-2xl md:text-3xl ">+</span>
        </span>
        <p className="text-xl sm:text-2xl text-center ">Sucessfull Projects</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className=" flex items-center text-3xl sm:text-4xl md:text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'up',
              duration: index + 0.3,
            })}
            animateToNumber={24}
            fontStyle={{
              fontSize: 40,
            }}
          />
          <span className="text-xl sm:text-2xl md:text-3xl ">+</span>
        </span>
        <p className="text-xl sm:text-2xl text-center">Team Members</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className=" flex items-center text-3xl sm:text-4xl md:text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'up',
              duration: index + 0.3,
            })}
            animateToNumber={50}
            fontStyle={{
              fontSize: 40,
            }}
          />
          <span className="text-xl sm:text-2xl md:text-3xl ">+</span>
        </span>
        <p className="text-xl sm:text-2xl text-center">Happy Customers</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: 'up',
              duration: index + 0.3,
            })}
            animateToNumber={100}
            fontStyle={{
              fontSize: 40,
            }}
          />
          <span className="text-xl sm:text-2xl md:text-3xl ">%</span>
        </span>
        <p className="text-xl sm:text-2xl text-center">Client Satisfaction</p>
      </div>
    </div>
  );
};
