import "../cssFiles/section2.css";
import React, { useState } from "react";

import buzilogBg from "../../assets/projects_bgs/buzilog_bg.png";
import ffcSurveyAppBg from "../../assets/projects_bgs/ffc_survey_app_bg.png";
import buzipmsBg from "../../assets/projects_bgs/buzipms_bg.jpg";
import buzitaskBg from "../../assets/projects_bgs/buzitask_bg.jpg";
import basecraftBg from "../../assets/projects_bgs/basecraft_bg.png";
import battleSpaceBg from "../../assets/projects_bgs/battle_space_bg.png";
import godOfWarBg from "../../assets/projects_bgs/godofwar_bg.jpg";
import weatherBg from "../../assets/projects_bgs/weather_bg.png";
import calculatorBg from "../../assets/projects_bgs/calculator_Bg.png";
import dream11Bg from "../../assets/projects_bgs/dream11_Bg.png";
import sangeetBg from "../../assets/projects_bgs/sangeet_Bg.png";
import zombivaliBg from "../../assets/projects_bgs/zombivali_Bg.png";

import {
  Typography,
  Grid2,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const Item = ({ title, description, img, role, links = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Custom button colors + icons
  const getButtonConfig = (label) => {
    switch (label.toLowerCase()) {
      case "play store":
        return {
          icon: <AndroidIcon />,
          style: { backgroundColor: "#34a853", color: "white" },
        };
      case "app store":
        return {
          icon: <AppleIcon />,
          style: { backgroundColor: "#000000", color: "white" },
        };
      case "github":
        return {
          icon: <GitHubIcon />,
          style: { backgroundColor: "#24292f", color: "white" },
        };
      case "youtube video":
        return {
          icon: <YouTubeIcon />,
          style: { backgroundColor: "#ff0000", color: "white" },
        };
      case "website":
        return {
          icon: <LanguageIcon />,
          style: { backgroundColor: "#1a73e8", color: "white" },
        };
      default:
        return {
          icon: <LanguageIcon />,
          style: { backgroundColor: "#1976d2", color: "white" },
        };
    }
  };

  return (
    <>
      {/* Project Card */}
      <div
        style={{
          borderRadius: "12px",
          backgroundColor: "#292C34",
          width: "330px",
          height: "280px",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          border: isHovered ? "2px solid white" : "none",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          style={{
            borderRadius: "8px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid #6c757d",
            width: "306px",
            height: "156px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
        <div
          style={{
            alignSelf: "start",
            paddingRight: "15px",
            paddingLeft: "15px",
          }}
        >
          <Typography
            style={{
              fontSize: "20pt",
              fontFamily: "Asap",
              fontWeight: "bolder",
              color: "#E2E4E9",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontSize: "10pt",
              fontFamily: "Maven Pro",
              color: "#C0C4CE",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
        </div>
      </div>

      {/* Popup Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "#1e1f25", // Dark dialog
            color: "#E2E4E9",
            borderRadius: "12px",
            padding: "10px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Asap",
            fontWeight: "bold",
            fontSize: "24px",
            color: "#ffffff",
          }}
        >
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent", // black or transparent
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#454951ff", // grey handle
              borderRadius: "4px",
            },
          }}
        >
          <img
            src={img}
            alt={title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
          />
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "Maven Pro", fontSize: "14pt", color: "#d1d5db" }}
          >
            {description}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              marginTop: "16px",
              fontFamily: "Asap",
              fontSize: "16pt",
              color: "#ffffff",
            }}
          >
            My Role:
          </Typography>

          {Array.isArray(role) ? (
            <ul
              style={{
                marginTop: "8px",
                paddingLeft: "20px",
                color: "#cbd5e1",
              }}
            >
              {role.map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "Maven Pro",
                    fontSize: "12pt",
                    marginBottom: "4px",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontFamily: "Maven Pro",
                fontSize: "12pt",
                color: "#cbd5e1",
              }}
            >
              {role}
            </Typography>
          )}

          {/* Multiple Links */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {links.map((l, i) => {
              const { icon, style } = getButtonConfig(l.label);
              return (
                <Button
                  key={i}
                  href={l.url}
                  target="_blank"
                  startIcon={icon}
                  style={{
                    ...style,
                    fontFamily: "Maven Pro",
                    fontWeight: "600",
                    textTransform: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                  }}
                >
                  {l.label}
                </Button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Section2 = () => {
  return (
    <div className="backgroundSection2">
      <div
        style={{
          maxWidth: "1050px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container1sec2">
          <Typography className="section2titletext">
            See Featured Projects
          </Typography>
        </div>
        <div
          className="container2sec2"
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginBottom: "144px",
          }}
        >
          <Grid2
            container
            spacing={{ xs: 3, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid2>
              <Item
                title="FFCorp Survey App"
                description="FFCorp Survey App is a powerful and flexible tool designed for seamless inspections, audits, and reporting. With fully customizable dynamic forms, it allows users to capture and submit real-time information effortlessly. Supports various field types, including text, email, numbers, dropdowns, multiple-choice questions (MCQ), and more. Capture and upload photos, videos, and documents directly from your device. A simple and intuitive design for quick and efficient form completion. Ideal for field inspections, surveys, audits, and reporting, FFCorp Survey App ensures accurate and efficient data capture anytime, anywhere."
                img={ffcSurveyAppBg}
                role={[
                  "Designed intuitive UI/UX for field inspections",
                  "Built reusable Flutter components",
                  "Implemented offline-first data handling",
                  "Integrated Firebase Remote Config & Crashlytics",
                  "Developed dynamic form builder (text, MCQ, dropdown, etc.)",
                  "Deployed to Play Store & App Store",
                ]}
                links={[
                  {
                    label: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.nimapinfotech.ffcorpsurvey&hl=en_US",
                  },
                  {
                    label: "App Store",
                    url: "https://apps.apple.com/in/app/ffcorp-survey/id6742974051",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="Battle Space"
                description="Battle Space is an immersive arcade-style space combat game where players command advanced spacecraft in visually stunning cosmic battles. Featuring adaptive difficulty, deep customization of ships, and a gripping storyline, the game challenges players to reclaim galaxies, face diverse alien fleets, and uncover hidden mysteries. With its intuitive controls, cinematic graphics, and strategic combat system, Battle Space delivers a thrilling space adventure that blends action with tactical depth."
                img={battleSpaceBg}
                role={[
                  "Designed immersive UI/UX tailored for space combat gameplay.",
                  "Integrated adaptive difficulty system for balanced player experience.",
                  "Designed alien spaceship AI behaviors.",
                  "Optimized performance to ensure smooth gameplay across devices.",
                  "Implemented dynamic backgrounds and particle effects for realistic space visuals.",
                  "Conducted playtesting & balancing to fine-tune difficulty curves.",
                  "Deployed complete project from scratch, handling core features, UI, and gameplay systems.",
                ]}
                links={[
                  {
                    label: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.rugved.battle_space&hl=en_US",
                  },
                  //   { label: "Youtube Video", url: "#" },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="Basecraft"
                description="Basecraft is a reusable Flutter project setup package that jumpstarts app development with essential utilities out of the box. It offers a pre-configured networking layer using Dio (with interceptors), helper utilities like file and path handling, modular architecture for scaling, and streamlined setup for GetX, SQLite, persistent storage, connectivity checks, and logging—all aimed at enabling developers to build apps faster and more reliably."
                img={basecraftBg}
                role={[
                  "Developed and architected the entire package from scratch, including API client, storage, and helper modules.",
                  "Created ApiClient with Dio integration—supporting GET/POST/PUT/PATCH/DELETE, file downloads, error handling, and connectivity checks.",
                  "Built SqfLiteService for reusable and simplified local database operations with customizable DbHelper interface.",
                  "Implemented AppStorage singleton for streamlined key-value storage using get_storage.",
                  "Developed CacheStorage utility for file-based local caching with minimal dependencies.",
                  "Designed and implemented Shimmer widget and modular UI helpers for loading states and layout utilities.",
                  "Packaged permission handlers, connectivity checks, and utility extensions for rapid integration into Flutter projects.",
                  "Ensured Dart 3 compatibility, cross-platform support (Android & iOS), proper documentation, and published the package to pub.dev.",
                ]}
                links={[
                  {
                    label: "Pub Dev Link",
                    url: "https://pub.dev/packages/basecraft",
                  },
                  {
                    label: "Youtube Video",
                    url: "https://www.youtube.com/watch?v=lKk5IzBpCeI",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="BuziLogs"
                description="A goal tracking and productivity enhancement app, Buzilog empowers users to define, track, and reflect on both personal and professional goals."
                img={buzilogBg}
                role={[
                  "Built shipment tracking & real-time updates",
                  "Enhanced analytics dashboard for business insights",
                  "Optimized APIs for performance",
                  "Improved scalability & responsiveness",
                ]}
                links={[
                  {
                    label: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.nimap.buzilog&hl=en_US",
                  },
                  {
                    label: "App Store",
                    url: "https://apps.apple.com/in/app/buzilog/id6740628769",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="BuziPMS"
                description="Developed as a streamlined project management system tailored for small and medium teams, BuziPMS consolidates task assignment, progress tracking, and team collaboration into a single mobile interface. I architected key modules for project setup, milestone tracking, and real-time updates, prioritizing responsiveness and clarity to help users manage workloads efficiently. The app aims to enhance transparency and operational control across client-facing and internal projects"
                img={buzipmsBg}
                role={[
                  "Contributed task allocation & milestone tracking features",
                  "Enhanced team collaboration modules",
                  "Improved UI for dashboards",
                  "Collaborated with backend team for seamless data sync",
                ]}
                links={[
                  {
                    label: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.nimap.buzipms&hl=en_US",
                  },
                  {
                    label: "App Store",
                    url: "https://apps.apple.com/in/app/buzipms/id6748728304",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="BuziTask"
                description="BuziTask delivers a focused task management tool aligned with daily productivity needs. I contributed to designing a lightweight to‑do app enabling users to capture tasks, set priorities, manage deadlines, and track completion in a clean, minimalist interface. The app supports categorization and quick logging, enabling professionals to plan their day effectively and stay on top of priorities."
                img={buzitaskBg}
                role={[
                  "Designed clean & minimalist UI/UX",
                  "Implemented task scheduling and reminders",
                  "Built categorization & priority system",
                  "Synced data across devices",
                ]}
                links={[
                  {
                    label: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.nimap.buzitask&hl=en_US",
                  },
                  {
                    label: "App Store",
                    url: "https://apps.apple.com/in/app/buzitask/id6749172343",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="God of War"
                description="It is an action-adventure game which is played by a single-player. It is entirely a story-based which has a character KRATOS which fights with evils as a revenge for his wife dead. It is developed on UNITY engine is a desktop game. It is the clone of GOD of WAR game."
                img={godOfWarBg}
                role={[
                  "Developed combat mechanics & core gameplay loop",
                  "Designed levels and interactive environment",
                  "Optimized performance for smooth gameplay",
                ]}
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/rugved1212/GOD-OF-WAR",
                  },
                  {
                    label: "Youtube Video",
                    url: "https://www.youtube.com/watch?v=p_yvdIV288s",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="Zombivali"
                description="It is a FPS Zombie Survival Game in which the waves of zombies comes endlessly and we have kills those zombies to survive. It has inventory and money system with multiple weapons to buy and use.It is developed on UNITY engine and uses C# for scripting and it’s a desktop game."
                img={zombivaliBg}
                role={[
                  "Designed AI-driven zombie behavior",
                  "Implemented wave-based survival gameplay",
                  "Integrated weapon & resource system",
                  "Balanced difficulty progression",
                ]}
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/rugved1212/Zombivali",
                  },
                  {
                    label: "Youtube Video",
                    url: "https://www.youtube.com/watch?v=189XENoEalM",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="Sangeet App"
                description="Free Online Music Streaming Application which can stream the stream the musics/songs online for free and also download them to experience them offline. It is a mobile application made in android studio using JAVA and for designing the UI, XML is used also FIREBASE as Database for storing music files and user authentication."
                img={sangeetBg}
                role={[
                  "Developed custom music player engine",
                  "Implemented offline downloads & caching",
                  "Built Firebase-based authentication & storage",
                  "Designed user-friendly music browsing UI",
                ]}
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/rugved1212/Sangeet",
                  },
                  {
                    label: "Youtube Video",
                    url: "https://www.youtube.com/watch?v=eLj5lOPGB1I",
                  },
                ]}
              />
            </Grid2>

            <Grid2>
              <Item
                title="Dream 11 Clone"
                description="Dream11 is a fantasy sports app where users create virtual teams based on real-life players and earn points based on the players' performances in actual matches. It offers various sports, including cricket, football, kabaddi, and more, allowing users to compete in contests for cash prizes and rewards. It is a mobile application made in android studio using JAVA and for designing the UI, XML is used also FIREBASE as Database for storing match/players details and user authentication."
                img={dream11Bg}
                role={[
                  "Created team selection & fantasy scoring system",
                  "Integrated Firebase for player/match data",
                  "Designed contest join & leaderboard feature",
                  "Built authentication & user profiles",
                ]}
                links={[
                  {
                    label: "GitHub",
                    url: "https://github.com/rugved1212/Dream-11",
                  },
                ]}
              />
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};

export default Section2;
