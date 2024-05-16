import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Shortify</CardTitle>
        <CardDescription>
          Open source URL shortener. Shorten your links with ease.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none">Copy to clipboard</p>
          </div>
          <Switch />
        </div>
      </CardContent>
      <CardContent>
        <Input
          type="text"
          placeholder="https://example.com"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" />
          Generate Short Link
        </Button>
      </CardFooter>
    </Card>
  );
}
