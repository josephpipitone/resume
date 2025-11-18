import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section>
      <h2>Certifications</h2>
      <div className="certifications">
        <div className="cert">
          <strong>AWS Certified Solutions Architect Associate</strong>
          <small>Issued 2/2025</small>
        </div>
        <div className="cert">
          <strong>AWS Certified Cloud Practitioner</strong>
          <small>Issued 12/2022</small>
        </div>
        <div className="cert">
          <strong>Microsoft Certified: Azure Fundamentals</strong>
          <small>Issued 3/2022</small>
        </div>
        <div className="cert">
          <strong>ITIL 4 Foundation</strong>
          <small>Issued 11/2022</small>
        </div>
        <div className="cert">
          <strong>VCP5-DCV: VMware Certified Professional 5</strong>
          <small>Issued 5/2013 (lapsed)</small>
        </div>
        <div className="cert">
          <strong>MCITP EA - Microsoft Certified IT Professional Enterprise Administrator</strong>
          <small>Issued 1/2013 (lapsed)</small>
        </div>
      </div>
    </section>
  );
};

export default Certifications;