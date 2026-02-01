import { Card } from "@repo/ui";
import { Github, Twitter, Linkedin, Globe, Shield, Bell, User } from "lucide-react";

export function ProfileInfo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bio & Skills */}
            <div className="lg:col-span-2 flex flex-col gap-8">
                <Card className="p-8">
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">About Me</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed text-lg">
                        I'm a passionate Senior Product Designer and Frontend Developer with over 8 years of experience building digital products.
                        I specialize in creating beautiful, functional, and user-centric interfaces using modern technologies like React, Tailwind, and Next.js.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "GraphQL", "UI/UX Design"].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-[var(--color-text)] text-xs font-semibold rounded-full border border-[var(--color-border)]">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="flex items-start gap-4">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600">
                            <Shield size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-[var(--color-text)] mb-1">Security & Privacy</h4>
                            <p className="text-sm text-[var(--color-muted)]">Verified identity. All data is encrypted and secure.</p>
                        </div>
                    </Card>
                    <Card className="flex items-start gap-4">
                        <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-purple-600">
                            <Bell size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-[var(--color-text)] mb-1">Notifications</h4>
                            <p className="text-sm text-[var(--color-muted)]">Manage your alert preferences and email setup.</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Socials & Settings Links */}
            <div className="flex flex-col gap-6">
                <Card>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Connect</h3>
                    <div className="space-y-4">
                        {[
                            { label: "Portfolio", icon: Globe, link: "modern-mfe.io", color: "text-blue-500" },
                            { label: "GitHub", icon: Github, link: "github.com/johndoe", color: "text-gray-800 dark:text-gray-200" },
                            { label: "LinkedIn", icon: Linkedin, link: "linkedin.com/in/johndoe", color: "text-blue-700" },
                            { label: "Twitter", icon: Twitter, link: "twitter.com/johndoe", color: "text-sky-500" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href="#"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <social.icon size={20} className={social.color} />
                                    <span className="text-sm font-medium text-[var(--color-text)]">{social.label}</span>
                                </div>
                                <span className="text-xs text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                                    {social.link}
                                </span>
                            </a>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Quick Links</h3>
                    <div className="space-y-2">
                        {["Account Settings", "Privacy Policy", "Help Center", "Log Out"].map((item) => (
                            <button key={item} className="w-full text-left px-4 py-2 text-sm text-[var(--color-muted)] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                {item}
                            </button>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
