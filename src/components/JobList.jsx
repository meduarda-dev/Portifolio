import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

// Renderiza um item de desc: string vira bullet simples,
// objeto {text, subBullets} vira bullet com sub-lista
function DescItem({ item, delay }) {
  if (typeof item === "string") {
    return (
      <FadeInSection delay={delay}>
        <li>{item}</li>
      </FadeInSection>
    );
  }

  return (
    <FadeInSection delay={delay}>
      <li>
        {item.text}
        {item.subBullets && item.subBullets.length > 0 && (
          <ul className="job-description-sub">
            {item.subBullets.map((sub, j) => (
              <li key={j}>{sub}</li>
            ))}
          </ul>
        )}
      </li>
    </FadeInSection>
  );
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  // controla qual "role" está selecionado dentro de cada empresa (timeline)
  const [roleValue, setRoleValue] = React.useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Toda empresa agora tem um array "roles".
  // Empresas com 1 role só = comportamento normal.
  // Empresas com 2+ roles = renderiza timeline pra trocar entre elas.
  const experienceItems = {
    Dataprev: {
      roles: [
        {
          jobTitle: "Frontend Developer Intern",
          duration: "MAR 2025 - PRESENT",
          desc: [
            {
              text: "I build web and mobile applications for digital public services used by people across Brazil.",
              subBullets: [
                "Develop frontend applications using TypeScript, JavaScript, Angular, React, and React Native",
                "Integrate frontend applications with backend services through REST APIs",
                "Develop automated mobile tests with Maestro and perform functional testing to identify inconsistencies and ensure reliable user flows",
                "Participate in code reviews, requirements gathering, and Scrum ceremonies",
                
                "Contributed to a platform that surpassed 500,000 accesses in less than a year after launch, supporting digital inclusion at a national scale"
              ]
            },
          ],
        },
        {
          jobTitle: "UX Designer Intern",
          duration: "MAR 2025 - SEP 2025", 
          desc: [
            {
              text: "Designed and prototyped interfaces using Figma and Adobe XD, with a focus on usability and accessibility",
              subBullets: [
                "Meet with clients to gather requirements, present ideas, and collect feedback",
                "Conduct functional and usability testing to validate flows and identify friction points in the user journey",
                "Work closely with frontend developers to ensure designs are aligned with technical requirements and implementation constraints",
                "Help bridge the gap between design, clients, and code, bringing a UX perspective to the development process",
                "Identify usability issues before implementation through structured testing"
            ]
            },
          ],
        },
      ],
    },
    "Rio Grande Hospital": {
      roles: [
        {
          jobTitle: "Infrastructure Intern",
          duration: "AUG 2024 - FEB 2025",
          desc: [
            {
              text: "Created a repository to track completed and pending improvements for hospital emergency systems, supporting the planning and prioritization of critical maintenance",
              subBullets: [
                "Installed, configured, and updated operating systems and software packages on workstations",
                "Diagnosed and resolved hardware, network, and connectivity issues, prioritizing requests based on service criticality",
                "Managed technical support tickets, documenting root causes and applied solutions",
                "Reduced technical troubleshooting time through structured root cause analysis",
                "Improved remote support by translating technical concepts into clear guidance for users with different levels of technical knowledge",
            ]
            },
          ],
        },
      ],
    },
    "Seda College": {
      roles: [
        {
          jobTitle: "English Teacher",
          duration: "FEB 2024 - JUL 2024",
          desc: [
            {
              text: "Plan and teach English classes for students across different proficiency levels",
              subBullets: [
                "Create teaching materials and assessments to support student learning and track progress",
                "Manage lesson schedules and adapt teaching strategies to individual student needs",
                "Develop strong communication and public speaking skills through classroom instruction",
                "Collaborate with colleagues in an educational environment and contribute to a supportive learning experience"
              ]
            }
          ]
        },
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRoleChange = (companyKey, roleIndex) => {
    setRoleValue((prev) => ({ ...prev, [companyKey]: roleIndex }));
  };

  return (
    <Box sx={{
      flexGrow: 1,
      bgcolor: "transparent",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      height: "auto",
      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={i}
            label={key}
            {...a11yProps(i, isMobile)}
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--green-bright)"
              },
              "&:hover": {
                color: "var(--green-bright)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => {
          const company = experienceItems[key];
          const roles = company.roles;
          const activeRole = roleValue[key] || 0;
          const current = roles[activeRole];

          return (
            <TabPanel key={i} value={value} index={i} isMobile={isMobile}>
              {roles.length > 1 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 8,
                    mb: 2,
                    borderLeft: "2px solid var(--lightest-navy)",
                    pl: 2,
                  }}
                >
                  {roles.map((role, roleIdx) => (
                    <Box
                      key={roleIdx}
                      onClick={() => handleRoleChange(key, roleIdx)}
                      sx={{
                        cursor: "pointer",
                        position: "relative",
                        color: activeRole === roleIdx ? "var(--green-bright)" : "var(--slate)",
                        fontFamily: "NTR",
                        fontSize: "13px",
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          left: "-25px",
                          top: "4px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor:
                            activeRole === roleIdx ? "var(--green-bright)" : "var(--lightest-navy)",
                        },
                      }}
                    >
                      {role.jobTitle}
                    </Box>
                  ))}
                </Box>
              )}

              <span className="joblist-job-title">
                {current.jobTitle + " @ "}
              </span>
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">{current.duration}</div>
              <ul className="job-description">
                {current.desc.map((descItem, di) => (
                  <DescItem key={di} item={descItem} delay={(di + 1) * 100 + "ms"} />
                ))}
              </ul>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};

export default JobList;