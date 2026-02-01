import { Card } from "@repo/ui";
import { Edit, Share2, MapPin, Calendar, Mail } from "lucide-react";

export function ProfileHeader() {
    return (
        <Card className="mb-0 relative overflow-hidden group border-0 shadow-lg">
            {/* Cover Background */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30" />

            <div className="relative pt-24 pb-8 px-8 flex flex-col md:flex-row items-end gap-8">
                <div className="relative -mb-1">
                    <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 p-1 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="w-full h-full rounded-[20px] bg-[var(--color-surface)] flex items-center justify-center overflow-hidden">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-500 border-4 border-[var(--color-surface)] rounded-full shadow-lg" />
                </div>

                <div className="flex-1 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <h1 className="text-4xl font-extrabold text-[var(--color-text)] tracking-tight">John Doe</h1>
                            <p className="text-lg text-indigo-500 font-semibold tracking-wide">Senior Product Designer & Developer</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold text-[var(--color-text)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                                <Share2 size={18} />
                                <span>Share Profile</span>
                            </button>
                            <button className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 active:scale-95">
                                <Edit size={18} />
                                <span>Edit Profile</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--color-muted)] font-semibold">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <MapPin size={17} className="text-indigo-500" />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <Mail size={17} className="text-purple-500" />
                            <span>john.doe@modern-mfe.io</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <Calendar size={17} className="text-emerald-500" />
                            <span>Joined March 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
