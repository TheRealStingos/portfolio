import { FaAws, FaCloudflare, FaCss3, FaDocker, FaGithub, FaGitSquare, FaHtml5, FaJs, FaNode, FaPython, FaReact } from "react-icons/fa";
import Skills from "./Skills";
import { BsTypescript } from "react-icons/bs";
import { SiExpress, SiFastapi, SiJest, SiNginxproxymanager, SiPostgresql, SiSqlalchemy, SiTailwindcss, SiVitest } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

export default function Badges() {
    return (
        <section className="flex gap-20 items-center justify-center">
            {/*Front End*/}
            <article className="flex flex-col items-center">
                <h1>Front End</h1>
                <div className="grid grid-cols-3">
                    <Skills logo={FaHtml5} title="HTML" description={null} variant="badge" />
                    <Skills logo={FaCss3} title="CSS" description={null} variant="badge" />
                    <Skills logo={FaJs} title="JavaScipt" description={null} variant="badge" />
                    <Skills logo={BsTypescript} title="TypeScript" description={null} variant="badge" />
                    <Skills logo={SiTailwindcss} title="Tailwind" description={null} variant="badge" />
                    <Skills logo={FaReact} title="React" description={null} variant="badge" />
                    <Skills logo={RiNextjsFill} title="Nextjs" description={null} variant="badge" />
                </div>
            </article>

            {/*Back End*/}
            <article className="flex flex-col items-center">
                <h1>Back End</h1>
                <div className="grid grid-cols-2">
                    <Skills logo={FaPython} title="Python" description={null} variant="badge" />
                    <Skills logo={SiFastapi} title="FastAPI" description={null} variant="badge" />
                    <Skills logo={FaNode} title="Node" description={null} variant="badge" />
                    <Skills logo={SiExpress} title="Express" description={null} variant="badge" />
                    <Skills logo={SiSqlalchemy} title="SQLAlchemy" description={null} variant="badge" />
                    <Skills logo={SiPostgresql} title="PostgreSQL" description={null} variant="badge" />
                </div>
            </article>
            
            {/*Tools*/}
            <article className="flex flex-col items-center">
                <h1>Tooling & Infrastructure</h1>
                <div className="grid grid-cols-3">
                    <Skills logo={SiJest} title="Jest" description={null} variant="badge" />
                    <Skills logo={SiVitest} title="Vitest" description={null} variant="badge" />
                    <Skills logo={FaGithub} title="Github" description={null} variant="badge" />
                    <Skills logo={FaLinux} title="Linux" description={null} variant="badge" />
                    <Skills logo={FaDocker} title="Docker" description={null} variant="badge" />
                    <Skills logo={SiNginxproxymanager} title="Nginx Proxy" description={null} variant="badge" />
                    <Skills logo={FaCloudflare} title="Cloudflare" description={null} variant="badge" />
                    <Skills logo={FaAws} title="AWS" description={null} variant="badge" />
                </div>
            </article>
        </section>
    )
}