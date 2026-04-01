import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "EV Scooter UI & Web Design",
    category: "UI/UX Design",
    tools: "Figma, Wireframing, High-Fidelity Design",
    image: "/images/evo.webp",
    link: "https://www.behance.net/gallery/244814567/EV-Scooter-UI-and-Web-Design",
  },
  {
    title: "LABORA Skincare Brand Identity",
    category: "Branding & Packaging",
    tools: "Adobe Illustrator, Photoshop, Brand Identity",
    image: "/images/labora.webp",
    link: "https://www.behance.net/gallery/234726971/LABORA-Skin-Care-brand-identity",
  },
  {
    title: "Premium Snacks Packaging",
    category: "Packaging Design",
    tools: "Adobe Illustrator, Typography, Color Theory",
    image: "/images/snack.webp",
    link: "https://www.behance.net/gallery/225301437/created-some-premium-snacks-packing",
  },
  {
    title: "Social Media & Business Card Design",
    category: "Graphic Design",
    tools: "Photoshop, Illustrator, Social Media Creatives",
    image: "/images/BusinessCard.webp",
    link: "https://www.behance.net/gallery/225089275/i-designed-10-post-and-bossiness-card-for-a-client",
  },
  {
    title: "Business Cards — Multiple Clients",
    category: "Print Design",
    tools: "Adobe Illustrator, Layout Design, Branding",
    image: "/images/BusinessCard2.webp",
    link: "https://www.behance.net/gallery/224224187/i-created-business-card-for-two-persons",
  },
  {
    title: "Graphic Designer Portfolio",
    category: "UI/UX & Portfolio Design",
    tools: "Figma, Graphic Design, Visual Storytelling",
    image: "/images/port.webp",
    link: "https://www.behance.net/gallery/224059223/Graphic-designer-portfolio",
  },
  {
    title: "Gym App Promotional Banner",
    category: "Banner Design",
    tools: "Photoshop, Illustrator, CTA Design",
    image: "/images/promobanner.webp",
    link: "https://www.behance.net/gallery/223631373/gym-app-promotional-banner",
  },
  {
    title: "Chips Packaging Design",
    category: "Packaging Design",
    tools: "Adobe Illustrator, Bold Typography, Color",
    image: "/images/chipspack.webp",
    link: "https://www.behance.net/gallery/223387017/chips-packing",
  },

];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools &amp; Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage 
                image={project.image} 
                alt={project.title} 
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
