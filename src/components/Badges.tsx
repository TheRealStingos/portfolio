import { FaAws, FaCloudflare, FaCss3, FaCss3Alt, FaDocker, FaGithub, FaGitSquare, FaHtml5, FaJs, FaJsSquare, FaNode, FaPython, FaReact } from "react-icons/fa";
import Skills from "./Skills";
import { SiCss, SiExpress, SiFastapi, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiNginxproxymanager, SiPostgresql, SiReact, SiSqlalchemy, SiTailwindcss, SiTypescript, SiVitest } from "react-icons/si";
import { FaLinux} from "react-icons/fa6";
import { BsTypescript } from "react-icons/bs";

export default function Badges() {
    return (
        <section className="flex gap-20 items-center justify-center">
            {/*Front End*/}
            <article className="flex flex-col items-center">
                <h1 className="text-slate-900">Front End</h1>
                <div className="grid grid-cols-3">
                    <Skills logo={FaHtml5} title="HTML5" description={null} variant="badge" />
                    <Skills logo={FaCss3Alt} title="CSS3" description={null} variant="badge" />
                    <Skills logo={FaJsSquare} title="JavaScipt" description={null} variant="badge" />
                    <Skills logo={BsTypescript} title="TypeScript" description={null} variant="badge" />
                    <Skills logo={SiTailwindcss} title="Tailwind" description={null} variant="badge" />
                    <Skills logo={FaReact} title="React" description={null} variant="badge" />
                    <Skills logo={SiNextdotjs} title="Nextjs" description={null} variant="badge" />
                </div>
            </article>

            {/*Back End*/}
            <article className="flex flex-col items-center">
                <h1 className="text-slate-900">Back End</h1>
                <div className="grid grid-cols-2">
                    <Skills logo={FaNode} title="Node" description={null} variant="badge" />
                    <Skills logo={SiExpress} title="Express" description={null} variant="badge" />
                    <Skills logo={FaPython} title="Python" description={null} variant="badge" />
                    <Skills logo={SiFastapi} title="FastAPI" description={null} variant="badge" />
                    <Skills logo={SiSqlalchemy} title="" description={null} variant="badge" iconSize={60}/>
                    <Skills logo={SiPostgresql} title="PostgreSQL" description={null} variant="badge" />
                </div>
            </article>
            
            {/*Tools*/}
            <article className="flex flex-col items-center">
                <h1 className="text-slate-900">Tooling & Infrastructure</h1>
                <div className="grid grid-cols-3">
                    <Skills logo={SiJest} title="Jest" description={null} variant="badge" />
                    <Skills logo={SiVitest} title="Vitest" description={null} variant="badge" />
                    <Skills logo={FaGithub} title="Github" description={null} variant="badge" />
                    <Skills logo={FaLinux} title="Linux" description={null} variant="badge" />
                    <Skills logo={FaDocker} title="Docker" description={null} variant="badge" />
                    <Skills logo={SiNginxproxymanager} title="Nginx PM" description={null} variant="badge" />
                    <Skills logo={FaCloudflare} title="Cloudflare" description={null} variant="badge" />
                    <Skills logo={FaAws} title="" description={null} variant="badge" />
                </div>
            </article>
        </section>
    )
}