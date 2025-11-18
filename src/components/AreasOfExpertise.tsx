import React from 'react';

const AreasOfExpertise: React.FC = () => {
  return (
    <section>
      <h2>Areas of Expertise</h2>
      <div className="expertise-columns">
        <ul>
          <li>AWS / Azure / M365 Cloud Infrastructure</li>
          <li>Infrastructure / Policy-as-code</li>
          <li>CCoE Governance & Standards</li>
          <li>Agile Framework</li>
          <li>Windows & Linux Administration</li>
        </ul>
        <ul>
          <li>Cost Optimization & FinOps</li>
          <li>Virtualization Technologies</li>
          <li>Automation & Scripting</li>
          <li>Solution Design</li>
          <li>ITIL</li>
        </ul>
      </div>
    </section>
  );
};

export default AreasOfExpertise;