import React from "react";
import "./carrer.css";

const internships = [
  {
    category: "Full Stack",
    type: "Full-Time",
    title: "Full Stack Developer Intern",
    location: "Mohali ",
    time: "Summer 2026",
    pay: "Competitive Stipend",
    description:
      "Work alongside our core full stack team to build scalable services and beautiful user interfaces.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxzg9NLVICiEDFZjENkpT6n3DKxpBcQSYfqCIALz1U1P-trUPJWUqHGV-4w8WnekZUR9Y7NcSgo8JGdyP-ve_haAMBrkkX7cqxVtX4TVaf1xywvI_i3phRvrymDqUHbgEnCyEyZX6AEPRWZP7vf_K0ivtRLnSnA823SC8CujrV8wm8ALSbQV7dPIQyhxpb7CaIa4np-D6F-OSyUCLABXkH-IJPBXs6Q135BmDJTqWDA80vJubvB-pWiwlkZl2T4KGLyaTUt1VK68eq",
  },
  {
    category: "Design",
    type: "Remote Friendly",
    title: "Digital marketing intern",
    location: "Mohali ",
    time: "Summer 2026",
    pay: "Competitive Stipend",
    description:
      "Join our design system team to help shape the visual language of our products.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk1_BSzEvuagFq5AOshgXDkNh5YYYvSea4pLG2pF3MYqe5gGjy2B81GvZMNqOjrK6LNtuYmEv880ypWTlT7mgdohXHIGp83XMITN0nQJgbC1ORsCDGF7E_XNqJESVfOUMzcuLfEw4R66saGnZQQ7PPhujdQmAYg6-FKqNENjWEATLmuNrbxy5QEjc0JGfkbKXGgcIGBh5d1tK0IuaFEpiaHiKJigFsSvX6715neI1pmAtOFZGwYOQaFb79WQyPp47JXmwgumSKl9HH",
  },
  {
    category: "PHP",
    type: "Hybrid",
    title: "PHP Intern",
    location: "Mohali ",
    time: "Summer 2026",
    pay: "Competitive Stipend",
    description: "Help us scale our user base through data-driven campaigns.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJJgT21Q5nm9gkCyGiLJpd0VNeJAMML5ar2G5rVHYoZ_B6hdtF5RtrclpwUtFjgG94j_zoGorvOjnI0-S8qtrU2kL3KWjYKretgdluQ8Kup4OKHfob6TFJHbQhHfpZiJgeihctg9p5b2DgGml-t8xEngyALL_klYIWmQxEh0GsWHvl8gW0uL7DaYjUtGK9WJz6YK11jgYQAleb2zbMNaexsJY6ouv2mICPYDOsTlS6S1bP9UzCb-kEY8ZoA8u6TzACiVMeRMktm5D",
  },
];

function InternshipOpenings() {
  return (
    <section className="padd">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            <div className="header-main mb-4">
              <h2 className="">Open Internship Positions</h2>
              <p className="text-muted mt-2">Found 3 roles for Summer 2026</p>
              <hr />
            </div>
          </div>

          <div className="row g-3">
            {internships.map((job, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="intern-card g-0">
                  <div className="p-4 d-flex flex-column gap-3">
                    <div className="mb-2">
                      <span className="badge text-white me-2">
                        {job.category}
                      </span>
                      <span className="badge text-black bg-light">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="fw-bold">{job.title}</h4>

                    <div className="text-muted small mb-2">
                      {job.location} • {job.time} • {job.pay}
                    </div>

                    <p className="text-muted">{job.description}</p>

                    <div className="d-flex gap-2">
                      <a href="#current-opening-form" className="btn btn-primary">Apply Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipOpenings;
