import React from 'react';

const Skills: React.FC = () => {
  return (
    <section>
      <h2>Skills & Knowledge</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Cloud & IaC</h4>
          <ul>
            <li>AWS</li>
            <li>Azure</li>
            <li>Terraform</li>
            <li>CloudFormation</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Design & Governance</h4>
          <ul>
            <li>Cloud Infrastructure Design & Enablement</li>
            <li>Cross-functional SME Collaboration</li>
            <li>Policy-as-code, CCoE guardrails</li>
            <li>Rightsizing, gp2 → gp3, Idle resource decommissioning</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Automation & DevOps</h4>
          <ul>
            <li>Lambda cleanup workflows</li>
            <li>Agile 2-week sprints</li>
            <li>ServiceNow request routing</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Networking & Security</h4>
          <ul>
            <li>VPC, VNet, VPN, DNS, TLS lifecycle</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Microsoft 365 & Migrations</h4>
          <ul>
            <li>Exchange Online, Teams, SharePoint, OneDrive</li>
            <li>On-prem → AWS/Azure/M365</li>
            <li>Skype → Teams</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Infrastructure</h4>
          <ul>
            <li>VMware vSphere/Horizon View</li>
            <li>Windows & SQL Clustering</li>
            <li>F5 BigIP</li>
            <li>Veeam</li>
            <li>Ubiquiti UniFi</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Windows & Linux Administration</h4>
          <ul>
            <li>Enterprise Windows Server & Active Directory</li>
            <li>Microsoft SQL Server clustering and performance tuning</li>
            <li>Linux BIND DNS, scripting, and server administration</li>
            <li>PowerShell automation and systems management</li>
            <li>Long-term on-premises and hybrid systems administration (2006–present)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Kubernetes (Self-Directed Learning)</h4>
          <ul>
            <li>Talos Linux + Flux GitOps</li>
            <li>Cilium (eBPF CNI), Rook Ceph</li>
            <li>cert-manager, External DNS, VolSync</li>
            <li>Renovate + GitHub Actions</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>HomeLab</h4>
          <ul>
            <li>Built and managed a self-hosted UniFi network</li>
            <li>Designed topology, ran and patched structured cabling, racked switches/servers/APs with proper labeling and management</li>
            <li>Configured entire network, storage, software stack using IaC & CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;