import Section from "../components/Section";
import { Icon } from "@iconify/react";
import { achievements } from "../data/certifications";
import { motion } from "framer-motion";

export default function Achievements(){
  return (
    <Section id="achievements" title="Achievements">
      <div className="flex flex-wrap gap-2">
        {achievements.map((a, index) => {
          const hasLink = (a as any).link && (a as any).link !== "";
          const MotionComponent = hasLink ? motion.a : motion.div;
          const props = hasLink ? {
            href: (a as any).link,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {};

          return (
            <MotionComponent
              key={a.label}
              {...props}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/5 ${
                hasLink ? 'hover:border-accent hover:bg-white/[0.06] transition cursor-pointer' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={hasLink ? { scale: 1.05 } : undefined}
            >
              <Icon icon={a.icon} width="16" height="16" className="text-accent" />
              <span className="text-sm">{a.label}</span>
            </MotionComponent>
          );
        })}
      </div>
    </Section>
  );
}
