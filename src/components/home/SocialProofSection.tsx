import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const integrations = [
  "Salesforce", "HubSpot", "Slack", "Notion", "Zendesk",
  "Intercom", "SAP", "NetSuite", "Google Workspace", "Pipedrive",
];

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-caption font-medium text-text-tertiary uppercase tracking-wider mb-6">
            Integrates with the tools your team already uses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {integrations.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="text-body-sm font-medium text-text-secondary/70 hover:text-foreground transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
