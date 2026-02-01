import { Home } from "lucide-react";
import { Card } from "@repo/ui";

export default function Page() {
  return (
    <Card>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Home size={64} className="text-gray-800" />
      </div>
    </Card>
  );
}
