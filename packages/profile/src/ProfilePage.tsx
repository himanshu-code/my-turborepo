import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileStats } from "./components/ProfileStats";
import { ProfileInfo } from "./components/ProfileInfo";

export function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10 animate-fade-in-up pb-12">
      <ProfileHeader />
      <ProfileStats />
      <ProfileInfo />
    </div>
  );
}
