import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section>
      <h2>Work Experience</h2>

      <div className="job">
        <div className="job-header">
          <div>
            <div className="job-title">Cloud Engineer</div>
            <div className="company">Constellation Brands, Inc. - Canandaigua, NY</div>
          </div>
          <div className="date">5/2022 – Present</div>
        </div>
        <ul>
          <li>Reviewed and approved Accenture change requests against CCoE guardrails while enabling secure updates.</li>
          <li>Led Accenture offshore team through FY26 cost-avoidance program via weekly cadence; delivered over $240,000 in validated fiscal year savings via automated snapshot cleanup (prod/non-prod retention), gp2→gp3 migrations, idle resource decommissioning, and EC2 rightsizing.</li>
          <li>Directed Accenture engineers in building org-wide cleanup solution using CloudFormation to orchestrate Lambda workflows across 78+ AWS accounts with S3 reporting; enforced tiered snapshot retention contributing towards over $240,000 in fiscal year savings.</li>
          <li>Directed Accenture engineers on proactive risk remediation - Trusted Advisor compliance, IAM access key rotations, anomaly detection with team notifications, and preemptive monitoring; reducing downtime while routing ServiceNow tickets to the appropriate assignment groups as well as CCoE backlog for fulfillment.</li>
          <li>Utilized Terraform modules for Identity Center, Landing Zones, and account bootstrapping - reducing deployment time from days to hours.</li>
          <li>Helped establish and operationalize the Cloud Center of Excellence (CCoE), designing AWS and Azure governance standards (VPC, IAM, resource naming and tagging, landing zones) deployed via Terraform and CloudFormation; reduced manual deployments through policy-as-code.</li>
          <li>Served as SME for various technologies and initiatives during cross-functional project syncs, aligning internal teams with CCoE standards in 2-week Agile sprints.</li>
          <li>Utilized Terraform modules and CloudFormation templates in sprint cycles to automate CCoE-compliant provisioning - Identity Center, account bootstrapping, networking, and cleanup solutions that utilize cloud services to drive our OKRs forward while maintaining our established standards.</li>
          <li>Built framework to support Infrastructure teams in migrations to AWS, in support of our Cloud First approach.</li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <div>
            <div className="job-title">Senior Office 365 Engineer</div>
            <div className="company">Constellation Brands, Inc. - Canandaigua, NY</div>
          </div>
          <div className="date">3/2020 – 5/2022</div>
        </div>
        <ul>
          <li>SME for Office 365, Messaging & Collaboration suites.</li>
          <li>Global enterprise support of all Messaging & Collaboration platforms: Proofpoint, Exchange Online, SharePoint Online, OneDrive, Microsoft Teams, Azure, Power Apps, and the entire Microsoft 365 cloud technology stack. These products are globally used in locations such as the US, Mexico, Italy, and New Zealand.</li>
          <li>Facilitated conversations to plan and implement B2B solutions. Leverage Azure to securely provide a way to collaborate between organizations and various cloud technologies.</li>
          <li>Responsible for Azure requests related to directory access and application provisioning. Assist IAM, Cloud, Infrastructure, Enterprise Architecture, and Systems Management teams with solutioning various project needs.</li>
          <li>Led team with retirement of Skype and the migration to Microsoft Teams.</li>
          <li>Additional responsibilities include operational activity support as it relates to divestitures and acquisitions.</li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <div>
            <div className="job-title">IT Systems Operations Engineer</div>
            <div className="company">1105 Media, Inc. - Woodland Hills, CA</div>
          </div>
          <div className="date">6/2018 – 3/2020</div>
        </div>
        <ul>
          <li>Responsible for Infrastructure architecture and development in an enterprise environment. Currently leveraging public / private cloud and virtualization technologies.</li>
          <li>Architected and managed VMware vSphere clusters, Sitecore CMS, F5 BigIP, SQL clustering, and Veeam backups.</li>
          <li>Led on-prem to Office 365, Azure, AWS migrations; implemented DirectAccess and site-to-site VPNs utilizing Sonicwall hardware.</li>
          <li>Responsible for the enterprise TLS lifecycle.</li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <div>
            <div className="job-title">Internet Systems Engineer</div>
            <div className="company">1105 Media, Inc. - Woodland Hills, CA</div>
          </div>
          <div className="date">3/2006 – 6/2018</div>
        </div>
        <ul>
          <li>Enterprise Network WAN/LAN Management: Racking, stacking, and cabling of servers and storage devices in multiple data centers.</li>
          <li>Responsible for networking devices, F5 BigIP, iRule scripting, SSL offloading, Linux BIND DNS servers, Active Directory, ADFS, Microsoft Windows and SQL clustering.</li>
          <li>Directly responsible for architecting, deploying, and maintaining VMware environment hosting corporate resources and clustered Sitecore CMS based websites located in a managed data center in Burbank, CA.</li>
          <li>Reduced operating costs by migrating acquired companies onto our corporate network and bandwidth.</li>
          <li>Migrated on-premises corporate resources to Office 365. Administration of Office 365 resources.</li>
          <li>Exchange, SharePoint, Teams, OneDrive migrations.</li>
          <li>Implementation of DirectAccess for seamless network connectivity. Created site-to-site tunnels to integrate branch offices and network services.</li>
          <li>Deployment of new servers for both corporate and web usage. Microsoft SQL Server performance tuning. Architecture of VMware clusters and shared storage.</li>
          <li>VMware Horizon View and App Volumes deployment. Deployment of Dell and HP fiber Modular Storage Arrays, fiber switch zoning.</li>
          <li>Responsible for web and corporate network remote backups using Veeam Backup & Replication.</li>
          <li>Responsible for corporate domain names and SSL certificate registrations and renewals.</li>
          <li>Support DevOps team during migration of legacy sites into the new Sitecore CMS environment.</li>
          <li>Microsoft System Center, Nagios and Cacti network monitoring.</li>
          <li>Responsible for domain name registrations, maintenance, and renewals of 600+ owned domain names.</li>
          <li>Google Analytics monthly reporting. Powershell automation.</li>
        </ul>
      </div>

    </section>
  );
};

export default WorkExperience;