import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export function Loading({ message = "Loading...", size = "md" }: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-center p-6">
        <div className="flex flex-col items-center space-y-2">
          <Loader2 className={`${sizeClasses[size]} animate-spin`} />
          <p className="text-muted-foreground text-sm">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return <Loader2 className={`${sizeClasses[size]} animate-spin`} />;
}
