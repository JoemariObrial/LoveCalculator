"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Heart } from "lucide-react";

export function ValentineLoveCalculatorComponent() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const calculateLove = () => {
    if (!name1 || !name2) return;

    const combinedNames = `${name1.toLowerCase()}${name2.toLowerCase()}`;
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      sum += combinedNames.charCodeAt(i);
    }

    const percentage = sum % 101;
    setResult(percentage);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-pink-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden border-2 border-pink-300">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-2">Love Match</h2>
            <p className="text-pink-600">Find your Valentine's match!</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-red-600">
                Your Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full bg-pink-50 border-pink-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium text-red-600">
                Your Valentine's Name
              </label>
              <Input
                type="text"
                placeholder="Enter your Valentine's name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="w-full bg-pink-50 border-pink-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>

          <Button
            onClick={calculateLove}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2" />
            Calculate Love
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white rounded-2xl p-0 overflow-hidden max-w-sm">
          <div className="bg-gradient-to-r from-pink-400 to-red-400 p-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-white text-center">
                Love Result
              </DialogTitle>
            </DialogHeader>
          </div>
          {result !== null && (
            <div className="text-center p-6">
              <div className="text-6xl font-bold text-red-500 mb-4">
                {result}%
              </div>
              <DialogDescription className="text-lg text-gray-700">
                {result > 50
                  ? "Maybe you're better as friends. Keep looking for your true Valentine!"
                  : result < 30
                  ? "Find another that you same feelings" // This condition will trigger if the result is less than 50.
                  : result < 80
                  ? "There's potential! Give love a chance this Valentine's Day."
                  : "A perfect Valentine's match! Love is in the air! 💖"}
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
