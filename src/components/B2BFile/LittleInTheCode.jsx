import { Code, ListChecks } from "lucide-react";
import "./B2bPartners.css";


const services = [
  "Requirements",
  "Scoping & estimates",
  "UX & user flows",
  "Architecture",
  "Integrations",
  "Testing & QA",
  "Security review",
  "Deployment",
  "Maintenance",
  "Client communication",
];

export default function LittleInTheCode() {
  return (
    <section className="lic padd">
      <div className="container">
        <h2 className="main__title">
         AI writes the code. That’s roughly 30% of the job.
        </h2>

        <p className="b2b_main_para">
          Coding agents have made writing code faster for everyone. The other 70% is what decides whether your client gets a product that works, and it still takes experienced people and time.
        </p>

        <div className="lic__bar">
          <div className="lic__segment lic__segment--code">
            <Code size={14} strokeWidth={2.4} />
            <span>30% code</span>
          </div>
          <div className="lic__segment lic__segment--rest">
            <ListChecks size={14} strokeWidth={2.4} />
            <span>70% everything else (planning to deployment)</span>
          </div>
        </div>

        <p className="lic__sub">We do — for SMBs and ScaleUs:</p>

        <ul className="lic__pills">
          {services.map((label) => (
            <li className="lic__pill" key={label}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}