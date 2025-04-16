import React, { useEffect, useState } from "react";
import CloudMigration from "../images/Success Story.jpg";

const SuccessStory = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      year: "2017",
      title: "Startup Launched",
      desc: "HADS was founded with a vision for smart cloud solutions.",
      logo: [],
    },
    {
      year: "2018",
      title: "Cloud Migration",
      desc: "Completed 50+ zero-downtime migrations to AWS, Azure & GCP.",
      logo: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      ],
    },
    {
      year: "2019",
      title: "Managed Services",
      desc: "Introduced 24/7 monitoring & auto-healing infrastructure.",
      logo: [],
    },
    {
      year: "2020",
      title: "FinOps",
      desc: "Saved clients 40%+ with intelligent AWS cost optimization.",
      logo: [],
    },
    {
      year: "2021",
      title: "DevOps",
      desc: "CI/CD pipelines, Infrastructure as Code, rollout automation.",
      logo: [],
    },
    {
      year: "2022",
      title: "Security",
      desc: "Enabled SOC2/ISO readiness, cloud firewalls, IAM audits.",
      logo: [],
    },
    {
      year: "2023",
      title: "Cybersecurity",
      desc: "Advanced WAF, GuardDuty, Zero Trust network architecture.",
      logo: [],
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        margin: "80px auto",
        width: "90%",
        maxWidth: "1200px",
        padding: "40px 20px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Soft white overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          zIndex: 1,
        }}
      />
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${CloudMigration})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      ></div>

      {/* Title Section */}
      <div
        style={{
          zIndex: 2,
          position: "relative",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          Our Success Story
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#666",
            fontWeight: "400",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          A journey through our milestones in providing top-tier cloud solutions, from cloud migration to cutting-edge cybersecurity.
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          zIndex: 2,
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 20px 1fr",
          rowGap: "60px",
          alignItems: "center",
        }}
      >
        {/* Vertical Line */}
        <div
          style={{
            gridColumn: "2 / 3",
            height: "100%",
            width: "6px",
            background: "linear-gradient(180deg, #FF6F61, #F9A825)",
            borderRadius: "10px",
            boxShadow: "0 0 30px rgba(255, 95, 61, 0.2)",
            animation: "pulseLine 2s infinite alternate",
          }}
        ></div>

        {/* Steps */}
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <React.Fragment key={i}>
              <div
                style={{
                  gridColumn: isLeft ? "1 / 2" : "3 / 4",
                  textAlign: isLeft ? "right" : "left",
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.8s ease-out ${i * 0.3}s`,
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "30px 25px",
                    backgroundColor: "#ffffff",
                    color: "#333",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                    maxWidth: "380px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 95, 61, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "12px",
                    }}
                  >
                    {step.year} – {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#555",
                      marginBottom: "15px",
                    }}
                  >
                    {step.desc}
                  </p>
                  {step.logo && step.logo.length > 0 && (
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      {step.logo.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          alt="logo"
                          style={{
                            width: "35px",
                            height: "auto",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                            padding: "4px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div style={{ gridColumn: "2 / 3" }} />
            </React.Fragment>
          );
        })}
      </div>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes pulseLine {
            0% { box-shadow: 0 0 20px #FF6F61; }
            100% { box-shadow: 0 0 50px #FF6F61; }
          }
        `}
      </style>
    </div>
  );
};

export default SuccessStory;
