import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import PointsList from "./list";
import CoreList from "./exprience";
import Image from "next/image";
import img from "../../app/(sub pages)/about/hello.png";
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <Image src={img} alt=""/>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            $ whoami
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am Jagpreet Singh Khurana, a B.Tech student in Electronics and Communication Engineering at IIIT Bhagalpur with expertise in C++, JavaScript, and frameworks like React and Node.js. 
          I have led impactful projects, including platforms for administrative efficiency, student activity management, and placement operations. 
          With achievements like winning OPCODE, contributing to open-source events like GSSoC and Hacktoberfest, and solving 500+ competitive programming problems, 
          I bring strong technical skills and a passion for innovation. My internship at Quamin Solutions LLP further honed my full-stack development skills by delivering a seamless payment portal system.
          </p>
          <p className=" text-xs md:text-lg text-left w-full capitalize">
            <li>CLASS 10 - 90.5%</li>
            <li>CLASS 12 - 95.6%</li>
            <li>CGPA - 8.2</li>
            <li>RANK 144 - GSSOC</li>          
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          IIIT BHAGALPUR<sub className="font-semibold text-base"> 2022-2026</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            SHREE SANATAN DHARM EDUCATION CENTER{" "}
            <sub className="font-semibold text-base">2019 - 2021</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
                <b>$ tree -L 1 ~/skills/ </b>

        
        </ItemLayout>


        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
        <b>$ more ~/experience</b>

   
        </ItemLayout>



        <ItemLayout
          className={
            

          

            "col-span-full sm:col-span-6 md:col-span-4 !p-0"



          }
        >
    
    <div className="font-light  text-xs sm:text-sm md:text-base   " >
  <li>c</li>
  <li>c++</li>
  <li>javascript</li>
  <li>Node-Js</li>
  <li>React-Js</li>
  <li>NEXT-Js</li>
  <li>MongoDB</li>
  <li>Postgres SQL</li>
  <li>Full Stack Development(MERN)</li>
  {/* Add more points as needed */}
</div>

</ItemLayout>
<ItemLayout className="col-span-full md:col-span-8 !p-0">
<div className="font-light  text-xs sm:text-sm md:text-base   " > 
        <li>EX-INTERN AT QUAMIN LLP SOLUTIONS</li>
        <li>FRONTEND TEAM MEMBER OF IIIT BHAGALPUR GYMKHANA WEBSITE</li>
        <li>STUDENT COORDINATOR OF TRAINING AND PLACEMENT CELL, IIIT BHAGALPUR</li>
        <li>MEMBER OF LITERATURE CLUB, IIIT BHAGALPUR</li> 
        </div>
       </ItemLayout>



      
   
          

       

    
      </div>
    </section>
  );
};

export default AboutDetails;
