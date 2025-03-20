import React from 'react';
import top from '../../src/assets/Rectangle 326.png';
import car from '../../src/assets/Rectangle 327.png';
import bottom from '../../src/assets/Rectangle 328.png';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="relative w-full h-[109px]">
        <img
          src={top}
          alt="Privacy Policy Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-[60px] left-[108px] w-[424px] h-[35px] flex items-center">
          <h1 className="text-white font-[Mulish] font-bold text-[28px] leading-[100%] uppercase">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="px-28 py-12">
        <p className="text-gray-700 text-[16px] font-[Mulish] leading-[28px]">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis 
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac sceleris bibendum lorem. 
          Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-start justify-between px-28">
        <div className="md:w-[50%] mb-6 md:mb-0">
          <h2 className="text-black font-bold text-[20px] mb-4">
            Privacy Policy in Dream Car Service
          </h2>
          <p className="text-gray-700 font-[Mulish] text-[16px] leading-[28px] font-[500]">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus
            luctus enim egestas, ac scelerisque ante pulvinar.
          </p>
        </div>

        <div className="md:w-[50%] flex justify-end">
          <img
            src={car}
            alt="Car"
            className="w-[550px] h-[263px] object-cover rounded-tr-[20px] rounded-br-[20px]"
          />
        </div>
      </section>

      <section className="relative w-full mt-8">
        <img
          src={bottom}
          alt="Privacy Policy Footer Background"
          className="w-full h-[80px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="w-[900px] h-[20px] flex items-center justify-center px-4">
            <h1 className="text-[#5C5C5C] font-[Mulish] font-bold text-[18px] leading-[100%] tracking-[0px] text-center">
              @ Dream Car Service of Privacy policy will keep your detail safe and protect your information
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full h-auto mt-8 mb-12" />
    </>
  );
};

export default PrivacyPolicy;