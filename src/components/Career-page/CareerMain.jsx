import { useState, useEffect } from "react";

const experienceData = [
  { number: 6, label: "Years of Experience" },
  { number: 50, label: "Projects Completed" },
  { number: 20, label: "Happy Clients" },
];

export default function CounterSection() {
  const [counts, setCounts] = useState(experienceData.map(() => 0));

  useEffect(() => {
    const intervals = experienceData.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];

          if (updated[index] < item.number) {
            updated[index] += 1;
          }

          return updated;
        });
      }, 100);
    });

    experienceData.forEach((item, index) => {
      const stopCheck = setInterval(() => {
        setCounts((prev) => {
          if (prev[index] >= item.number) {
            clearInterval(intervals[index]);
            clearInterval(stopCheck);
          }
          return prev;
        });
      }, 60);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      <section className="career-main">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 text-center text-md-start pt-5">
              <div className="c-h-content">
                <h5 className="mb-2 text-white">Join us</h5>
                <h1 className="text-white">Start You Career in <span className="org"> Perfect Web Services</span></h1>
                 <p className="text-white my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla sequi repellendus aperiam.</p>
                <div className="d-flex gap-2 career-btn">
                      <button className=" btn btn-primary">Apply Now</button>
                    </div>
              </div>
            </div>
            <div className="col-md-6 text-center ">
              <div className="carrer-counter  bg-white">
                <ul className="list-unstyled d-flex justify-content-between ">
                  {experienceData.map((item, index) => (
                    <li
                      key={index}
                      className="text-center text-black  d-flex flex-column"
                    >
                      <h5 className="fw-bolder">{counts[index]}+</h5>
                      <p className="fw-semibold">{item.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
