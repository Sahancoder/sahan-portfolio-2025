import Section from "../components/Section";
import { Icon } from "@iconify/react";
import { certifications } from "../data/certifications";
import { motion } from "framer-motion";

export default function Certifications(){
  return (
    <Section id="certs" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, index) => (
          <motion.article 
            key={c.title} 
            className="bg-card border border-white/5 hover:border-white/20 transition rounded-xl p-4 flex gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-white/[0.04]">
              <Icon icon={c.icon} width="24" height="24" />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium truncate group-hover:text-accent transition">{c.title}</h3>
              <p className="text-sm text-white/70">{c.issuer}</p>
              <p className="text-xs text-white/50">
                {c.issued}{c.expires ? ` · Expires ${c.expires}` : ""}
              </p>
              {c.skills?.length ? (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.skills.map(s => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-white/5">{s}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
