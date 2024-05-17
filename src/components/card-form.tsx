"use client";

import { useLink } from "@/app/hooks/useLink";
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
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { isValidHttpUrl as validateUrl } from "@/lib/validation";
import { ToastAction } from "@radix-ui/react-toast";
import { BellRing, Check } from "lucide-react";
import * as React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "./ui/input";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  const { shortenLink, shortenedLink, error, loading } = useLink();
  const { toast } = useToast();

  const [originalUrl, setOriginalUrl] = React.useState<string>("");
  const [copyToClipboard, setCopyToClipboard] = React.useState<boolean>(false);

  const handleGenerateLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!originalUrl) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "URL cannot be empty",
        action: (
          <ToastAction altText="Try again">
            <Button
              onClick={() => document.querySelector("input")?.focus()}
              variant="secondary"
            >
              Try again
            </Button>
          </ToastAction>
        ),
      });
      return;
    }

    if (!validateUrl(originalUrl)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid URL with http:// or https://",
        action: (
          <ToastAction altText="Try again">
            <Button
              onClick={() => document.querySelector("input")?.focus()}
              variant="secondary"
            >
              Try again
            </Button>
          </ToastAction>
        ),
      });
      return;
    }

    shortenLink(originalUrl);
  };

  React.useEffect(() => {
    if (shortenedLink) {
      if (copyToClipboard) {
        navigator.clipboard.writeText(shortenedLink);
      }
      toast({
        title: "Link generated successfully",
        description: shortenedLink,
        action: (
          <ToastAction altText="Copy To Clipboard">
            <Button
              onClick={() => navigator.clipboard.writeText(shortenedLink)}
            >
              Copy
            </Button>
          </ToastAction>
        ),
      });
    } else if (error) {
      toast({
        title: "Error",
        description: error,
      });
    }
  }, [shortenedLink, error, toast, copyToClipboard]);

  return (
    <form onSubmit={handleGenerateLink}>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Shortify</CardTitle>
          <CardDescription>
            Open source URL shortener. Shorten your links with ease.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="text"
            placeholder="https://example.com"
            className="rounded-md border border-input bg-background px-3 py-4 text-sm w-full"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </CardContent>
        {/* <CardContent>
          <div className="flex items-center space-x-4 rounded-md border p-3">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm leading-none">Copy to clipboard</p>
            </div>
            <Switch
              checked={copyToClipboard}
              onCheckedChange={setCopyToClipboard}
            />
          </div>
        </CardContent> */}
        <CardFooter>
          <Button className="w-full" type="submit" disabled={loading}>
            <Check className="mr-2 h-4 w-4" />
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Generate"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
