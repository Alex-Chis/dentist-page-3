"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function DentalFaqAi() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Dental Hygiene Questions?</CardTitle>
        <p className="text-sm text-muted-foreground">
          Ask our AI about general dental hygiene topics.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="e.g., How often should I floss?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isLoading}
            aria-label="Ask a dental hygiene question"
          />
          <Button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Ask AI"
            )}
          </Button>
        </form>
      </CardContent>
      {(answer || error) && (
        <CardFooter className="flex flex-col items-start pt-4 border-t">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {answer && (
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Answer:</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
